import {
  Dispatch,
  InputHTMLAttributes,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'

import { useFormContext } from './FormProvider'

interface FormAddressProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  required: boolean
  customHandleChange?: Dispatch<SetStateAction<any>>
}

export const FormAddress = (props: FormAddressProps) => {
  const { label, name, required, customHandleChange, ...rest } = props

  const [hasContent, setHasContent] = useState<boolean>(false)
  const { isPending } = useFormContext()

  const inputRef = useRef<HTMLInputElement | null>(null)

  const getLabelStyles = () =>
    hasContent ? '-translate-y-2 text-xs' : '-translate-y-0'

  useEffect(() => {
    const handleInputChange = () => {
      if (inputRef.current) {
        setHasContent(!!inputRef.current.value)
      }
    }

    const inputElement = inputRef.current
    inputElement?.addEventListener('input', handleInputChange)

    return () => {
      inputElement?.removeEventListener('input', handleInputChange)
    }
  }, [inputRef])

  useEffect(() => {
    if (inputRef.current) {
      setHasContent(!!inputRef.current.value)
    }

    const loadScript = () => {
      // TODO: use env variable for APIKEY
      const googleApiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY
      if (!window.google || !window.google.maps) {
        const script = document.createElement('script')
        script.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places`
        script.async = true
        script.defer = true
        script.onload = initializeAutocomplete // Call initializeAutocomplete once script is loaded
        document.head.appendChild(script)
      } else {
        initializeAutocomplete() // If already loaded, directly initialize autocomplete
      }
    }

    const initializeAutocomplete = () => {
      if (window.google && window.google.maps && inputRef.current) {
        const autocomplete = new window.google.maps.places.Autocomplete(
          inputRef.current,
        )
        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace()

          if (customHandleChange) {
            customHandleChange({
              target: { value: place.formatted_address, name },
            })
          }
        })
      }
    }

    loadScript()

    if (window.google && window.google.maps && inputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        inputRef.current,
      )
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace()

        if (customHandleChange) {
          customHandleChange({
            target: { value: place.formatted_address, name },
          })
        }
      })
    }

    return () => {
      const scripts = document.head.getElementsByTagName('script')
      for (let i = scripts.length - 1; i >= 0; i--) {
        if (scripts[i].src.includes('maps.googleapis.com')) {
          scripts[i]?.parentNode?.removeChild(scripts[i])
        }
      }
    }
  }, [inputRef])

  return (
    <label className='relative w-full' htmlFor={name}>
      <input
        className='px-2 pt-6 pb-2 text-md outline-none border-none leading-5 rounded-lg duration-200 peer w-full bg-hex-600 shadow-lg autofill:focus:text-hex-900'
        id={name}
        name={name}
        ref={inputRef}
        disabled={isPending}
        placeholder=''
        onChange={customHandleChange ?? rest.onChange}
        {...rest}
      />

      <span
        className={`absolute top-4 left-2 tracking-wide capitalize pointer-events-none duration-200 peer-autofill:peer-focus:text-hex-900 peer-focus:-translate-y-2 peer-focus:text-xs peer-autofill:text-hex-900 ${getLabelStyles()}`}
      >
        {label}
        {required && <span className='text-danger'>*</span>}
      </span>
    </label>
  )
}

import { ChangeEvent, useEffect, useState } from 'react'
import { boolean, number, object, string } from 'yup'
import Input from '../components/Form/Input'
import Toggler from '../components/Form/Toggler'
import Modal from '../components/Modal/Modal'
import { useApiService } from '../hooks/useApiService'
import {
  CreateProductFormData,
  CreateProductFormErrors,
  HttpMethod,
} from '../types'
import matchObjectWithModel from '../utils/validation/matchObjectWithModel'

const formDataInitialState: CreateProductFormData = {
  name: '',
  price: 0,
  needStock: true,
  stock: 0,
}

const CreateProductForm: React.FC = () => {
  const [formData, setFormData] = useState(formDataInitialState)

  const [formErrors, setFormErrors] = useState<
    Partial<CreateProductFormErrors>
  >({} as CreateProductFormErrors)

  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] =
    useState<boolean>(true)

  const { fetchData, error, isSuccess, data, isLoading } = useApiService({
    method: HttpMethod.POST,
  })

  const validationSchema = {
    name: object({ name: string().trim().required() }),
    price: object({
      price: number()
        .positive('Product price must be a positive number')
        .required('Product price is required'),
    }),
    stock: object({
      needStock: boolean(),
      stock: number().when('needStock', {
        is: true,
        then: (schema) => schema.positive().required(),
        otherwise: (schema) => schema.positive().optional(),
      }),
    }),
  }

  const validateInputData = async (value: string, property: string) => {
    if (value === '') {
      setFormErrors((prevState) => ({
        ...prevState,
        [property]: `${property} is a required field`,
      }))

      return
    }

    if (property in validationSchema) {
      try {
        await (validationSchema as any)[property].validate({
          [property]: value,
        })

        delete formErrors[property as keyof CreateProductFormErrors]
      } catch (error: any) {
        setFormErrors((prevState) => ({
          ...prevState,
          [property]: error.errors[0],
        }))
      }
    }
  }

  const handleFormDataChange = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const { value, name, type, checked } = event.target

    const casedName = name.replace(/-[a-z]/g, (match) => match[1].toUpperCase())

    await validateInputData(value, name)

    setFormData((prevState) => ({
      ...prevState,
      [casedName]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async () => {
    const requestBody = matchObjectWithModel(formData)

    await fetchData('products', requestBody)

    if (error) {
      console.debug({ error })
    }

    if (isSuccess) {
      console.debug({ data })
    }
  }

  useEffect(() => {
    const optionalFields = ['stock']

    const isStockEmptyWhenNeeded = (() => {
      if (!formData.needStock) {
        delete formErrors.stock
      }

      return formData.needStock && !formData.stock
    })()

    const hasErrors = Object.values(formErrors as object).some(
      (error) => error !== undefined,
    )

    const hasEmptyValues = Object.entries(formData as Record<string, any>).some(
      ([property, input]) => {
        return input === '' && !optionalFields.includes(property)
      },
    )

    setIsSubmitButtonDisabled(
      hasErrors || hasEmptyValues || isStockEmptyWhenNeeded,
    )
  }, [formErrors, formData])

  useEffect(() => {
    if (error) {
      console.error(error)
    }

    if (isSuccess) {
      console.debug('success! :D')
    }
  }, [error, isSuccess])

  return (
    <Modal
      title='Add new product'
      actions={
        <button
          className={`shadow-neumorphic-sm block rounded-full
          px-5 py-1 mr-0 ml-auto
          border-2 border-blue-600
          hover:bg-blue-600 hover:text-gray-800
          disabled:border-none disabled:shadow-neumorphic-inset disabled:bg-gray-600 disabled:bg-opacity-5 disabled:hover:text-inherit
          transition-all duration-200
          `}
          disabled={isSubmitButtonDisabled || isLoading}
          onClick={handleSubmit}
        >
          Submit
        </button>
      }
    >
      <small>
        {JSON.stringify({
          data,
          isLoading,
          error,
          isSuccess,
        })}
      </small>
      <form onSubmit={handleSubmit}>
        <Input
          name='name'
          handleChange={handleFormDataChange}
          value={formData.name}
          error={formErrors?.name}
        />
        <Input
          name='price'
          handleChange={handleFormDataChange}
          value={formData.price}
          error={formErrors?.price}
          type='number'
        />
        <Toggler
          name='need-stock'
          handleChange={handleFormDataChange}
          value={formData.needStock}
          caption='*disable if there is no specific stock assigned to this product'
        />
        {formData.needStock && (
          <Input
            name='stock'
            handleChange={handleFormDataChange}
            value={formData.needStock ? formData.stock : ''}
            error={formErrors?.stock}
            type='number'
          />
        )}
      </form>
    </Modal>
  )
}

export default CreateProductForm

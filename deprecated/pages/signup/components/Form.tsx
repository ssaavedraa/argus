// import {
//   Cancel,
//   CheckCircle,
//   Visibility,
//   VisibilityOff,
// } from '@mui/icons-material'
// import { Input } from '@nextui-org/react'
// import { useState } from 'react'
// import {
//   PasswordRequirement,
//   PasswordRequirementErrors,
//   SignupFormData,
// } from '../types'
// import FormFooter from './FormFooter'
// import SubmitButton from './SubmitButton'

// export default function Form() {
//   const formInitialState: SignupFormData = {
//     name: '',
//     email: '',
//     password: '',
//     passwordConfirmation: '',
//   }

//   const passwordRequirements: PasswordRequirement[] = [
//     {
//       description: 'At least 8 characters long.',
//       errorKey: '8Characters',
//       validation: /.{8,}/,
//     },
//     {
//       description: 'Include at least one uppercase letter.',
//       errorKey: 'uppercase',
//       validation: /[A-Z]/,
//     },
//     {
//       description: 'Include at least one lowercase letter.',
//       errorKey: 'lowercase',
//       validation: /[a-z]/,
//     },
//     {
//       description: 'Include at least one number.',
//       errorKey: 'number',
//       validation: /\d/,
//     },
//     {
//       description: 'Include at least one special character.',
//       errorKey: 'specialCharacter',
//       validation: /[\W_]/,
//     },
//   ]

//   const passwordRequirementErrorsInitialState: PasswordRequirementErrors = {
//     '8Characters': true,
//     uppercase: true,
//     lowercase: true,
//     number: true,
//     specialCharacter: true,
//   }

//   const formFields: (keyof SignupFormData)[] = [
//     'name',
//     'email',
//     'password',
//     'passwordConfirmation',
//   ]

//   const [formData, setFormData] = useState<SignupFormData>(formInitialState)

//   const [formErrors, setFormErrors] =
//     useState<Partial<SignupFormData>>(formInitialState)

//   const [passwordRequirementErrors, setPasswordRequirementErrors] =
//     useState<PasswordRequirementErrors>(passwordRequirementErrorsInitialState)

//   const [isPasswordVisible, setIsPasswordVisible] = useState(false)

//   const getLabel = (field: string) => {
//     switch (field) {
//       case 'passwordConfirmation':
//         return 'Confirm password'
//       default:
//         return field
//     }
//   }

//   const togglePasswordVisibility = () =>
//     setIsPasswordVisible((prevState) => !prevState)

//   const validateFullName = (value: string) => {
//     if (value.trim() === '') {
//       setFormErrors((prevState) => ({
//         ...prevState,
//         fullName: 'Full name is required',
//       }))
//     } else {
//       delete formErrors.name
//     }
//   }

//   const validateEmail = (value: string) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

//     if (!emailRegex.test(value)) {
//       setFormErrors((prevState) => ({
//         ...prevState,
//         email: 'Invalid email address',
//       }))
//     } else {
//       delete formErrors.email
//     }
//   }

//   const validatePassword = (value: string) => {
//     const newErrors: Partial<PasswordRequirementErrors> = {}

//     passwordRequirements.forEach(({ validation, errorKey }) => {
//       newErrors[errorKey] = !validation.test(value)
//     })

//     setPasswordRequirementErrors((prevState) => ({
//       ...prevState,
//       ...newErrors,
//     }))
//   }

//   const validatePasswordConfirmation = (value: string) => {
//     if (value !== formData.password) {
//       setFormErrors((prevState) => ({
//         ...prevState,
//         passwordConfirmation: `Passwords do not match`,
//       }))
//     } else {
//       delete formErrors.passwordConfirmation
//     }
//   }

//   const isValid = (errorKey: keyof PasswordRequirementErrors) =>
//     !passwordRequirementErrors[errorKey]

//   const handleInputChange = (
//     fieldName: keyof SignupFormData,
//     fieldValue: string,
//   ) => {
//     setFormData((prevState) => ({ ...prevState, [fieldName]: fieldValue }))

//     switch (fieldName) {
//       case 'password':
//         validatePassword(fieldValue)
//         break
//       case 'email':
//         validateEmail(fieldValue)
//         break
//       case 'name':
//         validateFullName(fieldValue)
//         break
//       case 'passwordConfirmation':
//         validatePasswordConfirmation(fieldValue)
//         break
//     }
//   }
//   return (
//     <form className='flex flex-col items-center gap-4' action={formAction}>
//       {formFields.map((field) => (
//         <div key={field} className='w-5/6'>
//           <Input
//             name={field}
//             type={
//               field.includes('password') && !isPasswordVisible
//                 ? 'password'
//                 : 'text'
//             }
//             label={getLabel(field)}
//             color='primary'
//             variant='bordered'
//             size='sm'
//             className='w-full capitalize'
//             classNames={{
//               inputWrapper: 'border-[#7720D1] border bg-black bg-opacity-40',
//             }}
//             isRequired
//             value={formData[field as keyof SignupFormData]}
//             onChange={(e) => handleInputChange(field, e.target.value)}
//             errorMessage={formErrors[field]}
//             endContent={
//               field.includes('password') && (
//                 <button
//                   className='focus:outline-none'
//                   type='button'
//                   onClick={togglePasswordVisibility}
//                 >
//                   {isPasswordVisible ? (
//                     <VisibilityOff fontSize='small' />
//                   ) : (
//                     <Visibility fontSize='small' />
//                   )}
//                 </button>
//               )
//             }
//           />
//           {field === 'password' && formData.password && (
//             <div className='bg-[#241334] -mt-2 p-4 rounded-lg'>
//               <span className='pb-2 block'>Password requirements</span>
//               <ul className='font-light text-sm flex flex-col gap-1'>
//                 {passwordRequirements.map(({ description, errorKey }) => (
//                   <li
//                     className={`flex flex-row flex-nowrap text-nowrap gap-1 items-center ${isValid(errorKey) ? 'text-success' : 'text-danger'}`}
//                     key={errorKey}
//                   >
//                     {isValid(errorKey) ? (
//                       <CheckCircle fontSize='small' />
//                     ) : (
//                       <Cancel fontSize='small' />
//                     )}
//                     {description}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       ))}
//       <FormFooter />
//       <SubmitButton formAction={formAction} />
//     </form>
//   )
// }

export default function Form() {
  return <div>Form</div>
}

import { ChangeEvent, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { boolean, number, object, string } from 'yup'
import Alert from '../components/Alert/Alert'
import Input from '../components/Form/Input'
import Toggler from '../components/Form/Toggler'
import Modal from '../components/Modal/Modal'
import { useApiService } from '../hooks/useApiService'
import useModal from '../hooks/useModal'
import {
  AlertType,
  CreateProductFormData,
  CreateProductFormErrors,
  HttpMethod,
  IconName,
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

  const [showAlert, setShowAlert] = useState(false)

  const { fetchData, error, isSuccess, data, isLoading } = useApiService<{
    message: string
  }>({
    method: HttpMethod.POST,
  })

  const { closeModal } = useModal()

  const { t } = useTranslation()

  const validationSchema = {
    name: object({ name: string().trim().required() }),
    price: object({
      price: number()
        .positive(t('productPricePositive'))
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
        [property]: t('fieldIsRequired', { field: t(property) }),
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
  }

  const getAlertIcon = (): IconName => {
    if (error) {
      return 'error'
    }

    if (isSuccess) {
      return 'success'
    }

    return 'info'
  }

  const getAlertType = (): AlertType => {
    if (error) {
      return 'error'
    }

    if (isSuccess) {
      return 'success'
    }

    return 'info'
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
      setShowAlert(true)
    }

    if (isSuccess) {
      setShowAlert(true)
      setFormData(formDataInitialState)

      setTimeout(() => {
        closeModal()
      }, 2500)
    }

    if (isLoading) {
      setShowAlert(true)
    }
  }, [error, isSuccess, isLoading])

  return (
    <Modal
      title='add new product'
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
          {t('createProduct')}
        </button>
      }
    >
      {showAlert && (
        <Alert
          type={getAlertType()}
          message={t(
            error ||
              data?.message ||
              'please wait while we create your product',
          )}
          iconName={getAlertIcon()}
        />
      )}

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

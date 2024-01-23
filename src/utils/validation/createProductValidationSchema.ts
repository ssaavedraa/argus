import { CreateProductFormData } from '../../types'

const createProductValidationSchema = (formData: CreateProductFormData) => ({
  name: (value: string): string | void => {
    if (!value || value.trim() === '') {
      return 'Product name is required'
    }
  },
  price: (value: number): string | void => {
    if (isNaN(value)) {
      return 'Product price must be a number'
    }

    if (!value) {
      return 'Product price is required'
    }

    if (value <= 0) {
      return 'Product price must be positive'
    }
  },
  stock: (value: number): string | void => {
    if (isNaN(value)) {
      return 'Product stock must be a number'
    }

    if (!value && formData.needStock) {
      return 'Product stock is required'
    }

    if (value <= 0) {
      return 'Product stock must be positive'
    }
  },
})

export default createProductValidationSchema

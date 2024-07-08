'use server'

const apiUrl = process.env.API_DOMAIN

export const updateInvitedUser = async (formData: FormData) => {
  try {
    const user = {
      email: formData.get('email'),
      address: formData.get('address'),
      companyRole: formData.get('companyRole'),
      fullname: formData.get('fullname'),
      password: formData.get('password'),
      phoneNumber: formData.get('phoneNumber'),
      id: Number(formData.get('id')),
    }

    const response = await fetch(`${apiUrl}/api/users`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(user),
    })

    if (!response.ok) {
      const errorResponse = await response.json()
      throw new Error(errorResponse.message)
    }
  } catch (error) {
    throw error
  }
}

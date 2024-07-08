'use server'

const apiUrl = process.env.API_DOMAIN

export const updateInvitedUserCompany = async (formData: FormData) => {
  try {
    const company = {
      name: formData.get('name'),
      address: formData.get('address'),
      domain: formData.get('domain'),
      nit: formData.get('nit'),
      phoneNumber: formData.get('phoneNumber'),
      id: Number(formData.get('id')),
    }

    const response = await fetch(`${apiUrl}/api/companies`, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(company),
    })

    if (!response.ok) {
      const errorResponse = await response.json()
      throw new Error(errorResponse.message)
    }
  } catch (error) {
    throw error
  }
}

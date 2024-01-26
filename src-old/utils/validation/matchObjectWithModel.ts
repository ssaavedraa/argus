import stringToNumber from './stringToNumber'

const matchObjectWithModel = (obj: any) => {
  const transformedObject = {} as any

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]

      transformedObject[key] = stringToNumber(key, value)
    }
  }

  return transformedObject
}

export default matchObjectWithModel

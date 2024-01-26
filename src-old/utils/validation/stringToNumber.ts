const stringToNumber = <T>(
  fieldName: string,
  value: string | boolean,
): T[keyof T] => {
  const numericFields = ['price', 'stock']

  if (typeof value === 'string') {
    return numericFields.includes(fieldName)
      ? (Number(value) as T[keyof T])
      : (String(value) as T[keyof T])
  }

  return value as T[keyof T]
}

export default stringToNumber

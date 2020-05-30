export function checkValidNumber (value) {
  let processedValue = value
  if (typeof value !== 'number') {
    processedValue = Number(value)
  }

  if (Number.isNaN(processedValue)) {
    return false
  }
  
  return true
}
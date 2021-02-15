import { useState } from 'react'

export const useValidatorsType = (initialState: any, validators = []) => {
  const [value, setValue] = useState(initialState)

  return { value }
}

import React from 'react'
import TextField from '@material-ui/core/TextField'

export const Input = (props: any) => {

  return (
    <TextField
      {...props}
      error={!!(props.helperText)}
    />

  )
}

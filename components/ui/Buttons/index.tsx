import React from 'react'
import { NormalButton } from './styles'

export const Button = (props: any) => {
  return (
    <NormalButton
      {...props}
    >
      {props.children}
    </NormalButton>
  )
}

import React from 'react'
import {Button} from '@material-ui/core'

export const NormalButton: React.FC = (props: any) => (
    <Button variant="contained"
            color="primary">
        {props.children}
        <style jsx>{`
        button {
          background:  ${props?.background ? props.background : 'red'};
          display: ${props.canDisplay ? 'inline-block' : 'none'};
        }
     `}</style>
    </Button>
)

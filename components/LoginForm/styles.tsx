import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

export const Title: React.FC = ({children}) => (
    <h2>
        {children}
        <style jsx>{`
        h2 {
          font-size: 16px;
          font-weight: 500;
          padding: 8px 0;
          color: white;
          text-align: center;
        }
     `}</style>
    </h2>
)
export const LoginError: React.FC = ({children}) => (
    <div>
        {children}
        <style jsx>{`
        div {
          font-size: 0.8em;
            color: white;
            background: #f15a5a;
            padding: 10px 20px;
            text-align: center;
            margin-top: 10px;
            width: 350px;
            width: 100%;
        }
     `}</style>
    </div>
)

export const LoadingMessage: React.FC = ({children}) => (
    <div>
        {children}
        <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          width: 100%;
           color: #ececec;
          font-style: italic;
        }
     `}</style>
    </div>
)

export const useLoginFormStyles = makeStyles((theme) => ({
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

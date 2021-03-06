
import React from "react";
import {Paper} from "@material-ui/core";


export const LoginContainer: React.FC = ({children}) => (
    <div>
        {children}
        <style jsx>{`
        div {
           height: 100vh;
           max-width: 500px;
           width: 100%;
           margin: 0 auto;
           padding: 10px;
        }
     `}</style>
    </div>
)
export const FormContent: React.FC = ({children}) => (
    <div className='paper'>
        {children}
        <style jsx>{`
        div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        }
     `}</style>
    </div>
)
export const Image: React.FC = ({children}) => (
    <div>
        {children}
        <style jsx>{`
        div {
           background-image: 'url(https://source.unsplash.com/random)';
            background-repeat: 'no-repeat';
            background-color: white;
            background-size: 'cover';
            background-position: 'center';
        }
     `}</style>
    </div>
)

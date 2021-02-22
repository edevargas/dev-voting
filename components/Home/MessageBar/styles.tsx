import React, {PropsWithChildren} from "react";

export const Container = (props: PropsWithChildren<any>) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
            width: 100%;
            max-width: 800px;
            margin: 40px auto;
            display: flex;
            justify-content: space-between;
            padding: 10px 20px;
            align-items: center;
            background: #f3f3f3;
        }
     `}</style>
    </div>
)

export const BarContent = (props: PropsWithChildren<any>) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
            display: flex;
            align-items: center;
            width: 90%;
            min-width: 250px;
        }
     `}</style>
    </div>
)

export const LeftText = (props: PropsWithChildren<any>) => (
    <p>
        {props.children}
        <style jsx>{`
        p {
             width: 25%;
             min-width: 90px;
             padding: 0 10px;
             word-break: break-all;
             margin: 0;
             
        }
                strong {
        color: #ffffff;
        }
     `}</style>
    </p>
)

export const RightText = (props: PropsWithChildren<any>) => (
    <p>
        {props.children}
        <style jsx>{`
        p{
            padding: 0 10px;
            width: 70%;
            margin: 0 0 0 20px;
           
        }
     `}</style>
    </p>
)

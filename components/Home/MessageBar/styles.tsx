import React, {PropsWithChildren} from "react";

export const Container = (props: PropsWithChildren<any>) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
            width: 100%;
            max-width: 800px;
            margin: 40px auto;
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
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
            background: #f3f3f3;
            padding: 0 20px;
        }
     `}</style>
    </div>
)

export const LeftText = (props: PropsWithChildren<any>) => (
    <p>
        {props.children}
        <style jsx>{`
        p strong{
            font-size: 2em;
             width: 20%;
             word-break: break-all;
        }
     `}</style>
    </p>
)

export const RightText = (props: PropsWithChildren<any>) => (
    <p>
        {props.children}
        <style jsx>{`
        p strong{
            font-size: 0.9em;
            width: 70%;
           
        }
     `}</style>
    </p>
)

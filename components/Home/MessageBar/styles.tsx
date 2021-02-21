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
            padding: 0 20px;
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
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
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
             min-width: 150px;
             padding: 0 10px;
             word-break: break-all;
             margin: 0;
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
            padding: 0 10px;
            width: 70%;
            margin: 0;
           
        }
     `}</style>
    </p>
)

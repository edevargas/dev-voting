import React, {PropsWithChildren} from "react";
import {Button} from "@material-ui/core";

export const CardContainer = (props: PropsWithChildren<any>) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
           background-image: url(${props.image});
            background-repeat: no-repeat;
            background-color: white;
            background-size: cover;
            background-position: center;
            width: 350px;
            height: 400px;
            display: flex;
            flex-direction: column;
            margin: 20px 10px;
            justify-content: flex-end;
            color: white;
        }
     `}</style>
    </div>
)
export const CardBody = (props: PropsWithChildren<any>) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
             display: flex;
             width: 100%;
        }
     `}</style>
    </div>
)

export const CardDescription = (props: PropsWithChildren<any>) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
            margin-bottom: 30px;
        }
     `}</style>
    </div>
)
export const Name = (props: PropsWithChildren<any>) => (
    <h2>
        {props.children}
        <style jsx>{`
        h2 {
            font-size: 1.7em;
            margin-top: 0;
            margin-left: 10px;
        }
     `}</style>
    </h2>
)
export const Description = (props: PropsWithChildren<any>) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
             font-size: 0.8em;
             margin-bottom: 10px;
        }
     `}</style>
    </div>
)

export const ResumeThumb = (props: PropsWithChildren<any>) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
             display: flex;
             width: 100%;
             height: 50px;
             align-items: center;
        }
     `}</style>
    </div>
)

export const ThumbUp= (props: PropsWithChildren<any>) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
             background: #2c9b96;
             width: ${props.per}%;
             padding: 10px 0;
        }
     `}</style>
    </div>
)

export const ThumbDown= (props: PropsWithChildren<any>) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
             background: #cf942f;
              width: ${props.per}%;
               padding: 10px 0;
        }
     `}</style>
    </div>
)

export const VoteZone = (props: PropsWithChildren<any>) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
             display: flex;
             width: 100%;
        }
     `}</style>
    </div>
)
export const ButtonThumbUp = (props: PropsWithChildren<any>) => (
    <div {...props}>
        {props.children}
        <style jsx>{`
        div {
             background: #2c9b96;
             width: 40px;
             height: 40px;
             margin-right: 5px;
             cursor: pointer;
             line-height: 50px;
             text-align: center;
        }
     `}</style>
    </div>
)
export const ButtonThumbDown = (props: PropsWithChildren<any>) => (
    <div {...props}>
        {props.children}
        <style jsx>{`
        div {
             background: #cf942f;
             width: 40px;
             height: 40px;
             margin-right: 5px;
             cursor: pointer;
             line-height: 50px;
             text-align: center;
        }
     `}</style>
    </div>
)
export const ButtonVote = (props: PropsWithChildren<any>) => (
    <Button variant="contained" color="primary" {...props}>
        {props.children}
        <style jsx>{`
        .Button {
             color: white !important;
        }
     `}</style>
    </Button>
)

export const WinnerZone = (props: PropsWithChildren<any>) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
             width: 50px
        }
     `}</style>
    </div>
)


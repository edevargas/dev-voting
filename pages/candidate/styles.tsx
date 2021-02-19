import React, {PropsWithChildren} from "react";

export const CandidateContainer: React.FC = ({children}) => (
    <div>
        {children}
        <style jsx>{`
        div {
           height: 100vh;
           max-width: 960px;
           width: 100%;
           margin: 0 auto;
        }
     `}</style>
    </div>
)

export const ProfileImage = (props: PropsWithChildren<any>) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
           background-image: url(${props.image});
            background-repeat: no-repeat;
            background-color: white;
            background-size: cover;
            background-position: top;
            width: 100%;
            max-width: 960px;
            height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: white;
            margin-right: 40px;
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

export const ResumeBox = (props: PropsWithChildren<any>) => (
    <div className="box-blur">
        {props.children}
        <style jsx>{`
        div {
             background: rgba(11,23,26,0.73);
             width: 40%;
             min-width: 300px;
             max-width: 400px;
             height: 300px;
             margin: 0 10px;
             padding: 20px;
             display: flex;
             flex-direction: column;
             justify-content: flex-end;
  
        }
     `}</style>
    </div>
)

export const Description = (props: PropsWithChildren<any>) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
             font-size: 0.8em;
             margin-bottom: 10px;
             color: white;
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
             z-index: 3;
        }
     `}</style>
    </div>
)
export const ThumbUp= (props: PropsWithChildren<any>) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
             background: #2c9b96e0;
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
             background: #cf942fe8;
              width: ${props.per}%;
               padding: 10px 0;
        }
     `}</style>
    </div>
)

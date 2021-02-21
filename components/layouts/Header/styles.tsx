import React, {PropsWithChildren} from "react";
import Button from "@material-ui/core/Button";

export const LogInOutButton = (props: PropsWithChildren<any>) => (
    <Button color="inherit" {...props}>
        <style jsx>{`
        Button {
             color: #333333;
        }
     `}</style>
    </Button>
)
export const CustomToolbar = (props: PropsWithChildren<any>) => (
    <div className="tool-custom">
        {props.children}
        <style jsx>{`
        .tool-custom {
            display: flex;
             justify-content: space-around;
             height: 50px;
             line-height: 50px;
             align-items: center;
             color: #333333;
        }
     `}</style>
    </div>
)

export const HeaderContainer = (props: PropsWithChildren<any>) => (
    <div className="tool-custom">
        {props.children}
        <style jsx>{`
        .tool-custom {
        display: flex;
             justify-content: space-around;
             height: 50px;
             line-height: 50px;
             align-items: center;
        }
     `}</style>
    </div>
)

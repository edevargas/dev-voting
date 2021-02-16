import React, {PropsWithChildren} from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import {Toolbar} from "@material-ui/core";

export const LogInOutButton = (props: PropsWithChildren<any>) => (
    <a {...props}>
        <Button color="inherit">Sign in</Button>
        <style jsx>{`
        a {
             color: white;
        }
     `}</style>
    </a>
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
        }
     `}</style>
    </div>
)

import React, {PropsWithChildren} from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";

export const LoginButton = (props: PropsWithChildren<any>) => (
    <Link href={props.href}>
        <a>
            <Button color="inherit">
                {props.children}
            </Button>
            <style jsx>{`
                    a {
                         color: #333333;
                         text-decoration: none;
                    }
                 `}</style>
        </a>
    </Link>

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

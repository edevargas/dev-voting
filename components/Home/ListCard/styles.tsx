import React, {PropsWithChildren} from "react";

export const ListContainer = (props: PropsWithChildren<any>) => (
    <div>
        {props.children}
        <style jsx>{`
        div {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            max-width: 900px;
            margin: 0 auto;
        }
     `}</style>
    </div>
)

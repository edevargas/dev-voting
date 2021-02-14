import React from 'react'

export const MainContainer: React.FC = ({ children }) => (
    <div>
        <style jsx>{`
        div {
           width: 100%;
           margin: 0 auto;
        }
     `}</style>
    </div>
)

export const ChildrenContainer: React.FC = ({ children }) => (
    <div>
        { children }
        <style jsx>{`
        div {
           width: 100%;
           display: inline-block;
        }
     `}</style>
    </div>
)

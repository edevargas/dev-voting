import React from 'react'

export const MainContainer: React.FC = ({ children }) => (
    <div className='main-container'>
        { children }
        <style jsx>{`
        .main-container {
           width: 100%;
           margin: 0 auto;
           max-width: 900px;
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

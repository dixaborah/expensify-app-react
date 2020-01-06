import React from 'react'
import ReactDOM from'react-dom'

// Stateless Component
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const requireAuthenticated = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (<WrappedComponent { ...props } />) : (<p>Please login</p>) }
        </div>
    )
}

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>{props.info}</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthenticated(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="This is private. Please don't share this" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is private. Please don't share this" />, document.getElementById('app'))
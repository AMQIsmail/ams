import React, { Fragment } from 'react';
const ChildCom = (props) => {
        const data = 'I am from Child Component';
        props.onChildData(data);
    
    return (
        <Fragment>
            <h1>I am child component</h1>
        </Fragment>
    )
}
export default ChildCom;
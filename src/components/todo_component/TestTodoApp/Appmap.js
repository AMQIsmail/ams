import React, { Fragment } from 'react';

const AppMap = (props) => {
    const {title, desc, id} = props.TodoAxtra;
    return (
        <Fragment>
                 <article>
                    <div>
                    <h6> h6 {id} h6 </h6>
                    <h6> h6 {title} h6 </h6>
                     <h6> h6 {desc} h6 </h6>

                    <h1>{props.TodoAxtra.id}</h1>
                    <h1>{props.TodoAxtra.title}</h1>
                     <h1>{props.TodoAxtra.desc}</h1>
                    </div>
                 </article>
             </Fragment>
    );
};
export default AppMap;
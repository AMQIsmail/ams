import React, { Fragment } from 'react';
import AppMap from './Appmap';

const Appass = (props) => {
  console.log(props.TodoPass);
    return (
      <Fragment>
      <section>
        <h1>{props.axtraData}</h1>
         {
              props.TodoPass.map((axtra) => (
                <AppMap 
                key={axtra.id} 
                TodoAxtra={axtra}  
                />
              ))}
      </section>
  </Fragment>
    );
};
export default Appass;
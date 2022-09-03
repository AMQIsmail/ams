//{ Country  App  2 Secant Page Application 36}
import React, { Fragment } from 'react'; 
//import Data from './Data';
import {v4 as uuidv4} from 'uuid';

const Countries = (props) => {

    return (
        <Fragment>
            <section>
                {props.countryData.map((axtra) => {
                    const resiveData = {axtra, id: uuidv4()}
                    // return <Data {...resiveData}  key={resiveData.id} />
                    return (
                        <h2>{ resiveData.name.common }</h2>
                       
                    )
                })}
            </section>
        </Fragment>
    )
}
export default Countries;





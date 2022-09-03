//{ Country  App  3 Third Page Application 36}
import React, { Fragment } from 'react'; 

const Data = (props) => {
  const {coountry} = props.resiveData;
  const {name, flags, capital, population, area } = coountry; 

    return (
        <Fragment>
            <div>
                <img src={flags.png} alt={name.common} />
                <h3>Name: {name.common}</h3>
                <h3>Population: {population}</h3>
                <h3>Capital: {capital}</h3>
                <h3>Area: {area}</h3>
                {console.log(name.common)}

            </div>
        </Fragment>
    )
}
export default Data;
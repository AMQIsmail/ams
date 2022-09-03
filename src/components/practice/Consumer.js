//{ Hooks Context Application (Data Resiver) 29 }
import React, { Fragment } from 'react';
import { RisevConsumer } from './ContextApi';
function MyConsumer (){
    return (
        <Fragment>
          <div style={{textAlign: 'center', marginTop: '200px'}}>
               <RisevConsumer>
                    {
                        masseg=>{
                            return masseg;
                        }
                    }
               </RisevConsumer>
          </div>
        </Fragment>
    )
}
export default MyConsumer;
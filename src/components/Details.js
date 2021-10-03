import React from 'react'
import { useStore } from 'react-redux'

function Details() {  
  const store = useStore();
  {console.log(store.getState().dataItems)}
    return (
        <div className=" d-flex justify-content-center align-items-center pt-5" >
            
            <h1> Hello <span> <i> ali! </i> </span> Your description was <span> <i> {store.getState().dataItems.description} </i> </span> Your email was <span> <i> {store.getState().dataItems.email } </i> </span> </h1>
        </div>
    )
}

export default Details

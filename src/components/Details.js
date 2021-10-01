import React from 'react'

function Details(props) {
    console.log(" deatils: ", props.arr.description)
    return (
        <div className=" d-flex justify-content-center align-items-center pt-5" >
            <h1> Hello <span> <i> ali! </i> </span> Your description was <span> <i> {props.arr.description} </i> </span> </h1>
        </div>
    )
}

export default Details

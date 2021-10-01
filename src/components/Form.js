import React, { useState } from "react";
import { useHistory } from "react-router";

function Form(props) {
  console.log( "props: ",props)
  const [desc, setDesc] = useState({
    email: "",
    phone: "",
    description: "",
  });
  const history= useHistory();


  return (
    <div className="center">
      <div className="row g-3 align-items-center pt-3">
        <label>
          Enter Your E-mail <br />
        </label>

        <div className="col-auto form1">
          <input
            type="text"
            className="form-control"
            aria-describedby="passwordHelpInline"
            value={desc.email}
            onChange={(e) => {
              setDesc({ ...desc, email: e.target.value });
            }}
          />
        </div>
      </div>

      <div className="row g-3 align-items-center pt-3">
        <label>
          Enter Your Phone-No <br />
        </label>

        <div className="col-auto form1">
          <input
            type="text"
            className="form-control"
            aria-describedby="passwordHelpInline"
            value={desc.phone}
            onChange={(e) => {
              setDesc({ ...desc, phone: e.target.value });
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter Desciption
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={desc.description}
            onChange={(e) => {
              setDesc({ ...desc, description: e.target.value });
            }}
          ></textarea>
        </div>
        <div className=" d-flex justify-content-center align-items-center">
        <button className="btn2" onClick= {()=>{ props.add({email:desc.email,phoneNo:desc.phone,description:desc.description}) ; history.push('/details')}}> Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Form;

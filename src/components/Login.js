import React,{useState} from "react";
import { useHistory } from "react-router";

function Login() {

    const [user, setUser] = useState({
        name:"",
        password:""
    })
    const defUser="ali";
    const defPassword="123";
    const history = useHistory();
    const handleclick=()=>{
        if(user.name===defUser && user.password=== defPassword)
        {
            history.push("/form")
        }
        else 
        alert("Name is:" + defUser + " Password is:" + defPassword)
    }


  return (
    <div className="align-items-center center">

        <h2>  Sign In </h2>
      <div className="row g-3 align-items-center pt-3">
        
          <label>
            Name <br/>
          </label>
        
        
        <div className="col-auto form1">
          <input
            type="text"
            className="form-control"
            aria-describedby="passwordHelpInline"
            value={user.name}
            onChange={e=>{setUser({ ...user, name: e.target.value})}}
          />
        </div>
       
      </div>
            <br/>
      <div className="row g-3 align-items-center">
        
          <label >
            Password
          </label>
        
        <div className="col-auto form1">
          <input
            type="password"
            id="inputPassword6"
            className="form-control"
            aria-describedby="passwordHelpInline"
            value={user.password}
            onChange={e=>{setUser( {...user, password : e.target.value})}}
          />
        </div>
        
      </div>
      <button className="btn1" onClick={handleclick}> Submit</button>
    </div>
  );
}

export default Login;

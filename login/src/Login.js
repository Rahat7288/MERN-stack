import React, { useState } from "react";
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';

const Login = () => {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    function validate(event){
        event.preventDefault();
        if(username == 'javascript' && password == 'react'){
            // alert('login Successfull')
            swal('login Successfull')
        }
        else{
            // alert('login is failed')
            swal('invalid login details')
        }
    }
    return ( 
        <div>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <h1>user Authentication</h1>
                    <form onSubmit={validate}>
                        <input type="text" placeholder="username" className="form-control" value={username} 
                        onChange={(e)=>{setusername(e.target.value)}}/>
                        <input type="text" placeholder="password" className="form-control" value={password} 
                        onChange={(e)=>{setpassword(e.target.value)}}/>
                        <input type="submit" className="btn btn-primary"/>
                    </form>
                    
                </div> 
                
            </div>
        </div>
     );
}
 
export default Login;
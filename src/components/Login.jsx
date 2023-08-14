import React, {useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../Context/AuthContext';

function Login(props) {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState();
    const {login, message, setMessage} =useContext(AuthContext);


    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value

        }));
    };
    const submitForm=async(e)=>{
        e.preventDefault();
        login(formData);
    };

    
    return (
        
        <form>
            <div className="mb-3">
                <label className-="form-label" htmlFor="">Email</label>
                <input type="email" name='email' className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
                <label className-="form-label"htmlFor="">Password</label>
                <input type="password" name='password' className="form-control" onChange={handleChange} /></div>
                <p>{message}</p>
                <button className="btn btn-dark" onClick={submitForm}>Login</button>
                <br></br>
                 <p>
                    Forgot Username/Password?
                    <Link to='/about'>click here</Link> for help{""}</p>
                


        </form>
    );
}

export default Login;
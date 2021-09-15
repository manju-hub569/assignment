import React, {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
import imge from './image/img.jpg';

function local () {
    const local = JSON.parse(localStorage.getItem('data'));

    if(local) {
        return JSON.parse(localStorage.getItem('data'));
    } else {
        return [];
    }
}

function Login() {

    const history = useHistory();

    const [inf, setInf] = useState({
        nam:'',pass:''
    });

    const [dataf, setDataf] = useState(local());

    let nam,val
    const setinf = (e) => {
        nam = e.target.name;
        val = e.target.value;

        setInf({...inf, [nam]:val});
    }

    const post = (e) => {
        e.preventDefault();
        
        dataf.filter (val => {
            if(val.name.toLowerCase() == inf.nam.toLowerCase() && val.password.toLowerCase() == inf.pass.toLowerCase()) {
                history.push('/List');
            } else {
                alert('details not matched');
                history.push('/Login');
            }
        })
    }

    useEffect(() => {
        local();
    },[dataf])

    return (
        <>
        <div className = 'brdr'>
        <div style = {{width:'500px',height:'500px'}}>
            <img src = {imge} height = '500px' width = '500px' alt = 'wait' />
        </div>

        <div className = 'form'>
        <form onSubmit = {post}>
            <div className = 'heading'>
                <h1>welcome back!</h1>
                <h3>Please login to your account</h3>
            </div>
            <div className = 'text'>
                <input type = 'text' name = 'nam' onChange = {setinf} value = {inf.nam}
                placeholder = 'Username'
                />
            </div>
            <div className = 'pass'>
                 <input type = 'password' name = 'pass' onChange = {setinf} value = {inf.pass}
                 placeholder = 'Password'
                 />
            </div>
            <div className = 'sub-sect'>
                <div className = 'chbox'>
                    <span><input type = 'checkbox' /></span>
                    <span>remember me</span>
                </div>

                <div className = 'blue'>
                    Forgot Password
                </div>
            </div>
            <div className = 'btn'>
                 <input type = 'submit' value = 'login' />
            </div>
        </form>
        </div>
        </div>
        </>
    )
}

export default Login;

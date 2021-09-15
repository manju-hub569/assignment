import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import imge from './image/img.jpg';

function local () {
    const local = JSON.parse(localStorage.getItem('data'));
    console.log('1')

    if(local) {
        return JSON.parse(localStorage.getItem('data'));
    } else {
        return [];
    }
}

function SignUp () {

    const history = useHistory();

    const [data, setData] = useState({
        name:'',
        password:''
    });

    const [all, setAll] = useState(local());


    let name,value;
    const setinp = (e) => {
        name = e.target.name;
        value = e.target.value;

        setData({...data, [name]:value});
    }

    const handle = (e) => {
        if(data.password.length < 10) {
            alert('password length should be more then 10 character');
        } if(!data.name.includes('@')) {
            alert('please enter valid email include @');
        }else {

        setAll([...all, data]);
        setData({name:'',password:''});
        alert('sign up successfull');

        }
    }

    const login = () => {
        history.push('/Login');
    }

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(all));
    },[all])

    return (
        <>
        <div className = 'brdr'>
        <div style = {{width:'500px',height:'500px'}}>
            <img src = {imge} height = '500px' width = '500px' alt = 'wait' />
        </div>

        <div className = 'form'>
        <div>
            <div className = 'heading'>
                <h1>Hello</h1>
                <h3>Please Sign Up to your account</h3>
            </div>
            <div className = 'text'>
                <input type = 'text' name = 'name' value = {data.name} onChange = {setinp}
                placeholder = 'Enter Email'
                />
            </div>
            <div className = 'pass'>
                 <input type = 'password' name = 'password' value = {data.password} onChange = {setinp}
                 placeholder = 'Enter Password'
                 />
            </div>
            <div className = 'btn'>
                 <input type = 'submit' value = 'Sign Up' onClick = {handle} />
            </div>
            <div className = 'btn'>
                <button className = 'login' onClick = {login}>
                    Login {'->'}
                </button>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default SignUp;
import {useState} from 'react';
import { loginEP } from '../../services/firebase';

const Login = () => {
    const [loginDetails, setLoginDetails] = useState({});

    const handleChange = (e) => {
        setLoginDetails(prev => {
            prev[e.target.name] = e.target.value;
            return prev;
        }); 
    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(loginDetails);
        const resposnse = loginEP(loginDetails);
        console.log('response',resposnse);
    }
    return (
        <form  onSubmit={handleLogin}>
            <input type="email" name="email" placeholder="email" required onChange={e => handleChange(e)} />
            <input type="password" name="password" placeholder="contains at least one uppercase, length greater than 8, one special character  &@#* " required onChange={e => handleChange(e)} />
            <button type="submit">Login</button>
        </form>
    )
}
export default Login;
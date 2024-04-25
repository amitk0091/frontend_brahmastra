import {useState} from 'react';
import { signupEP } from '../../services/firebase';

const Signup = () => {
    const [signupDetails, setSignupDetails] = useState({});

    const handleChange = (e) => {
        setSignupDetails(prev => {
            prev[e.target.name] = e.target.value;
            return prev;
        }); 
    }
    const handleSignup = (e) => {
        e.preventDefault();
        console.log(signupDetails);
        const resposnse = signupEP(signupDetails);
        console.log('response',resposnse);
    }
    return (
        <form onSubmit={e => handleSignup(e)}>
            <input type="email" name="email" placeholder="email" required onChange={e => handleChange(e)} />
            <input type="password" name="password" placeholder="contains at least one uppercase, length greater than 8, one special character  &@#* " required onChange={e=> handleChange(e)} />
            <button type="submit">Signup</button>
        </form>
    )
}
export default Signup;
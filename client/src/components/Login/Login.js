import './Login.css';

import {
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

import OuthContext from "../../contexts/OuthContext";
import ErrorBox from '../ErrorBox/ErrorBox';
import useErrors from '../../hooks/useErrors';
import { useContext } from "react";
import { login } from "../../services/userService";

function Login() {
    const [user, changeUserState,navigate] = useContext(OuthContext)
    const [errors,showErrors]=useErrors();

    function loginUser(e) {
        login(e)
            .then(user =>{
                changeUserState(user)
                navigate('/')
            })
            .catch(err =>showErrors(err))
    }

    return (
        <div className='login'>
            <div className='login-container'>
                <h2>Login</h2>
                <Form onSubmit={loginUser} className='login-form' method='post' >
                    <FormGroup>
                        <Label for="user">
                            Username
                        </Label>
                        <Input
                            id="user"
                            name="username"
                            type="text"
                            placeholder='username'
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">
                            Password
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder='*****'
                            required
                        />
                    </FormGroup>

                    <Input type='submit' id='submit' value='Login' />
                </Form>
                <ErrorBox errors={errors}/>
            </div>
        </div>
    )
}

export default Login
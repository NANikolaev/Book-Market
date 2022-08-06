import "./Register.css"
import {
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'

import ErrorBox from '../ErrorBox/ErrorBox';
import OuthContext from "../../contexts/OuthContext";
import useErrors from "../../hooks/useErrors";
import { useContext } from "react";
import { register } from "../../services/userService";


function Register() {
    const [user, changeUserState,navigate] = useContext(OuthContext)
    const [errors,showErrors]=useErrors()

    function createUser(e) {    
        try{
            register(e)
                .then(user => {
                    changeUserState(user)
                     navigate("/")
                })
                .catch(err=>showErrors(err))
        }
        catch(err){showErrors(err)}
    
    }

    return (
        <div className='register'>
            <div className='register-container'>
                <h2>Register</h2>
                <Form onSubmit={createUser} className="register-form" >
                    <FormGroup>
                        <Label for="user">
                            Username
                        </Label>
                        <Input
                            id="user"
                            name="username"
                            type="text"
                            placeholder="username"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">
                            Email
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="text"
                            placeholder="email"
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
                            placeholder="*******"
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="re-pass">
                            Repeat Password
                        </Label>
                        <Input
                            id="re-pass"
                            name="re-pass"
                            type="password"
                            placeholder="*******"
                            required
                        />
                    </FormGroup>

                    <Input type='submit' id='submit' value='Register' />
                </Form>
                <ErrorBox errors={errors}/>
            </div>
        </div>

    )
}

export default Register
import { useContext } from "react";
import { OuthContext,ErrorContext } from "../../contexts";
import { signUp } from "../../services/userService";

import { StyledSection, StyledHeading, StyledForm, StyledLabel, StyledInput, StyledSubmitInput } from "./elements";

const SignUp = () => {

    let [user, changeUserState, navigate] = useContext(OuthContext);
    let showError=useContext(ErrorContext);

    function singUpUser(e) {
        try {
            signUp(e)
            .then(user => {
                changeUserState(user)
                navigate("/home")
            })
            .catch(err=>showError(err))
        }
        catch(err){showError(err)}
    }

    return (
        <StyledSection>
            <StyledHeading>Sign Up</StyledHeading>
            <StyledForm onSubmit={singUpUser}>
                <StyledLabel htmlFor="username" >Username</StyledLabel>
                <StyledInput name="username" type='text' placeholder="username..." required  minLength={5}/>
                <StyledLabel htmlFor="email" >Email</StyledLabel>
                <StyledInput name="email" type='email' placeholder="email..." required  />
                <StyledLabel htmlFor="password" >Password</StyledLabel>
                <StyledInput name="password" type='password' placeholder="****" minLength={4} required />
                <StyledLabel htmlFor="re-pass" >Repeat Password</StyledLabel>
                <StyledInput name="re-pass" type='password' placeholder="****" minLength={4} required />
                <StyledSubmitInput type='submit' value="Sign Up" />
            </StyledForm>
        </StyledSection>
    )

};

export default SignUp
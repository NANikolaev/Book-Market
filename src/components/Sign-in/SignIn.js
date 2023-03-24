import { useContext } from "react";
import { OuthContext,ErrorContext } from "../../contexts";
import { signIn } from "../../services/userService";
import { StyledSection, StyledHeading, StyledForm, StyledLabel, StyledInput, StyledSubmitInput } from "./elements";

const SignIn = () => {
   let [user, changeUserState, navigate] = useContext(OuthContext);
   let showError=useContext(ErrorContext)

   function signInUser(e) {
      signIn(e)
         .then(user => {
            changeUserState(user);
            navigate('/home');
         })
         .catch(err=>showError(err))
   }

   return (
      <StyledSection>
         <StyledHeading>Sign In</StyledHeading>
         <StyledForm onSubmit={signInUser}>
            <StyledLabel htmlFor="username" >Username</StyledLabel>
            <StyledInput name="username" type='text' placeholder="username..." required minLength={5}></StyledInput>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <StyledInput name="password"  type='password' placeholder="****" required minLength={4}></StyledInput>
            <StyledSubmitInput type='submit' value="Sign In" />
         </StyledForm>
      </StyledSection>
   )

};

export default SignIn
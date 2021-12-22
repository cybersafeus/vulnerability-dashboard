import { BoxContainer, FormContainer, Input, SubmitButton, BoldLink, GoolgeContainer, GoolgLogin} from '../Common'
import { Marginer } from '../Marginer'

export default function SignInComponent({onSubmit}) {
    return (
        <BoxContainer>
            <FormContainer>
                <Input type = "email" placeholder = "Email"/>
                <Input type = "password" placeholder = "Password"/>
                <Marginer direction="vertical" margin={15}/>
                <SubmitButton type="submit">SIGN IN</SubmitButton>
                <Marginer direction="vertical" margin={15}/>
                <BoldLink>Register</BoldLink>
                <Marginer direction="vertical" margin={40}/>
                <GoolgLogin><img src = "/goolge_login.png" height ="30" onClick = {onSubmit}></img></GoolgLogin>

            </FormContainer>
        </BoxContainer>
    )
}

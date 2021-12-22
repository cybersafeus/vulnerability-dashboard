import { BoxContainer, FormContainer, Input} from "./Common"
export default function LoginForm() {
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder= "Email"/>
                <Input type="password" placeholder= "Password"/>

            </FormContainer>
        </BoxContainer>
    )
}

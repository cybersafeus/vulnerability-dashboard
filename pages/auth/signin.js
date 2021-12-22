import { getProviders, signIn } from "next-auth/react";
import { Container, TopContainer, BackDrop, HeaderContainer, BoxContainer, HeaderText, Description } from '../../components/signin/Components';
import SignInComponent from '../../components/signin/SignInComponent';
export default function SignIn({ providers }) {
    const  onSubmit = (providerId) => {
        signIn(providerId)
    }
    return (
        <Container>
            <BoxContainer>
                <TopContainer>
                    <BackDrop />
                    <HeaderContainer>
                        <HeaderText>
                            CYBER SAFEUS
                        </HeaderText>
                        <Description>Sign in to continue</Description>
                    </HeaderContainer>
                </TopContainer>
             <SignInComponent onSubmit = { () => onSubmit('google')}/>                    
            </BoxContainer>

        </Container>

    )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}

import { Header, Err } from '../components'
import * as ROTES from '../constants/routes'
import logo from '../logo.svg'

export function ErrorContainer(){
    return (
        <Header style={{background:'#000'}}>
            <Header.Frame>
                <Header.Logo to={ROTES.HOME} src={logo}/>
            </Header.Frame>
            <Err>
                <Err.Inner>
                    <Err.Title>
                        Lost your way?
                    </Err.Title>
                    <Err.SubTitle>
                        Sorry, we can't find that page. You'll find lots to explore on the home page.
                    </Err.SubTitle>
                    <Err.ButtonLink to={ROTES.HOME}>
                        Netflix Home
                    </Err.ButtonLink>
                    <Err.Error>
                        <Err.ErrorTitle>Error Code</Err.ErrorTitle>
                        <Err.ErrorCode>NSES-404</Err.ErrorCode>
                    </Err.Error>
                </Err.Inner>
            </Err>
        </Header>
    )
}
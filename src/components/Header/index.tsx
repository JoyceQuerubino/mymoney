import { Container, Title, Logo, ScreenName, HeaderType} from './styles';

interface HeaderProps {
  isHome: boolean;
  screenName?: string;
  type?: HeaderType["type"];
}

export function Header({isHome, screenName, type}: HeaderProps){

    return(
      <>
        {
          isHome ? (
            <Container type={type}>
              <Logo/>
              <Title>MyMoney</Title>
            </Container>
          ) : (
            <Container type={type}>
              <ScreenName>{screenName}</ScreenName>
            </Container>
          )
        }
      </>
     
    )
}
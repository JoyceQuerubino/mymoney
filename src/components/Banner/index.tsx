import { Container, Title,Content, Value, Icon, BannerTypes } from './styles';

interface BannerProps {
    title: string;
    value: string;
    type: BannerTypes;
}

export function Banner({title, type, value}: BannerProps){
    return(
        <Container type={type}>
            <Title>{title}</Title>

            <Content>
                <Icon type={type}/>
                <Value>{value}</Value>
            </Content>
        </Container>
    )
}
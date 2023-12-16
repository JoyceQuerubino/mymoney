import { Container, Title, SamallButtonTypes } from './styles';

interface SmallButtonProps {
    title: string;
    type: SamallButtonTypes;
    onPress: () => void;
    isSelected: boolean;
}

export function SmallButton({title, type, onPress, isSelected}: SmallButtonProps){
    return(
        <Container type={type} isSelected={isSelected} onPress={onPress}>
            <Title>{title}</Title>
        </Container>
    )
}
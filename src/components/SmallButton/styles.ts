
import styled from 'styled-components/native';

export type SamallButtonTypes = 'up' | 'down';

type ButtonTypeProps = {
    type: SamallButtonTypes;
    isSelected: boolean;
}

export const Container = styled.TouchableOpacity<ButtonTypeProps>`
    min-width: 98px;
    background-color: ${({ theme, type, isSelected }) =>
        isSelected && type === 'up' ? theme.COLORS.PRIMARY :  
        isSelected && type === 'down' ? theme.COLORS.DOWN : 
        theme.COLORS.DISABLED
    };
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    padding: 16px;
    margin-right: 8px;
`;

export const Title = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: #FFF;
`;

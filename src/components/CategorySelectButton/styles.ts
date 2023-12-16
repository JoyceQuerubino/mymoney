import styled, {css} from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity)`
    padding: 16px 6px;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.LIGHT};
    border-radius: 6px;
    margin-bottom: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.DARK_TEXT};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-left: 8px;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
    name: 'chevron-down',
    size: 24,
    color: theme.COLORS.DARK_TEXT
  }))`
    margin-right: 4px;
`;

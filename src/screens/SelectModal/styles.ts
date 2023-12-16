import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Header = styled.View`
    align-items: center;
    margin-bottom: 16px;
    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    padding: 16px 0px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.LIGHT};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Category = styled.TouchableOpacity`
    width: 100%;
    padding: 24px 0px;
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Feather)`
    font-size: 18px;
    margin-right: 16px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.DARK_TEXT};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.DARK_TEXT};
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) =>   theme.COLORS.PRIMARY};
`;

export const ButtonTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.LIGHT};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
  `}
`;
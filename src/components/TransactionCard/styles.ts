import styled, { css } from 'styled-components/native';

export type CardTypes = 'up' | 'down';

type CardProp = {
    type: CardTypes;
}

export const Container = styled.View`
    width: 100%;
    justify-content: center;
    background-color: ${({ theme }) => theme.COLORS.LIGHT};
    padding: 16px;
    border-radius: 6px;

    margin-bottom: 16px;
`;

export const ContainerTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.DARK};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Tag = styled.View<CardProp>`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) => type === 'up' ? theme.COLORS.PRIMARY : theme.COLORS.DOWN};
  padding: 4px 16px;
  border-radius: 500px;
`; 

export const TagTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.LIGHT};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Value = styled.Text<CardProp>`
  ${({ theme, type }) => css`
    color: ${type === 'up' ? theme.COLORS.PRIMARY : theme.COLORS.DOWN};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.MEDIUM};
  `}
`;

export const ContainerBottom = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
  
`;

export const CategoryTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.DARK_TEXT};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.DARK_TEXT};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;



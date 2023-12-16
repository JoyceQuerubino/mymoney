import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;
    padding: 24px 24px 0px 24px;
`; 

export const Total = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.LIGHT};
    justify-content: center;
    align-items: center;
    padding: 24px 0; 
    border-radius: 12px;
    margin-bottom: 24px;
`;

export const TotalTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const ContainerBanners = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const ContainerList = styled.View`
    flex: 1;
    width: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.DARK_TEXT};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  margin: 24px 0px;
`;
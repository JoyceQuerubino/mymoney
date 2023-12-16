import styled, { css } from 'styled-components/native';
import LogoMyApp from '../../assets/images/logoMyApp.png';

export type HeaderType = {
  type?: 'up' | 'down';
}

export const Container = styled.View<HeaderType>`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content:center;
    background-color: ${({ theme, type }) =>  type === 'down' ?  theme.COLORS.DOWN : theme.COLORS.PRIMARY};
    padding: 32px 24px 24px;
`;

export const TextContent = styled.View`
  max-width: 100px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.LIGHT};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-left: 8px;
`;

export const ScreenName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.LIGHT};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Logo = styled.Image.attrs(() => ({
  resizeMode: 'contain',
  source: LogoMyApp,
}))`
  width: 55px;
  height: 55px;
`;

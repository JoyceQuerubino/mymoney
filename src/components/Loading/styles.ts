import styled from 'styled-components/native';

export interface LoadProps {
  background?: string;
  loadColor?: string;
}

export const Container = styled.View<LoadProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, background }) => background ? background : theme.COLORS.PRIMARY};
`;

export const LoadIndicator = styled.ActivityIndicator.attrs<LoadProps>(({ theme, loadColor }) => ({
  color: loadColor ? loadColor : theme.COLORS.LIGHT,
  size: 'large',
}))<LoadProps>``;

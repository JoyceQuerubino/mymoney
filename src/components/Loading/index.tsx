import React from 'react';
import { Container, LoadIndicator, LoadProps } from './styles';

export const Loading = ({background, loadColor}: LoadProps) => {
  return (
    <Container background={background}>
      <LoadIndicator loadColor={loadColor}/>
    </Container>
  );
};

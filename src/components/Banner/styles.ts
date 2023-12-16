
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

export type BannerTypes = 'up' | 'down';

type BannerProp = {
    type: BannerTypes;
}

export const Container = styled.View<BannerProp>`
    background-color: ${({ theme, type }) => type === 'up' ? theme.COLORS.PRIMARY : theme.COLORS.DOWN};
    justify-content: center;
    border-radius: 12px;
    padding: 16px;
`;

export const Title = styled.Text`
    font-size: 14px;
    font-weight: 400;
    color: #FFF;
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
`;

export const Value = styled.Text`
    font-size: 16px;
    font-weight: 400;
    color: #FFF; 
`;

export const Icon = styled(AntDesign).attrs<BannerProp>(({ type, theme }) => ({
    name: type === 'up' ? 'arrowup': 'arrowdown',
    size: 24,
    color: theme.COLORS.LIGHT
  }))`
    margin-right: 4px;
`;


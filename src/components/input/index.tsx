import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Container } from './styles';

interface Props extends TextInputProps{
    control: Control;
    name: string;
}

export function Input({control, name, ...rest}: Props){
    return (
         <Controller
            control={control}
            render={({field: {onChange, value}}) => (
                <Container 
                    onChangeText={onChange} 
                    value={value} 
                    {...rest} 
                />
            )}
            name={name}
        />
    )
}
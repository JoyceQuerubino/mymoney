import React,{ useState } from 'react';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
import { format } from "date-fns";
import { useForm, FieldValues } from 'react-hook-form';
import { Header } from '../../components/Header';
import { SmallButton } from '../../components/SmallButton';
import { Input } from '../../components/input';
import { CategorySelectButton } from '../../components/CategorySelectButton';
import { SelectModal } from '../SelectModal';
import { Container, Content, FormContainer, Title, ContainerButtons, Button, ButtonTitle, ContentButton } from './styles';
import { api } from '../../services/api';

type TypeTransaction = 'up' | 'down';

type DataType = {
    name: string;
    value: number;
    type: TypeTransaction;
    category?: string;
    date: string;
}

export function RegisterScreen(){
    const [category, setCategory ] = useState({ key: 'categoria', name: 'Selecione a categoria'});
    const [selectType, setSelectedType] = useState<TypeTransaction>('up');
    const [isOpenModal, setIsOpenModal] = useState(false);

    const {control, handleSubmit, reset } = useForm();
  
    async function postTransactions(data: DataType) {
        try{
            await api.post(`/transactions`, data);
        }catch(error){
            Alert.alert('Problema no servidor');
        }
    }

    function handlePress(type: TypeTransaction){
        setSelectedType(type);
    }

    function handleOpenModal(){
        setIsOpenModal(true)
    }

    function handleCloseModal(){
        setIsOpenModal(false)
    }

    function clear(){
        setSelectedType("up");
        setCategory({ key: 'categoria', name: 'Selecione a categoria'});
        reset({
            name: '', 
            amount: '',
        });
    }

    function handleRegister(form: FieldValues){
        const currentDate = format(new Date(), 'dd/MM/yy')

        const data: DataType = {
            name: form.name,
            type: selectType,
            value: form.amount,
            date: currentDate,
        }

        if(category.key !== "categoria"){
            data.category = category.key;
        }

        postTransactions(data);
        clear();
    }

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header isHome={false} screenName='Cadastro de transações' type={selectType}/>

                <Content>
                    <FormContainer>
                        <Title>Tipo de transação</Title>

                        <ContainerButtons>
                            <SmallButton title="Entrada" type="up" onPress={() => handlePress('up')} isSelected={selectType === 'up'} />
                            <SmallButton title="Saída" type="down" onPress={() => handlePress('down')}  isSelected={selectType === 'down'}/>
                        </ContainerButtons>

                        <Title>Dados da transação</Title>

                        <Input 
                            name="name" 
                            control={control} 
                            placeholder='Insira o nome' 
                            autoCapitalize='sentences'
                            autoCorrect={false}
                        />
                        <Input 
                            name="amount" 
                            control={control} 
                            placeholder='Insira o valor' 
                            keyboardType='numeric'
                        />
                        {selectType === "down" && <CategorySelectButton title={category.name} onPress={handleOpenModal}/>}

                    </FormContainer>
                

                    <ContentButton>
                        <Button type={selectType} onPress={handleSubmit(handleRegister)}>
                            <ButtonTitle>Confirmar</ButtonTitle>
                        </Button>
                    </ContentButton>
                </Content>

                <Modal visible={isOpenModal}>
                    <SelectModal setCategory={setCategory} close={handleCloseModal}/>
                </Modal>
            </Container>
        </TouchableWithoutFeedback>
    )
}
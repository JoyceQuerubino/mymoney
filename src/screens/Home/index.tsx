import {FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import { Container, Content, ContainerBanners, Total, TotalTitle, ContainerList, Title} from './styles';
import { useEffect } from 'react';
import { Loading } from '../../components/Loading';
import theme from '../../theme';
import { ListCardType, useFetchTransactions } from '../../hooks/useFetchTransactions';
import { formatedValue, getTotalForType } from '../../helper/formatted';

export function Home(){
    const isFocused = useIsFocused();
    const { transactions, loading, fetchTransactions } = useFetchTransactions();
    const { totalUp, totalDown, total } = getTotalForType(transactions);
  
    useEffect(() => {
        fetchTransactions();
    }, [isFocused]);

    function renderTransactions(){
        return(
            <FlatList
            data={transactions}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>  
                 <TransactionCard 
                     name={item.name}
                     type={item.type}
                     value={formatedValue(item.value)}
                     category={item.category}
                     date={item.date}
                 />}
             showsVerticalScrollIndicator={false}
             />
        )
    }
  
    return(
        <Container>
            <Header isHome/>

            <Content>
                <Total>
                    <TotalTitle>{total}</TotalTitle>
                </Total>
                <ContainerBanners>
                    <Banner title='Entradas' type='up' value={totalUp}/>
                    <Banner title='Saídas'  type='down' value={totalDown}/>
                </ContainerBanners>
                    <Title>Transações</Title>
                <ContainerList>
                  {loading ? (<Loading background={theme.COLORS.BACKGROUND} loadColor={theme.COLORS.PRIMARY}/>) : renderTransactions()}
                </ContainerList>
            </Content>
          
        </Container>
    )
}
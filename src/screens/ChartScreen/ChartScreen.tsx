import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { Header } from '../../components/Header';
import { VictoryPie } from 'victory-native';
import { Container, Content, ChartContainer } from './styles';
import { ListCardType, useFetchTransactions } from '../../hooks/useFetchTransactions';
import { Loading } from '../../components/Loading';
import theme from '../../theme';
import { data } from '.';
import { categories } from '../../utils/categories';
import { formatedValue, getTotalForType } from '../../helper/formatted';

interface CatgoryData {
    key: string;
    name: string;
    color: string;
    total: string;
    percent: string;
}

export function ChartScreen() {
    // const isFocused = useIsFocused();
    const [month, setMonth] = useState("Janeiro");
    const { transactions, loading, fetchTransactions } = useFetchTransactions();
    const {totalDown } = getTotalForType(transactions);
    const [totalByCategoy, setTotaloByCategory ] = useState<CatgoryData[]>([])

    function getTransactionByCategory(transactions: ListCardType[], totalDown: number | string){
        const newTotal: CatgoryData[] = [];

        if(!transactions) return;

        categories.forEach((category) => {
            let categorySum = 0;
    
            transactions?.forEach((transaction) => {
                if(transaction.category === category.key){
                    categorySum += parseFloat(transaction.value);
                }
            })
    
            if(categorySum > 0){
                const total = formatedValue(categorySum);

                console.log("CCC", totalDown);
    
                const percent = `${(categorySum / totalDown * 100).toFixed(0)}%`;
    
                newTotal.push({
                    key: category.key,
                    name: category.name,
                    color: category.color,
                    total,
                    percent,
                })
            }
        })

        setTotaloByCategory(newTotal);
    }

    useEffect(() => {
        fetchTransactions();
        console.log("AAAA");
    }, [])

    useEffect(() => {
        // Este useEffect será executado sempre que o valor de transactions mudar
        if (transactions && transactions.length > 0) {
            // Quando as transações estiverem disponíveis, chama a função
            getTransactionByCategory(transactions, totalDown);
            console.log("BBB");
        }
    }, [transactions]); // Observa a mudança no valor de transactions

    return (
        <Container>
            <Header isHome={false} screenName="Relatórios" />
            <Content>
            {loading ? (<Loading background={theme.COLORS.BACKGROUND} loadColor={theme.COLORS.PRIMARY} />) : (  
                        <ChartContainer>
                            <VictoryPie
                                data={totalByCategoy}
                                x="percent"
                                y="total" 
                                colorScale={totalByCategoy.map((category) => category.color)}    
                            />
                        </ChartContainer>
                    )}
            {totalByCategoy?.map((transaction) => <Text key={transaction.id}>{transaction.name}</Text>)}
            </Content>
        </Container>
    );
}

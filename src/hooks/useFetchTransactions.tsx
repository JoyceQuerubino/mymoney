import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { api } from '../services/api';
import { TransactionCardProps } from '../components/TransactionCard';

export type ListCardType= {
	id: string;
} & Pick<
    TransactionCardProps,
	'name' | 'type' | 'value' | 'category' | 'date'
>;

export const useFetchTransactions = () => {
  const [transactions, setTransactions] = useState<ListCardType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/transactions`);
      setTransactions(data);
    } catch (error) {
      Alert.alert('Problema no servidor');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return { transactions, loading, fetchTransactions };
};

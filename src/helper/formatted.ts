import { ListCardType } from "../hooks/useFetchTransactions";

export function formatedValue(value: string | number){
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}

export function getTotalForType(items: ListCardType[], isFormated?: true) {
    let totalUp = 0;
    let totalDown = 0;

    items.forEach(item => {
        const value = parseFloat(item.value);
        item.type === 'up' ? (totalUp += value) : (totalDown += value);
    });

    const total = totalUp - totalDown

    return {
        totalUp: isFormated ? formatedValue(totalUp) : totalUp,
        totalDown: isFormated ? formatedValue(totalDown) : totalDown,
        total: isFormated ? formatedValue(total) : total,
    };
}
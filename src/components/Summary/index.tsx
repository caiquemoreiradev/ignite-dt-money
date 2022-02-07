import { Container } from './styles';

import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import totalIcon from '../../assets/total.svg';

import { useTransactions } from '../../hooks/useTransactions';


export function Summary() {

    const { transactions } = useTransactions();;

    const summary = transactions.reduce((acc, transaction) => {

        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.toal += transaction.amount;
        }
        else {
            acc.withdraws += transaction.amount;
            acc.toal -= transaction.amount;
        }

        return acc;

    }, {
        deposits: 0,
        withdraws: 0,
        toal: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeIcon} alt="" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeIcon} alt="" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>

            <div className='highlight'>
                <header>
                    <p>Total</p>
                    <img src={totalIcon} alt="" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.toal)}
                </strong>
            </div>
        </Container>
    )
}
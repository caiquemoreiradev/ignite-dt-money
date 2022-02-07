import { FormEvent, useContext, useState } from 'react';
import Modal from 'react-modal';

import { Container, RadioBox, TransactionTypeContainer } from './styles';

import IncomeIcon from '../../assets/income.svg';
import OutcomeIcon from '../../assets/outcome.svg';
import CloseIcon from '../../assets/close.svg';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionProps) {

    const { createTransaction } = useTransactions();

    const [ title, setTitle ] = useState<string>('');
    const [ amount, setAmount ] = useState<number>(0);
    const [ category, setCategory ] = useState<string>('');

    const [type, setType] = useState('deposit');

    async function handleSaveTransaction(event: FormEvent) {

        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        });
        
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('');

        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className={'react-modal-content'}
            overlayClassName={'react-modal-overlay'}
        >

            <button
                className='react-modal-close'
                onClick={onRequestClose}
            >
                <img src={CloseIcon} alt="Close modal" />
            </button>

            <Container onSubmit={e => handleSaveTransaction(e)}>
                <h2>Cadastrar nova transação</h2>

                <input
                    placeholder='Título'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <input
                    type={'number'}
                    placeholder='Valor'
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor={'green'}
                    >
                        <img src={IncomeIcon} alt="Income" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick={() => { setType('withdraw') }}
                        isActive={type === 'withdraw'}
                        activeColor={'red'}
                    >
                        <img src={OutcomeIcon} alt="Withdraw" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder='Categoria'
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                />

                <button className='save-transaction'>Cadastrar</button>
            </Container>

        </Modal>
    )
}
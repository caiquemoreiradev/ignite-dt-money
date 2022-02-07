import { Container, Content } from "./styles";

import dtMoneyLogo from '../../assets/logo.svg';

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={dtMoneyLogo} alt="dtmoney" />

                <button onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>
        </Container>
    )
}
import { useState } from "react";

import Modal from 'react-modal';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyles } from "./styles/GlobalStyles";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {

  const [isNewtransactionModalOpen, setIsNewtransactionModalOpen] = useState<boolean>(false);

  function handleToggleModal() {
    setIsNewtransactionModalOpen(!isNewtransactionModalOpen);
  }

  return (
    <>
      <TransactionsProvider>
        <GlobalStyles />

        <NewTransactionModal
          isOpen={isNewtransactionModalOpen}
          onRequestClose={handleToggleModal}
        />

        <Header
          onOpenNewTransactionModal={handleToggleModal}
        />

        <Dashboard />
      </TransactionsProvider>
    </>
  );
}


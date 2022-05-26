import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";


interface Transaction {
  id: number;
  title: string;
  amount: number;
  category: string;
  type: string;
  createdAt: string;
}

// interface NewTransaction {
//   title: string;
//   amount: number;
//   category: string;
//   type: string;
// }

// type NewTransaction = Pick<Transaction, 'title' | 'amount' | 'category' | 'type'>

type NewTransaction = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionsContextProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createNewTransaction: (transaction: NewTransaction) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  }, []);

  async function createNewTransaction(transaction: NewTransaction) {
    const response = await api.post('/transactions', {...transaction, createdAt: new Date()});

    setTransactions([...transactions, response.data.transaction]);
  }

  return(
    <TransactionsContext.Provider value={{ transactions, createNewTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
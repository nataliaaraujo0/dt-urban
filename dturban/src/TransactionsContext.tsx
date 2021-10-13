import { createContext, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transactions {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export const TransactionsContext = createContext([]);

export function TransactionsProvider() {
    const [transactions, setTransactions] = useState<Transactions[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);
}
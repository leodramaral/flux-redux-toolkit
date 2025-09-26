import { useState } from 'react';
import { Card } from 'primereact/card';
import FinancialTransactionForm from './FinancialTransactionForm';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { useSelector } from 'react-redux';
import type { IFinancialTransactionState } from '../redux/slices.ts/financialTransactionSlice';
import { Divider } from 'primereact/divider';
import { financialTnxSelector } from '../redux/selectors/financialTnx';

export default function FinancialTransactionsCard() {
    const [showDialog, setShowDialog] = useState(false);
    const financialTnxs = useSelector(financialTnxSelector)
    return (
        <Card title="Transações Financeiras">
            <div className="max-h-[350px] overflow-auto">
                <TransactionsList financialTnxs={financialTnxs} />
            </div>
            <Button label="Adicionar Transação" icon="pi pi-plus" onClick={() => setShowDialog(true)} className="mt-4" />
            <Dialog
                header="Nova Transação"
                visible={showDialog}
                className="min-w-[350px] w-[30vw]"
                onHide={() => setShowDialog(false)}
                modal
            >
                <FinancialTransactionForm onClose={() => setShowDialog(false)} />
            </Dialog>
        </Card>
    );
};

interface TransactionsListProps {
    financialTnxs: IFinancialTransactionState[];
}

function TransactionsList({ financialTnxs }: TransactionsListProps) {
    return (
        <div>
            {financialTnxs && financialTnxs.length > 0 ? (
                financialTnxs.map((item, idx) => (
                    <>
                    <div
                        key={idx}
                        className={`flex justify-between mr-2 ${item.type === 'income' ? 'text-green-500' : 'text-orange-500'}`}
                    >
                        <span>{item.name}</span>
                        <span className="font-bold">{currencyFormatter.format(item.amount)}</span>
                    </div>
                    <Divider />
                    </>
                ))
            ) : (
                <div className="py-2 text-gray-400">Nenhuma transação encontrada.</div>
            )}
        </div>
    );
}

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
});
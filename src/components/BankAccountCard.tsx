import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { useSelector } from 'react-redux';
import BankAccountForm from './BankAccountForm';
import type { RootState } from '../redux/store';
import type { IBankAccount } from '../redux/slices.ts/bankAccountSlice';

export default function BankAccountCard() {
    const [showDialog, setShowDialog] = useState(false);
    const bankAccounts = useSelector((state: RootState) => state.bankAccount.accounts);

    const handleOnClose = () => {
        setShowDialog(false);
    }

    return (
        <Card className='w-120' title="Contas Bancárias">
            <div className="max-h-[250px] overflow-auto">
                <BankAccountsList bankAccounts={bankAccounts} />
            </div>
            <Button
                label="Adicionar Conta"
                icon="pi pi-plus"
                onClick={() => setShowDialog(true)}
                className="mt-4"
            />
            <Dialog
                header="Nova Conta Bancária"
                visible={showDialog}
                className="min-w-[350px] w-[30vw]"
                onHide={() => setShowDialog(false)}
                modal
            >
                <BankAccountForm onClose={handleOnClose}/>
            </Dialog>
        </Card>
    );
}

interface BankAccountsListProps {
    bankAccounts: IBankAccount[];
}

function BankAccountsList({ bankAccounts }: BankAccountsListProps) {
    return (
        <div>
            {bankAccounts && bankAccounts.length > 0 ? (
                bankAccounts.map((account, idx) => (
                    <>
                        <div key={idx} className="flex justify-between mr-2">
                            <span>{account.name}</span>
                            <span className="font-bold">{currencyFormatter.format(account.balance)}</span>
                        </div>
                        <Divider />
                    </>
                ))
            ) : (
                <div className="py-2 text-gray-400">Nenhuma conta encontrada.</div>
            )}
        </div>
    );
}

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
});
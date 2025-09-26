import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { useForm, type SubmitHandler } from "react-hook-form";
import { addAccount } from "../redux/slices.ts/bankAccountSlice";
import { useDispatch } from "react-redux";
import { updateDailyBudgetPerBankBalance } from "../redux/slices.ts/userSlice";

type BankAccountForm = {
    name: string;
    balance: number;
}

type BankAccountFormProps = {
  onClose?: () => void;
};

export default function BankAccountForm({ onClose }: BankAccountFormProps) {
    const { register, handleSubmit, setValue } = useForm<BankAccountForm>({
        defaultValues: {
            name: '',
            balance: 0
        }
    });
    const dispatch = useDispatch();

    const handleSubmitBankAccountForm: SubmitHandler<BankAccountForm> = (data) => {
        dispatch(addAccount(data));
        dispatch(updateDailyBudgetPerBankBalance(data.balance));
        if (onClose) onClose();
    }

    return (
        <form onSubmit={handleSubmit(handleSubmitBankAccountForm)} className="p-2 flex flex-col gap-5">
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-medium">Nome</label>
                <InputText
                    id="name"
                    {...register("name")}
                    placeholder="Ex: Conta Corrente"
                    autoComplete="off"
                    className="w-full"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="balance" className="font-medium">Saldo</label>
                <InputNumber
                    id="balance"
                    placeholder="Ex: R$ 1.000,00"
                    mode="currency"
                    currency="BRL"
                    locale="pt-BR"
                    minFractionDigits={2}
                    maxFractionDigits={2}
                    inputClassName="w-full"

                    onValueChange={(e) => setValue("balance", e.value ?? 0)}
                />
            </div>
            <Button type="submit" label="Adicionar Conta" />
        </form>
    );
}

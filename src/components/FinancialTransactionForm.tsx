import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTnx, type FinancialType } from "../redux/slices.ts/financialTransactionSlice";
import { updateDailyBudget } from "../redux/slices.ts/userSlice";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";

type FinancialTransactionForm = {
    name: string;
    amount: number;
    type: FinancialType;
    category: string;
    date: Date;
}

type FinancialTransactionFormProps = {
  onClose?: () => void;
};

export default function FinancialTransactionForm({ onClose }: FinancialTransactionFormProps) {
    const { register, handleSubmit, setValue, control } = useForm<FinancialTransactionForm>({
        defaultValues: {
            name: '',
            amount: 0,
            type: 'expense',
            category: '',
            date: new Date()
        }
    });

    const dispatch = useDispatch();
    
    const handleSubmitFinancialTransactionForm: SubmitHandler<FinancialTransactionForm> = (data) => {
        dispatch(addTnx(data));
        dispatch(updateDailyBudget({ amount: data.amount, type: data.type }));
        if (onClose) onClose();
    }

    const typeOptions = [
        { label: "Despesa", value: "expense" },
        { label: "Receita", value: "income" }
    ];

    return (
        <form
            onSubmit={handleSubmit(handleSubmitFinancialTransactionForm)}
            className="p-2 flex flex-col gap-5"
        >
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-medium">Nome</label>
                <InputText
                    id="name"
                    {...register("name")}
                    placeholder="Ex: Supermercado"
                    autoComplete="off"
                    className="w-full"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="amount" className="font-medium">Valor</label>
                <InputNumber
                    id="amount"
                    placeholder="Ex: R$ 150,00"
                    mode="currency"
                    currency="BRL"
                    locale="pt-BR"
                    minFractionDigits={2}
                    maxFractionDigits={2}
                    inputClassName="w-full"
                    onValueChange={(e) => setValue("amount", e.value ?? 0)}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="type" className="font-medium">Tipo</label>
                <Controller
                    name="type"
                    control={control}
                    render={({ field }) => (
                        <Dropdown
                            id="type"
                            options={typeOptions}
                            value={field.value}
                            onChange={(e) => field.onChange(e.value)}
                            placeholder="Selecione o tipo"
                            className="w-full"
                        />
                    )}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="category" className="font-medium">Categoria</label>
                <InputText
                    id="category"
                    {...register("category")}
                    placeholder="Ex: Alimentação"
                    autoComplete="off"
                    className="w-full"
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="date" className="font-medium">Data</label>
                <Controller
                    name="date"
                    control={control}
                    render={({ field }) => (
                        <Calendar
                            id="date"
                            value={field.value}
                            onChange={(e) => field.onChange(e.value as Date)}
                            dateFormat="dd/mm/yy"
                            showIcon
                        />
                    )}
                />
            </div>
            <Button
                type="submit"
                label="Adicionar Transação"
            />
        </form>
    );
}
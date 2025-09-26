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

export default function FinancialTransactionForm() {
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
        console.log(data)
        dispatch(addTnx(data));
        dispatch(updateDailyBudget({ amount: data.amount, type: data.type }));
    }

    const typeOptions = [
        { label: "Despesa", value: "expense" },
        { label: "Receita", value: "income" }
    ];

    return (
        <form
            onSubmit={handleSubmit(handleSubmitFinancialTransactionForm)}
            style={{
                padding: "2rem",
                borderRadius: "12px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                background: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem"
            }}
        >
            <div className="p-field" style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <label htmlFor="name" style={{ fontWeight: 500 }}>Nome</label>
                <InputText
                    id="name"
                    {...register("name")}
                    placeholder="Ex: Supermercado"
                    autoComplete="off"
                />
            </div>
            <div className="p-field" style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <label htmlFor="amount" style={{ fontWeight: 500 }}>Valor</label>
                <InputNumber
                    id="amount"
                    placeholder="Ex: R$ 150,00"
                    mode="currency"
                    currency="BRL"
                    locale="pt-BR"
                    minFractionDigits={2}
                    maxFractionDigits={2}
                    inputStyle={{ width: "100%" }}
                    onValueChange={(e) => setValue("amount", e.value ?? 0)}
                />
            </div>
            <div className="p-field" style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <label htmlFor="type" style={{ fontWeight: 500 }}>Tipo</label>
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
                            style={{ width: "100%" }}
                        />
                    )}
                />
            </div>
            <div className="p-field" style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <label htmlFor="category" style={{ fontWeight: 500 }}>Categoria</label>
                <InputText
                    id="category"
                    {...register("category")}
                    placeholder="Ex: Alimentação"
                    autoComplete="off"
                />
            </div>
            <div className="p-field" style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <label htmlFor="date" style={{ fontWeight: 500 }}>Data</label>
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
                            style={{ width: "100%" }}
                        />
                    )}
                />
            </div>
            <Button
                type="submit"
                label="Adicionar Transação"
                style={{
                    padding: "0.8rem",
                    borderRadius: "6px",
                    fontWeight: 600,
                    fontSize: "1rem",
                    marginTop: "0.5rem"
                }}
            />
        </form>
    );
}
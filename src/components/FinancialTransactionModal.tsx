import { useDispatch } from "react-redux";
import { addTnx, type FinancialType } from "../redux/slices.ts/financialTransactionSlice";
import { useForm, type SubmitHandler } from "react-hook-form";
import { updateDailyBudget } from "../redux/slices.ts/userSlice";

type FinancialTransactionForm = {
    name: string;
    amount: number;
    type: FinancialType;
    category: string;
    date: string;
}

export default function FinancialTransactionForm() {
    const { register, handleSubmit } = useForm<FinancialTransactionForm>({
        defaultValues: {
            name: '',
            amount: 0,
            type: 'expense',
            category: '',
            date: new Date().toISOString().slice(0, 10)
        }
    });

    const dispatch = useDispatch();
    
    const handleSubmitFinancialTransactionForm: SubmitHandler<FinancialTransactionForm> = (data) => {
        console.log(data)
        dispatch(addTnx(data));
        dispatch(updateDailyBudget({ amount: data.amount, type: data.type }));
    }

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
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <label htmlFor="name" style={{ fontWeight: 500 }}>Nome</label>
                <input
                    id="name"
                    {...register("name")}
                    style={{
                        padding: "0.6rem",
                        borderRadius: "6px",
                        border: "1px solid #ddd",
                        fontSize: "1rem"
                    }}
                    placeholder="Ex: Supermercado"
                    autoComplete="off"
                />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <label htmlFor="amount" style={{ fontWeight: 500 }}>Valor</label>
                <input
                    id="amount"
                    type="number"
                    step="0.01"
                    {...register("amount", { required: true, valueAsNumber: true })}
                    style={{
                        padding: "0.6rem",
                        borderRadius: "6px",
                        border: "1px solid #ddd",
                        fontSize: "1rem"
                    }}
                    placeholder="Ex: 150.00"
                />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <label htmlFor="type" style={{ fontWeight: 500 }}>Tipo</label>
                <select
                    id="type"
                    {...register("type")}
                    style={{
                        padding: "0.6rem",
                        borderRadius: "6px",
                        border: "1px solid #ddd",
                        fontSize: "1rem"
                    }}
                >
                    <option value="expense">Despesa</option>
                    <option value="income">Receita</option>
                </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <label htmlFor="category" style={{ fontWeight: 500 }}>Categoria</label>
                <input
                    id="category"
                    {...register("category")}
                    style={{
                        padding: "0.6rem",
                        borderRadius: "6px",
                        border: "1px solid #ddd",
                        fontSize: "1rem"
                    }}
                    placeholder="Ex: Alimentação"
                    autoComplete="off"
                />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                <label htmlFor="date" style={{ fontWeight: 500 }}>Data</label>
                <input
                    id="date"
                    type="date"
                    {...register("date")}
                    style={{
                        padding: "0.6rem",
                        borderRadius: "6px",
                        border: "1px solid #ddd",
                        fontSize: "1rem"
                    }}
                />
            </div>
            <button
                type="submit"
                style={{
                    padding: "0.8rem",
                    borderRadius: "6px",
                    border: "none",
                    background: "#1976d2",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1rem",
                    cursor: "pointer",
                    marginTop: "0.5rem",
                    transition: "background 0.2s"
                }}
            >
                Adicionar Transação
            </button>
        </form>
    );
}
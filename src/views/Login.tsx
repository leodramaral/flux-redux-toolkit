import { useDispatch } from 'react-redux'
import { useForm, type SubmitHandler } from 'react-hook-form';
import { setDailyBudget, setUser } from '../redux/slices.ts/userSlice';
import { useNavigate } from 'react-router';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from 'primereact/radiobutton';
import { Card } from 'primereact/card';

type UserForm = {
  name: string;
  income: number;
  financialGoal: string;
  dailyBudget: number;
}

function Login() {
  const { register, handleSubmit, setValue, watch } = useForm<UserForm>({
    defaultValues: {
      name: 'Joel',
      income: 5000,
      financialGoal: 'economizar'
    }
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const financialGoal = watch('financialGoal');
  const income = watch('income');

  const handleSubmitUserForm: SubmitHandler<UserForm> = (data) => {
    dispatch(setUser(data));
    dispatch(setDailyBudget(data.income));
    navigate('/home');
  } 

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <form onSubmit={handleSubmit(handleSubmitUserForm)} className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <InputText
              id="name"
              {...register('name')}
              className="w-full"
              placeholder="Digite seu nome"
              value={watch('name')}
              onChange={e => setValue('name', e.target.value)}
            />
          </div>
            <div>
            <label htmlFor="income" className="block text-sm font-medium text-gray-700">
              Renda
            </label>
            <InputNumber
              id="income"
              className="w-full"
              placeholder="Digite sua renda"
              value={income}
              onValueChange={e => setValue('income', e.value ?? 0)}
              mode="currency"
              currency="BRL"
              locale="pt-BR"
              min={0}
            />
            </div>
          <div>
            <label htmlFor="financialGoal" className="block text-sm font-medium text-gray-700 mb-2">
              Objetivo financeiro
            </label>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <RadioButton
                  inputId="economizar"
                  value="economizar"
                  checked={financialGoal === 'economizar'}
                  onChange={e => setValue('financialGoal', e.value)}
                />
                <label htmlFor="economizar" className="ml-2">Economizar</label>
              </div>
              <div className="flex items-center gap-2">
                <RadioButton
                  inputId="investir"
                  value="investir"
                  checked={financialGoal === 'investir'}
                  onChange={e => setValue('financialGoal', e.value)}
                />
                <label htmlFor="investir" className="ml-2">Investir</label>
              </div>
              <div className="flex items-center gap-2">
                <RadioButton
                  inputId="controlar-gastos"
                  value="controlar-gastos"
                  checked={financialGoal === 'controlar-gastos'}
                  onChange={e => setValue('financialGoal', e.value)}
                />
                <label htmlFor="controlar-gastos" className="ml-2">Controlar gastos</label>
              </div>
            </div>
          </div>
          <Button type="submit" label="Enviar" />
        </form>
      </Card>
    </div>
  )
}

export default Login

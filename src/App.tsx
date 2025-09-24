import { useDispatch } from 'react-redux'
import './App.css'
import WelcomeHeader from './components/WelcomeHeader'
import { useForm, type SubmitHandler } from 'react-hook-form';
import { setUser } from './redux/slices.ts/userSlice';

type UserForm = {
  name: string;
  income: number;
  financialGoal: string;
}

function App() {
  const { register, handleSubmit } = useForm<UserForm>();
  
  const dispatch = useDispatch();

  const handleSubmitUserForm: SubmitHandler<UserForm> = (data) => {
    console.log(data);
    dispatch(setUser(data));
  }

  return (
    <div className='flex flex-col'>
      <WelcomeHeader />

      <div className="shadow-lg p-6 bg-white rounded-md w-full max-w-md mx-auto">
        <form onSubmit={handleSubmit(handleSubmitUserForm)} className="flex flex-col gap-4">
          <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nome
        </label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Digite seu nome"
          {...register('name')}
        />
          </div>
          <div>
        <label htmlFor="income" className="block text-sm font-medium text-gray-700">
          Renda
        </label>
        <input
          type="number"
          id="income"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Digite sua renda"
          {...register('income')}
        />
          </div>
          <div>
        <label htmlFor="financialGoal" className="block text-sm font-medium text-gray-700">
          Objetivo financeiro
        </label>
        <input
          type="text"
          id="financialGoal"
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Digite seu objetivo financeiro"
          {...register('financialGoal')}
        />
          </div>
          <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
        Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default App

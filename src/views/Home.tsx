import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function Home() {
    const nameUser = useSelector((state: RootState) => state.user.name);
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Olá, {nameUser}</h1>
        </div>
    );
}

export default Home;

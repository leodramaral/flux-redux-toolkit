import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

function WelcomeHeader() {
    const nameUser = useSelector((state: RootState) => state.user.name);
    return (
        <h1>Olá, {nameUser}</h1>
    );
}

export default WelcomeHeader;

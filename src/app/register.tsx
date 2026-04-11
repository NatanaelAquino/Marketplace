import { useRegisterView } from "../viewModels/register/useRegister.view";
import {RegisterView} from "../viewModels/register/Register.view";

export default function Register() {

    const props = useRegisterView()
    return (
        <RegisterView {...props} />
    )
}
import { use } from "react";

import { useLoginViewModel } from "../viewModels/login/useLogin.viewModel";
import { LoginView } from "../viewModels/login/Login.view";

export default function Login() {

    const props = useLoginViewModel()
    return (
        <LoginView 
        {...props}
        />
    )
}
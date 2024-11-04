"use client"

import {FormLogin} from "../../components/SignInForm/FormLogin"
import { useState } from "react";

export const Signin = () => {
    const [isSignin, setIsSignin] = useState<Boolean>(true);
    
    const handlerSignin = () => {setIsSignin(!isSignin)};
    
    return (
        <div className="flex justify-center ">
            
            
            <FormLogin />
        
        </div>
    )
}

export default Signin;
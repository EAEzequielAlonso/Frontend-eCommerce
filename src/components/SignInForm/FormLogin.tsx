"use client"

import {SignInForm} from "../../components/SignInForm/SignInForm"
import {SignUpForm} from "../../components/SignInForm/signUpForm"
import React, { useState } from "react";

export const FormLogin: React.FC = () => {
    const [isSignin, setIsSignin] = useState<Boolean>(true);
    
    const handlerSignin = () => {setIsSignin(!isSignin)};
    
    return (
         <div className="text-white bg-covar rounded-2xl shadow-md mt-5 flex justify-end items-center w-[900px] h-[500px] bg-[url('/image/FondoLogin.png')] bg-cover bg-center">
             <div>{isSignin ? <SignInForm inUp= {handlerSignin}/> : <SignUpForm inUp= {handlerSignin}/>}</div>
         </div>
    )
}

export default FormLogin;
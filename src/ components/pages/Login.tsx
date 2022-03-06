import { memo } from "react";
import { VFC } from "react";
import { Link } from "react-router-dom";
import LoginButton from "../atom/button/LoginButton";

export const Login :VFC= memo(()=>{
    return(
        <div>
        <p>Loginページです</p>
        <LoginButton/>
        </div>
    ) 
})
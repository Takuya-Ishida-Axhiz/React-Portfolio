import { useAuth0 } from "@auth0/auth0-react";
import { memo, ReactNode } from "react";
import { VFC } from "react";
import { Header } from "../organisms/layout/Header";

type Props={
    children:ReactNode
}

export const HeaderLayout :VFC<Props>= memo((props)=>{
    const {children} = props;
    const { isAuthenticated } = useAuth0();

    return (
        <>
        {isAuthenticated ? (
          <Header/>
        ):(
          <></>
        )}
            {children}
        </>
    )
})
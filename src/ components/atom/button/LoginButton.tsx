import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, useToast } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { authState } from '../../../store/authState'

function LoginButton() {
  // まずはRecoilにisAuthencatedをいれる。そのあと、その値が変わったことを検知してToastを出す（useEffect　https://qiita.com/seira/items/e62890f11e91f6b9653f）
  const [isAuth, setisAuth] = useRecoilState<boolean>(authState)
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  setisAuth(false)
  console.log(isAuth)

  return !isAuthenticated ? (
    <Button colorScheme="orange" onClick={loginWithRedirect}>
      Log in
    </Button>
  ) : null
}
export default LoginButton

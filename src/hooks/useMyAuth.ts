import { useAuth0 } from '@auth0/auth0-react'
import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { authState } from '../store/authState'
import useMessage from './useMessage'

export const useMyAuth = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0()
  // const [isAuth, setisAuth] = useRecoilState<boolean>(authState)

  const history = useHistory()
  const { showMessage } = useMessage()
  const login = () => {
    if (!isAuthenticated) {
      loginWithRedirect()

      showMessage({ title: 'ログイン成功', status: 'success' })
    } else {
      history.push('/')
    }
  }
  return { login }
}

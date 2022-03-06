import React from 'react'
import { useAuth0, User } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'
import { userState } from '../../../store/userState'
import { useRecoilState } from 'recoil'
import useMessage from '../../../hooks/useMessage'

function LogoutButton(props: any) {
  const { user, isAuthenticated, logout } = useAuth0()
  const [userInfo, setuserInfo] = useRecoilState(userState)
  const { showMessage } = useMessage()

  if (userInfo.sub === '') {
    showMessage({ title: 'ログインに成功しました', status: 'success' })
  } else {
  }
  setuserInfo(user)
  // console.log('再描画されました')

  return isAuthenticated ? (
    <div>
      <Button
        colorScheme="orange"
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        Log Out
      </Button>
    </div>
  ) : null
}

export default LogoutButton

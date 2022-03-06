import { Center } from '@chakra-ui/react'
import { memo, VFC } from 'react'
import { UserCard } from '../molecules/UserCard'
import { Appeal } from '../organisms/layout/ Appeal'

export const UserManagement: VFC = memo(() => {
  return (
    <div>
      <Appeal
        title="ログイン処理"
        description="ログイン処理とユーザー情報取得、Recoilによるグローバルステート保存"
        skills={['Auth0', 'Recoil']}
        points={[
          'Auth0で取得したユーザー情報をRecoilのStateに保存',
          'RecoilからStateを呼び出しコンポーネントに表示',
          'ログインしていない場合は強制的にログイン画面に遷移',
          'ログイン後はログアウトボタンを表示したヘッダーを表示',
        ]}
      />
      <Center>
        <UserCard />
      </Center>
    </div>
  )
})

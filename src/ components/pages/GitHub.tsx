import { Button, Center, HStack, Input } from '@chakra-ui/react'
import React, { memo, useState, VFC } from 'react'
import { GitHubUserRepository } from '../organisms/layout/GitHubUserRepository'
import { Appeal } from '../organisms/layout/ Appeal'

export const GitHub: VFC = memo(() => {
  const [githubName, setgithubName] = useState('Takuya-Ishida-Axhiz')
  const [isOpen, setIsOpen] = useState(true)
  const onClickShowGitHubUserRepository = () => setIsOpen(true)
  return (
    <div>
      <Appeal
        title="APIからの情報取得・整形"
        description="GitHubAPIから情報を取得し、ChakraUIを使いカード型に整形し表示させる"
        skills={['SWR', 'ChakraUI']}
        points={[
          'SWRを使ってAPIより情報を取得',
          'データ取得、ローディング状態、エラー時の処理などをシンプルに記述',
          'ChakraUIでカードコンポーネントやレイアウトなどを作成',
          'AtomicDesignに則り、コンポーネントを分割し再利用しやすく記述',
        ]}
      />
      <Center pt={20}>
        <HStack justify="center">
          <Input
            maxW={300}
            placeholder={'GitHub上の名前を入力'}
            value={githubName}
            onChange={(event) => {
              setgithubName(event.target.value)
              setIsOpen(false)
            }}
          />
          <Button
            colorScheme="blackAlpha"
            onClick={onClickShowGitHubUserRepository}
          >
            検索
          </Button>
        </HStack>
      </Center>
      {isOpen && <GitHubUserRepository login={githubName} />}
    </div>
  )
})

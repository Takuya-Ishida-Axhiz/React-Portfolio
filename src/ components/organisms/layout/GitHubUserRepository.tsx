import { FC } from 'react'
import useSWR from 'swr'
import useMessage from '../../../hooks/useMessage'
import { Text, Wrap, WrapItem, Center, Spinner } from '@chakra-ui/react'
import { GitCard } from './GitCard'
const fetcher = (url: string) => fetch(url).then((res) => res.json())

type Props = {
  login: string
}
// type Data = [
//   {
//     full_name: string
//     html_url: string

//   }
// ]

export const GitHubUserRepository: FC<Props> = ({ login }: Props) => {
  const url = `https://api.github.com/users/${login}/repos`
  const { data, error } = useSWR(url, fetcher)
  console.log(data)

  if (error) return <div>データの読み込みに失敗しました</div>
  if (!data)
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    )
  if (data.message === 'Not Found')
    return (
      <Center pt={4}>
        <Text fontSize="md">存在しないユーザーが指定されました。</Text>
      </Center>
    )
  return (
    <Wrap justify="center" p={{ base: 4, md: 10 }}>
      {data.map((d) => (
        <WrapItem key={d.login} p={10}>
          <GitCard
            name={d.name}
            description={d.description}
            language={d.language}
            html_url={d.html_url}
          />
        </WrapItem>
      ))}
    </Wrap>
  )
}

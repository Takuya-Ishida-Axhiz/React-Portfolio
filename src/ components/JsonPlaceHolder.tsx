import { FC } from 'react'
import useSWR from 'swr'
import { CommentsType } from '../types/comments'
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
} from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

type Props = {
  type: string
}

export const JsonPlaceHolder: FC<Props> = ({ type }: Props) => {
  const url = `https://jsonplaceholder.typicode.com/${type}`
  const { data, error } = useSWR<Array<CommentsType>, Error>(url, fetcher)

  if (error) return <div>読み込みに失敗しました。</div>
  if (!data) return <div>Loading...</div>
  return (
    <div>
      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <Box
            w="300px"
            h="260px"
            bg="white"
            borderRadius="10px"
            shadow="md"
            p={4}
            _hover={{ cursor: 'pointer', opacity: 0.8 }}
          >
            <Stack textAlign="center">
              <Image
                boxSize="160px"
                borderRadius="full"
                src="https://source.unsplash.com/radom"
                alt="画像"
                m="auto"
              />
              <Text fontSize="lg" fontWeight="bold">
                title
              </Text>
              <Text fontSize="sm" color="gray">
                id
              </Text>
            </Stack>
          </Box>
        </WrapItem>
      </Wrap>
    </div>
  )
}

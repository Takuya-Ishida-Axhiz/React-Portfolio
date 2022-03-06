import { Box, Center, Text } from '@chakra-ui/react'
import { memo, VFC } from 'react'
import logo from '../../logo.svg'
import { Appeal } from '../organisms/layout/ Appeal'

export const Home: VFC = memo(() => {
  return (
    <div>
      <div>
        <Box textAlign="center" p={{ base: 4, md: 10 }}>
          <Text fontSize="4xl" color="gray.700">
            React
          </Text>
          <p>
            Reactの学習を進めるにあたりより深く理解するするためアウトプットしています
          </p>
        </Box>
        <Center>
          <img src={logo} className="App-logo" alt="logo" />
        </Center>
      </div>
    </div>
  )
})

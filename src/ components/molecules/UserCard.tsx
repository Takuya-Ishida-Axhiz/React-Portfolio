import {
  Box,
  Flex,
  Text,
  Stack,
  Image,
  Wrap,
  WrapItem,
  Heading,
} from '@chakra-ui/react'
import { useRecoilValue } from 'recoil'
import { userState } from '../../store/userState'

export const UserCard = () => {
  const userInfo = useRecoilValue(userState)
  return (
    <>
      <Wrap p={{ base: 4, md: 10 }}>
        <WrapItem>
          <Box
            w="300px"
            h="260px"
            bg="white"
            borderRadius="10px"
            shadow="md"
            p={4}
            // _hover={{ cursor: 'pointer', opacity: 0.8 }}
          >
            <Stack textAlign="center">
              <Image
                boxSize="160px"
                borderRadius="full"
                src={userInfo.picture}
                alt="画像"
                m="auto"
              />
              <Text fontSize="lg" fontWeight="bold">
                {userInfo.name}
              </Text>
              <Text fontSize="sm" color="gray">
                sub: {userInfo.sub}
              </Text>
            </Stack>
          </Box>
        </WrapItem>
      </Wrap>
    </>
  )
}

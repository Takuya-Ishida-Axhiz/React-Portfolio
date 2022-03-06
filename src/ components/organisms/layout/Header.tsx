import { memo, useCallback } from 'react'
import { VFC } from 'react'
import {
  Flex,
  Box,
  Heading,
  Link,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { LoginoutLayout } from '../../molecules/Loginout'
import MenuIconButton from '../../atom/button/MenuIconButton'
import MenuDrawer from '../../molecules/MenuDrawer'
import { useHistory } from 'react-router-dom'
import { FlowFlags } from 'typescript'

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const history = useHistory()
  const onClickHome = useCallback(() => history.push('/'), [history])
  const onClickSetting = useCallback(() => history.push('/setting'), [history])
  const onClickUserManagement = useCallback(
    () => history.push('/user_management'),
    [history]
  )
  const onClickGitHub = useCallback(() => history.push('/github'), [history])

  return (
    <>
      <Flex
        as="nav"
        bg="gray.900"
        color="white"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: 'pointer' }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            ReactPF
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: 'none', md: 'flex' }}
        >
          <Flex
            align="center"
            as="a"
            mr={8}
            _hover={{ cursor: 'pointer', opacity: 0.8 }}
            onClick={onClickUserManagement}
          >
            <p>ユーザー情報</p>
          </Flex>
          {/* <Flex
            align="center"
            as="a"
            mr={8}
            _hover={{ cursor: 'pointer', opacity: 0.8 }}
            onClick={onClickSetting}
          >
            <p>設定</p>
          </Flex> */}
          <Flex
            align="center"
            as="a"
            mr={8}
            _hover={{ cursor: 'pointer', opacity: 0.8 }}
            onClick={onClickGitHub}
          >
            <p>GitHubAPI</p>
          </Flex>
        </Flex>
        <Flex>
          <LoginoutLayout />
          <MenuIconButton onOpen={onOpen} />
        </Flex>
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickSetting={onClickSetting}
        onClickUserManagement={onClickUserManagement}
        onClickGitHub={onClickGitHub}
      />
    </>
  )
})

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react'
import React, { memo, VFC } from 'react'

type Props = {
  onClose: () => void
  isOpen: boolean
  onClickHome: () => void
  onClickSetting: () => void
  onClickUserManagement: () => void
  onClickGitHub: () => void
}

const MenuDrawer: VFC<Props> = memo((props) => {
  const {
    onClose,
    isOpen,
    onClickHome,
    // onClickSetting,
    onClickUserManagement,
    onClickGitHub,
  } = props
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button
              onClick={() => {
                onClickHome()
                onClose()
              }}
              w="100%"
            >
              TOP
            </Button>
            <Button
              onClick={() => {
                onClickUserManagement()
                onClose()
              }}
              w="100%"
            >
              ユーザー情報
            </Button>
            {/* <Button
              onClick={() => {
                onClickSetting()
                onClose()
              }}
              w="100%"
            >
              設定
            </Button> */}
            <Button
              onClick={() => {
                onClickGitHub()
                onClose()
              }}
              w="100%"
            >
              GitHubAPI
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
})

export default MenuDrawer

import { useAuth0 } from '@auth0/auth0-react'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import LoginButton from '../atom/button/LoginButton'
import LogoutButton from '../atom/button/LogoutButton'
import { UserProfileAvatar } from '../atom/UserProfileAvatar'

export const LoginoutLayout = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <div>
      <Flex>
        <Box>
          <UserProfileAvatar />
        </Box>
        <Spacer />
        <Box>
          {!isAuthenticated ? (
            <LoginButton />
          ) : (
            <>
              <LogoutButton />
            </>
          )}
        </Box>
      </Flex>
    </div>
  )
}

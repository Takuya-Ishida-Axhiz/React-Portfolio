import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Box, Stack, Tag, Text } from '@chakra-ui/react'
import React, { memo, VFC } from 'react'

type Props = {
  name: string
  description: string
  language: string
  html_url: string
}

export const GitCard: VFC<Props> = memo((props) => {
  const { name, description, language, html_url } = props
  return (
    <Box
      onClick={() => window.open(html_url)}
      w="400px"
      h="200px"
      bg="teal.700"
      color="white"
      borderRadius="10px"
      shadow="lg"
      p={4}
      _hover={{ cursor: 'pointer', opacity: 0.8 }}
    >
      <Box textAlign="right">
        <ExternalLinkIcon />
      </Box>
      <Stack textAlign="center">
        <Text fontSize="lg" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="sm" color="yelow.200">
          {description}
        </Text>
        <Box>
          {language && (
            <Box textAlign="center">
              <Tag>{language}</Tag>
            </Box>
          )}
        </Box>
      </Stack>
    </Box>
  )
})

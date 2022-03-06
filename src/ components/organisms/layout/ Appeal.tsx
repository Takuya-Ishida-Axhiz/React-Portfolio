import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  List,
  ListIcon,
  ListItem,
  Tag,
  Text,
  UnorderedList,
  Wrap,
} from '@chakra-ui/react'
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons'
import React, { memo, VFC } from 'react'

type Props = {
  title: string
  description: string
  skills: Array<String>
  points: Array<String>
}

export const Appeal: VFC<Props> = memo((props) => {
  const { title, description, skills, points } = props
  return (
    <div>
      <Box textAlign="center" p={{ base: 4, md: 10 }}>
        <Text fontSize="4xl" color="gray.700">
          {title}
        </Text>
        <p>{description}</p>
        <Box p={5}>
          <Text pb={2} fontSize="sm" color="cyan.800">
            要素技術
          </Text>
          <HStack justify="center">
            {skills.map((s) => (
              <Box textAlign="center">
                <Tag>{s}</Tag>
              </Box>
            ))}
          </HStack>
        </Box>
      </Box>
      <Center>
        <Box>
          {points.map((p) => (
            <List p={1} spacing={3}>
              <ListItem>
                <Container>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  {p}
                </Container>
              </ListItem>
            </List>
          ))}
        </Box>
      </Center>
    </div>
  )
})

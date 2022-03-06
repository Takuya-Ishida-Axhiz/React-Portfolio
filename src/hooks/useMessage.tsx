import { useToast } from '@chakra-ui/react'
import { useCallback } from 'react'

type Props = {
  title: string
  status: 'info' | 'warning' | 'success' | 'error'
}

const useMessage = () => {
  const toast = useToast()

  const showMessage = useCallback(
    (props: Props) => {
      toast({
        title: props.title,
        status: props.status,
        position: 'top',
        duration: 2000,
        isClosable: true,
      })
    },
    [toast]
  )
  return { showMessage }
}

export default useMessage

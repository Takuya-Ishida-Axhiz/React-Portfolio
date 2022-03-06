import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Image } from "@chakra-ui/react";
import { Container } from '@chakra-ui/react'

export const UserProfileAvatar = (props: any) => {
  const { user } = useAuth0();
  return (
    <div>
      <Container centerContent>
        <Image
            borderRadius='full'
            boxSize='40px'
            src={user?.picture ?? ''} alt={user?.name ?? ''}
          {...props}
        />
      </Container>
    </div>
  );
};
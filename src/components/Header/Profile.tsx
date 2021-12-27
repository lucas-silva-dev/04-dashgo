import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Lucas Silva</Text>
          <Text color='gray.300' fontSize='small'>
            lucassilva.work@outlook.com
          </Text>
        </Box>
      )}

      <Avatar
        size='md'
        name='Lucas Silva'
        src='https://github.com/lucas-silva-dev.png'
      />
    </Flex>
  );
}

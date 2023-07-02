import React from 'react';
import {
  Box,
  Stack,
  VStack,
  HStack,
  Heading,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';

import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <Box bgColor={'blackAlpha.800'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack
            alignItems={'stretch'}
            w={'full'}
            marginBottom={['20px', 'none']}
          >
            <Heading
              size={'md'}
              textTransform={'uppercase'}
              textAlign={['center', 'left']}
            >
              Subscribe to get updates
            </Heading>
            <HStack>
              <Input
                placeholder="Enter email here.."
                border={'none'}
                // borderRadius={'none'}
                outline={'none'}
                focusBorderColor="none"
                variant={'filled'}
              />
              <Button
                p={'0'}
                colorScheme="purple"
                variant={'ghost'}
                borderRadius={' 0px 20px 20px 0'}
              >
                <AiOutlineSend size={20} />
              </Button>
            </HStack>
          </VStack>
          <VStack
            w="full"
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
            marginBottom={['20px', 'none']}
          >
            <Heading textTransform={'uppercase'} textAlign={'center'}>
              VIDEO HUB
            </Heading>
            <Text>All Rights Reserved</Text>
          </VStack>
          <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
              Social Media
            </Heading>
            <Button variant={'link'} colorScheme={'whiteAlpha'}>
              <a target={'blank'} href="https://youtube.com">
                YouTube
              </a>
            </Button>
            <Button variant={'link'} colorScheme={'whiteAlpha'}>
              <a target={'blank'} href="https://instagram.com">
                Instagram
              </a>
            </Button>
            <Button variant={'link'} colorScheme={'whiteAlpha'}>
              <a target={'blank'} href="https://github.com">
                GitHub
              </a>
            </Button>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;

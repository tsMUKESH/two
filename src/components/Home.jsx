import React from 'react';
import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assests/1.jpg';
import img2 from '../assests/2.jpg';
import img3 from '../assests/3.jpg';
import img4 from '../assests/4.jpg';
import img5 from '../assests/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '14px',
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Img src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the Future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Img src={img2} />
      <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
        Future is gaming
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Img src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Img src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night life is dumb
      </Heading>
    </Box>
  </Carousel>
);

const Home = () => {
  return (
    <>
      <Box>
        <MyCarousel />
        <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
          <Heading
            textTransform={'uppercase'}
            m={'auto'}
            py={'2'}
            w={'fit-content'}
            borderBottom={'2px solid'}
          >
            Services
          </Heading>
          <Stack
            h={'full'}
            p={['4', '1']}
            alignItems={'center'}
            direction={['column', 'row']}
          >
            <Img src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />
            <Text
              letterSpacing={'wider'}
              lineHeight={'190%'}
              p={['4', '16']}
              textAlign={'center'}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              a iste, fugiat quod eligendi adipisci ipsum, suscipit vel et
              deleniti accusamus repellat nobis natus veritatis dolor soluta
              atque, tempore animi! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Excepturi iure soluta quis alias, id velit dolor
              nobis dolorem tempora necessitatibus ea est, itaque fuga earum
              nesciunt dignissimos, suscipit ex et. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Doloremque perspiciatis culpa
              voluptate eaque harum vero quaerat itaque repellat, nesciunt
              quibusdam corporis ipsa consectetur quas at omnis similique nihil!
              Porro, nihil.
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Home;

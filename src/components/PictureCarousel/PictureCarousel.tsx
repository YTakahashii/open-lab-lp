import { Box, Heading, Image, useTheme } from '@chakra-ui/core';
import { Carousel } from 'react-responsive-carousel';

export const PictureCarousel: React.FC = () => {
  const theme = useTheme();

  return (
    <Box position="relative" maxHeight="500px" height={500} backgroundColor="white" marginX={theme.space[20]}>
      <Carousel
        width="100%"
        dynamicHeight={false}
        autoPlay
        interval={5000}
        infiniteLoop
        swipeable={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        useKeyboardArrows={false}
        stopOnHover={false}
      >
        <Box>
          <Image src="/assets/carousel/1.jpg" objectFit="contain" width="auto" height={500} />
        </Box>
        <Box>
          <Image src="/assets/carousel/2.jpg" objectFit="contain" width="auto" height={500} />
        </Box>
        <Box>
          <Image src="/assets/carousel/3.jpg" objectFit="contain" width="auto" height={500} />
        </Box>
      </Carousel>
      <Heading position="absolute" left={0} bottom={0}>
        よく遊び、よく学べ
      </Heading>
    </Box>
  );
};

import { Flex, Heading, Image } from '@chakra-ui/core';
import { Carousel } from 'react-responsive-carousel';

export const Events: React.FC = () => {
  return (
    <Flex id="events" direction="column" marginBottom={3} width="100%" mb={8}>
      <Heading display="flex" justifyContent="center" mb={3}>
        イベント
      </Heading>
      <Flex direction="column" width="100%">
        <Flex width="100%" justify="center"></Flex>
      </Flex>
    </Flex>
  );
};

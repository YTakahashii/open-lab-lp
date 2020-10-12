import { Box, Flex, Heading, useTheme, Divider } from '@chakra-ui/core';
import { Player, ControlBar } from 'video-react';

export const Message: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Flex
        id="message"
        flexDirection="column"
        marginBottom={theme.space[8]}
        width="100%"
        justify="center"
        align="center"
      >
        <Heading size="xl" marginBottom={theme.space[6]} display="flex" justifyContent="center">
          概要ビデオ
        </Heading>
        <Flex width={['100%', '100%', 800]} height="auto" justify="center">
          <Player playsInline poster="/inamura-video-thumbnail.jpg">
            <ControlBar />
            <source src="/inamura-video.mp4" type="video/mp4" />
          </Player>
        </Flex>
      </Flex>
      <Divider width="100%" marginBottom={theme.space[8]} />
    </>
  );
};

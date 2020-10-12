import { Box, Flex, Heading, useTheme } from '@chakra-ui/core';
import { Player, ControlBar } from 'video-react';

export const Message: React.FC = () => {
  const theme = useTheme();

  return (
    <Flex id="message" flexDirection="column" marginBottom={theme.space[8]}>
      <Heading size="xl" marginBottom={theme.space[6]} display="flex" justifyContent="center">
        概要ビデオ
      </Heading>
      <Box width={800} height="auto">
        <Player playsInline poster="/inamura-video-thumbnail.jpg">
          <ControlBar />
          <source src="/inamura-video.mp4" type="video/mp4" />
        </Player>
      </Box>
    </Flex>
  );
};

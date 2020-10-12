import { Box, useTheme, Divider } from '@chakra-ui/core';
import { NextPage } from 'next';
import { Events } from '../components/Events';
import { Header } from '../components/Header';
import { Message } from '../components/Message/Message';
import { Researches } from '../components/Researches';
import { Teachers } from '../components/Teachers';
import { Welcome } from '../components/Welcome';

const TopPage: NextPage = () => {
  const theme = useTheme();
  return (
    <div>
      <main>
        <Header />
        <Welcome />
        <Box marginX={[8, 24, 100, 100]} display="flex" flexDirection="column" alignItems="center">
          <Message />
          <Teachers />
          <Researches />
          <Events />
        </Box>
      </main>
    </div>
  );
};

export default TopPage;

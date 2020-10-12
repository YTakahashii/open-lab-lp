import { PseudoBox } from '@chakra-ui/core';
import React from 'react';

type Props = {
  href?: string;
};

export const Card: React.FC<Props> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" style={{ display: 'flex', width: 'fit-content' }}>
      <PseudoBox
        rounded="md"
        p={8}
        m={2}
        maxWidth={['300px', '300px', '400px', '400px']}
        bg="white"
        boxShadow="xl"
        cursor="pointer"
        transition="all 200ms ease"
        _hover={{ transform: 'translateY(-5px)' }}
      >
        {children}
      </PseudoBox>
    </a>
  );
};

import { PseudoBox } from '@chakra-ui/core';

export const Card: React.FC = ({ children }) => {
  return (
    <PseudoBox rounded="md" p={8} m={2} maxWidth={['300px', '300px', '400px', '400px']} bg="white" boxShadow="xl">
      {children}
    </PseudoBox>
  );
};

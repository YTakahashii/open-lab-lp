import { Box, Text, useTheme } from '@chakra-ui/core';

type Props = {
  color: string;
};

export const Keyword: React.FC<Props> = ({ children, color }) => {
  const theme = useTheme();
  return (
    <Box bg={color} color={theme.colors.white} p={theme.space[2]} m={theme.space[1]} borderRadius="8px">
      <Text size="md" fontWeight="bold" display="inline" whiteSpace="nowrap">
        {children}
      </Text>
    </Box>
  );
};

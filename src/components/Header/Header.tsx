import { Box, Flex, useTheme, Image, Text } from '@chakra-ui/core';
import Link from 'next/link';
import { UrlObject } from 'url';

export const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      as="header"
      position="sticky"
      width="100%"
      borderY={`1px solid ${theme.colors.gray[200]}`}
      display={['block', 'block', 'block', 'flex']}
      zIndex={theme.zIndices.sticky}
      height="64px"
    >
      <Flex
        as="nav"
        justifyContent="space-between"
        alignItems="center"
        paddingX={6}
        paddingY={2}
        marginX={[0, 0, 0, 'auto']}
      >
        <Flex as="aside" justifyContent="space-between" alignItems="center" width={['100%', '100%', '100%', 'auto']}>
          <Link href="#top">
            <a title="トップ">
              <Image src="/logo.svg" alt="トップ" width={110} objectFit="contain" userSelect="none" />
            </a>
          </Link>
        </Flex>
        <Box as="aside" display={['none', 'none', 'none', 'block']} marginLeft="400px">
          <Flex as="ul" flexWrap="wrap" justifyContent="space-between" alignItems="center" listStyleType="none">
            <HeaderItem href="#message">概要ビデオ</HeaderItem>
            <HeaderItem href="#teachers">教員紹介</HeaderItem>
            <HeaderItem href="#researches">研究テーマ</HeaderItem>
            <HeaderItem href="#events">イベント</HeaderItem>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

type Props = {
  href?: string | UrlObject;
};

const HeaderItem: React.FC<Props> = ({ href, children }) => (
  <Box as="li" marginX={4}>
    <Link href={href}>
      <a>
        <Text fontWeight="bold">{children}</Text>
      </a>
    </Link>
  </Box>
);

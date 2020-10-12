import { useTheme, Box, Heading, Flex, Image, Text, Divider } from '@chakra-ui/core';
import { Timeline, Event } from 'react-trivial-timeline';
import { Keyword } from './Keyword';

export const Teachers: React.FC = () => {
  const theme = useTheme();

  return (
    <Flex id="teachers" direction="column" marginBottom={3} width="100%" display={['none', 'none', 'flex']}>
      <Heading size="xl" marginBottom={theme.space[6]} display="flex" justifyContent="center">
        教員紹介
      </Heading>

      <Flex marginBottom={theme.space[8]} alignItems="flex-end">
        <Flex width="100%" justify="center" align="center">
          <Flex direction="column" width={['50%', '50%', '50%', '50%']}>
            <Image src="/assets/teachers/inamura-comp.png" width="100%" />
            <Heading size="md" color={theme.colors.gray[500]}>
              Hiroshi Inamura
            </Heading>
            <Heading size="2xl">稲村 浩</Heading>
          </Flex>
        </Flex>

        <Flex width="100%" direction="column" justify="space-around">
          <Flex direction="column" marginBottom={theme.space[8]}>
            <Heading size="lg">経歴</Heading>
            <Timeline lineColor="black">
              <Event interval="1990年">
                <Heading size="md">NTT横須賀通信研究所</Heading>
                <Text>分散ファイルシステム・OSの研究</Text>
              </Event>
              <Event interval="1998年">
                <Heading size="md">NTTドコモ R＆Dセンター</Heading>
                <Text>モバイル・インターネットプロトコルの研究と国際標準化</Text>
                <Text>モバイルサービスの開発，スマートフォン省電力化，O2O</Text>
              </Event>
              <Event interval="2016年 - 現在">
                <Heading size="md">公立はこだて未来大学 システム情報科学部</Heading>
                <Text>教授</Text>
              </Event>
            </Timeline>
          </Flex>
          <Flex direction="column" marginBottom={theme.space[8]}>
            <Heading size="lg">研究目的</Heading>
            <Text fontSize="lg" fontWeight="semibold" paddingY={theme.space[2]}>
              いつでもつながるネットワークや利用者を理解するサービスの実現のために，
              <Text display="inline" color={theme.colors.blue[400]}>
                スマートデバイス
              </Text>
              と
              <Text display="inline" color={theme.colors.blue[400]}>
                ネットワーキング
              </Text>
              の研究を通じて
              <Text display="inline" color={theme.colors.blue[400]}>
                モバイルコンピューティングの発展と高度化
              </Text>
              を目指します．
            </Text>
          </Flex>
          <Flex direction="column">
            <Heading size="lg">専門領域</Heading>
            <Flex paddingY={theme.space[2]} wrap="wrap">
              <Keyword color={theme.colors.blue[400]}>省電力</Keyword>
              <Keyword color={theme.colors.blue[400]}>セキュリティ</Keyword>
              <Keyword color={theme.colors.blue[400]}>自律分散</Keyword>
              <Keyword color={theme.colors.blue[400]}>モバイルネットワーク</Keyword>
              <Keyword color={theme.colors.blue[400]}>モバイルOS</Keyword>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Divider />

      <Flex marginTop={theme.space[8]}>
        <Flex width="100%" direction="column">
          <Flex direction="column" marginBottom={theme.space[8]} width="100%">
            <Heading size="lg">経歴</Heading>
            <Timeline lineColor="black">
              <Event interval="2007年">
                <Heading size="md">奈良先端技術大学大学院大学 情報科学研究科</Heading>
                <Text>助教</Text>
              </Event>
              <Event interval="2010年">
                <Heading size="md">大阪大学大学院 情報科学研究科</Heading>
                <Text>特任助教</Text>
              </Event>
              <Event interval="2011年">
                <Heading size="md">公立はこだて未来大学 システム情報科学部</Heading>
                <Text>助教</Text>
              </Event>
              <Event interval="2016年 - 現在">
                <Heading size="md">公立はこだて未来大学 システム情報科学部</Heading>
                <Text>准教授</Text>
              </Event>
            </Timeline>
          </Flex>

          <Flex direction="column" marginBottom={theme.space[8]}>
            <Heading size="lg">研究目的</Heading>
            <Text fontSize="lg" fontWeight="semibold" paddingY={theme.space[2]}>
              ユビキタスサービスを身近にするために必要な技術に関する研究を行っています．
            </Text>
          </Flex>

          <Flex direction="column">
            <Heading size="lg">専門領域</Heading>
            <Flex paddingY={theme.space[2]} wrap="wrap">
              <Keyword color={theme.colors.orange[400]}>情報セキュリティ</Keyword>
              <Keyword color={theme.colors.orange[400]}>モバイルネットワーク</Keyword>
              <Keyword color={theme.colors.orange[400]}>位置情報サービス</Keyword>
              <Keyword color={theme.colors.orange[400]}>近距離通信</Keyword>
            </Flex>
          </Flex>

          <Text
            size="sm"
            fontWeight="bold"
            py={theme.space[4]}
            height="fit-content"
            width="fit-content"
            color={theme.colors.red[500]}
          >
            注：中村研究室では、来年度のゼミ生を募集しません。
          </Text>
        </Flex>

        <Flex width="100%" alignItems="flex-end">
          <Flex direction="column" width="50%">
            <Image src="/assets/teachers/nakamura-comp.png" width="100%" />
            <Flex direction="column" alignItems="center">
              <Heading size="md" color={theme.colors.gray[500]}>
                Yoshitaka Nakamura
              </Heading>
              <Heading size="2xl">中村 嘉隆</Heading>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

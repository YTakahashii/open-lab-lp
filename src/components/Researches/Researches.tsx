import { Badge, Text, Flex, Heading, Icon, Box } from '@chakra-ui/core';
import React from 'react';
import { Card } from './Card';
import { BsFillPersonFill, BsPeopleFill } from 'react-icons/bs';

export const Researches: React.FC = () => {
  return (
    <Flex id="researches" direction="column" marginBottom={2}>
      <Heading display="flex" justifyContent="center" marginBottom={3}>
        研究テーマ
      </Heading>

      <Flex wrap="wrap" justify="center">
        <Card href="https://drive.google.com/file/d/10oIcwjbtNd1K_euWlHptZPLk1a7C58Yg/view?usp=sharing">
          <Heading size="md">
            オムニマイクロフォンアレイを用いた歩行者自律航法の補正手法の検討 <Icon name="external-link" mx="2px" />
          </Heading>
          <Flex wrap="wrap" my={2}>
            <Badge mb={2}>屋内位置推定</Badge>
            <Badge mb={2} ml={2}>
              歩行者自律航法(PDR)
            </Badge>
            <Badge mb={2} ml={2}>
              オムニマイクロフォンアレイ
            </Badge>
            <Badge mb={2} ml={2}>
              音波
            </Badge>
          </Flex>
          <Name>菊地 勇然</Name>
          <Flex wrap="wrap" my={2}>
            <Badge variantColor="blue">稲村研</Badge>
            <Badge variantColor="purple" ml={2}>
              Master
            </Badge>
          </Flex>
        </Card>

        <Card href="https://drive.google.com/file/d/1aO-IKFC0vA6OYFUd556Hf4m0tZDGflIL/view?usp=sharing">
          <Heading size="md">
            フォグコンピューティングにおける実行配置管理システムの研究 <Icon name="external-link" mx="2px" />
          </Heading>
          <Flex wrap="wrap" my={2}>
            <Badge mb={2}>フォグコンピューティング</Badge>
            <Badge mb={2} ml={2}>
              コンテンツ指向ネットワーク
            </Badge>
            <Badge mb={2} ml={2}>
              自立分散システム
            </Badge>
          </Flex>
          <Name>鎌田 幸希</Name>
          <Flex wrap="wrap" my={2}>
            <Badge variantColor="blue">稲村研</Badge>
            <Badge variantColor="purple" ml={2}>
              Master
            </Badge>
          </Flex>
        </Card>

        <Card href="https://drive.google.com/file/d/1-32ffRzd_n8Jw7dAW5-blDLbeihHbaFw/view?usp=sharing">
          <Heading size="md">
            特性が未知のボトルネックリンクに対して有効なLow-rate DDoS攻撃戦略の検討
            <Icon name="external-link" mx="2px" />
          </Heading>
          <Flex wrap="wrap" my={2}>
            <Badge mb={2}>ネットワーク・セキュリティ</Badge>
            <Badge mb={2} ml={2}>
              Low-rate DDoS Attack
            </Badge>
            <Badge mb={2} ml={2}>
              TCP輻輳制御
            </Badge>
          </Flex>
          <Name>髙橋 佑太</Name>
          <Flex wrap="wrap" my={2}>
            <Badge variantColor="blue">稲村研</Badge>
            <Badge variantColor="purple" ml={2}>
              Master
            </Badge>
          </Flex>
        </Card>

        <Card href="https://drive.google.com/file/d/172PDfMoPxdDq8Vhn8U1FKSkhwIgUVM5o/view">
          <Heading size="md">
            クラウドにおけるPDEの考え方を用いたファイルシステムの検討 <Icon name="external-link" mx="2px" />
          </Heading>
          <Flex wrap="wrap" my={2}>
            <Badge mb={2}>OSセキュリティ</Badge>
            <Badge mb={2} ml={2}>
              Plausibly Deniable Encryption
            </Badge>
            <Badge mb={2} ml={2}>
              Trusted Execution Environment
            </Badge>
          </Flex>
          <Name>柴崎 凌我</Name>
          <Flex wrap="wrap" my={2}>
            <Badge variantColor="blue">稲村研</Badge>
            <Badge variantColor="purple" ml={2}>
              Master
            </Badge>
          </Flex>
        </Card>

        <Card href="https://drive.google.com/file/d/19KFRXBrja_GUDfQiefC5BCJ1_dSydWYM/view?usp=sharing">
          <Heading size="md">
            通信環境を考慮したUAV群による自律的な代替ネットワーク構築手法の評価 <Icon name="external-link" mx="2px" />
          </Heading>
          <Flex wrap="wrap" my={2}>
            <Badge mb={2}>UAV</Badge>
            <Badge mb={2} ml={2}>
              MANET
            </Badge>
            <Badge mb={2} ml={2}>
              DTN
            </Badge>
          </Flex>
          <Name>福永 慧</Name>
          <Flex wrap="wrap" my={2}>
            <Badge variantColor="orange">中村研</Badge>
            <Badge variantColor="purple" ml={2}>
              Master
            </Badge>
          </Flex>
        </Card>

        <Card href="https://drive.google.com/file/d/1PCL-VjZnHUWadle6tN5MAiCZDPYp84D5/view?usp=sharing">
          <Heading size="md">
            スマートロック向けドアノック動作認証のための機械学習手法の検討 <Icon name="external-link" mx="2px" />
          </Heading>
          <Flex wrap="wrap" my={2}>
            <Badge mb={2}>スマートホーム</Badge>
            <Badge mb={2} ml={2}>
              スマートロック
            </Badge>
            <Badge mb={2} ml={2}>
              ドアノック
            </Badge>
            <Badge mb={2} ml={2}>
              個人認証
            </Badge>
          </Flex>
          <Name>中鉢 かける</Name>
          <Flex wrap="wrap" my={2}>
            <Badge variantColor="orange">中村研</Badge>
            <Badge variantColor="purple" ml={2}>
              Master
            </Badge>
          </Flex>
        </Card>

        <Card href="https://drive.google.com/file/d/1zT1lz3HcKjbozg5IaczGowJa_P8Vfysm/view?usp=sharing">
          <Heading size="md">
            2020年度 学部4年生の研究 <Icon name="external-link" mx="2px" />
          </Heading>
          <Flex wrap="wrap" my={2}>
            <Badge mb={2}>機械学習</Badge>
            <Badge mb={2} ml={2}>
              ネットワーク・セキュリティ
            </Badge>
            <Badge mb={2} ml={2}>
              認証
            </Badge>
            <Badge mb={2} ml={2}>
              行動予測
            </Badge>
            <Badge mb={2} ml={2}>
              画像認識
            </Badge>
          </Flex>
          <Flex>
            <Box as={BsPeopleFill} size="24px" />
            <Text size="sm" fontWeight="semibold" height="fit-content" ml={2}>
              学部生
            </Text>
          </Flex>
          <Flex wrap="wrap" my={2}>
            <Badge variantColor="blue">稲村研</Badge>
            <Badge variantColor="orange" ml={2}>
              中村研
            </Badge>
            <Badge variantColor="pink" ml={2}>
              Bachelor
            </Badge>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

const Name: React.FC = ({ children }) => (
  <Flex>
    <Box as={BsFillPersonFill} size="24px" />
    <Text size="sm" fontWeight="semibold" height="fit-content" ml={2}>
      {children}
    </Text>
  </Flex>
);

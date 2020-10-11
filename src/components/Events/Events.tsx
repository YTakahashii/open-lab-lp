import { Badge, Flex, Heading, Image, Text, Skeleton } from '@chakra-ui/core';
import { Card } from './Card';

export const Events: React.FC = () => {
  return (
    <Flex id="events" direction="column" marginBottom={3} width="100%" mb={8}>
      <Heading display="flex" justifyContent="center" mb={3}>
        イベント
      </Heading>
      <Flex direction="column" width="100%">
        <Flex width="100%" justify="center" wrap="wrap">
          <Card>
            <Image src="/assets/events/nomikai.jpg" rounded="md" mb={3} />
            <Heading size="md" mb={1}>
              キックオフ/打ち上げ 🍻
            </Heading>
            <Text>学期始めや研究発表の後に、みんなでワイワイ飲みます。</Text>
            <Flex mt={2}>
              <Badge>不定期</Badge>
            </Flex>
          </Card>

          <Card>
            <Skeleton isLoaded>
              <Image src="/assets/events/hanami.jpg" rounded="md" mb={3} />
            </Skeleton>
            <Heading size="md" mb={1}>
              研究室合同花見 🌸
            </Heading>
            <Text>五稜郭公園で他の研究室とバーベキューをしながら花見をします。</Text>
            <Flex mt={2} wrap="wrap">
              <Badge>4月末〜5月初旬頃</Badge>
            </Flex>
          </Card>

          <Card>
            <Image src="/assets/events/golf.jpg" rounded="md" mb={3} />
            <Heading size="md" mb={1}>
              研究室合同合宿 ⛳️
            </Heading>
            <Text>ニセコでパークゴルフ大会やバーベキュー!</Text>
            <Flex mt={2} wrap="wrap">
              <Badge>夏休み</Badge>
            </Flex>
          </Card>

          <Card>
            <Image src="/assets/events/gakkai.jpg" rounded="md" mb={3} />
            <Heading size="md" mb={1}>
              学会発表 👨‍🎓
            </Heading>
            <Text>研究成果を学会で発表します。学生は締め切り駆動で、日々進捗を生んでいます。</Text>
            <Flex mt={2} wrap="wrap">
              <Badge>不定期</Badge>
            </Flex>
          </Card>

          <Card>
            <Image src="/assets/events/oikon.jpg" rounded="md" mb={3} />
            <Heading size="md" mb={1}>
              追いコン 🎓
            </Heading>
            <Text>藤野研・白石研と合同追いコンをしています。</Text>
            <Flex mt={2} wrap="wrap">
              <Badge>3月</Badge>
            </Flex>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
};

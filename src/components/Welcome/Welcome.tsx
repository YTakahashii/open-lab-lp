import { Flex, Heading, useTheme } from '@chakra-ui/core';

export const Welcome: React.FC = () => {
  const theme = useTheme();
  return (
    <Flex
      id="top"
      direction="column"
      justifyContent="center"
      alignItems="center"
      marginY={theme.space[20]}
      display={['none', 'none', 'flex', 'flex']}
    >
      <section className="section-process">
        <div className="section-container">
          <div className="process-steps-container container-medium with-padding">
            <div className="process-step-container process-step-1">
              <div className="process-step-title-container">
                <h1 className="process-step-title">Network</h1>
                <div className="process-step-title-overlay">Network</div>
              </div>
            </div>
            <div className="process-step-container process-step-2">
              <div className="process-step-title-container">
                <h1 className="process-step-title">Security</h1>
                <div className="process-step-title-overlay">Security</div>
              </div>
            </div>
            <div className="process-step-container process-step-3">
              <div className="process-step-title-container">
                <h1 className="process-step-title">Application</h1>
                <div className="process-step-title-overlay">Application</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Heading as="span" size="2xl">
          Welcome to&nbsp;
        </Heading>
        <Heading as="span" size="2xl" color={theme.colors.blue[400]}>
          Inamura&nbsp;
        </Heading>
        <Heading as="span" size="2xl" color={theme.colors.orange[400]}>
          Nakamura&nbsp;
        </Heading>
        <Heading as="span" size="2xl">
          Lab.
        </Heading>
      </div>
    </Flex>
  );
};

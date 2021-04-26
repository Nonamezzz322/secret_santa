import React from 'react';
import { Container, Box, Card, CardContent, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';

const QuestionsAndAnswers = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  const questions = t('faq.QaA', { returnObjects: true });

  return (
    <Container component="main" maxWidth="lg">
      <Box className={classes.root}>
        <Typography variant="h3" className={classes.title}>
          {t('faq.faq_title')}
        </Typography>
        {questions.map(el => (
          <Box className={classes.userList} key={Math.random()}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {el.question}
                </Typography>
                <Typography color="textSecondary">
                  {el.answer}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default QuestionsAndAnswers;

import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getBox } from '../../redux/asyncActions/box';
import { useOne } from '../../hooks/useOne';
import AddUsers from '../AddUsers';
import BoxMenu from '../../components/BoxMenu';
import BoxDelete from '../BoxDelete/index';
import BoxParticipants from '../BoxParticipants/index';
import BoxDraw from '../BoxDraw/index';
import BoxSettings from '../BoxSettings/index';
import BoxWard from '../BoxWard/index';
import BoxUserCard from '../BoxUserCard/index';

const BoxItem = () => {
  const box = useSelector(state => state.boxes.currentBox);
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { id } = useParams();
  const { link, isDraw, users, currency, limit, allowedPreferences, name } = box;

  const generalMenu = [
    { label: t('box_item.participants'),
      link: 'participants' },
    { label: t('box_item.card'),
      link: 'card' },
    { label: t('box_item.ward'),
      link: 'ward' },
    { label: t('box_item.gift'),
      link: 'gift' }
  ];
  const creatorMenu = [
    { label: t('box_item.invite'),
      link: 'invite' },
    { label: t('box_item.draw'),
      link: 'draw' },
    { label: t('common.settings'),
      link: 'settings' },
    { label: t('box_item.delete_box'),
      link: 'delete' }
  ];

  useOne(() => dispatch(getBox(id)));

  return (
    <Container component="main" maxWidth="lg">
      <BoxMenu tabs={generalMenu} />
      <BoxMenu tabs={creatorMenu} />
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {box.name}
          </Typography>
          <Typography color="textSecondary">
            {t('box_item.creator')}
            {box.creatorName}
          </Typography>
        </CardContent>
      </Card>
      <Switch>
        {/*
        <Route exact path={`/box/${id}/card`} component={BoxDelete} />
        <Route exact path={`/box/${id}/gift`} component={BoxDelete} /> */}
        <Route
          exact
          path={`/box/${id}/card`}
          component={() => (
            <BoxUserCard
              link={link}
              currency={currency}
              limit={limit}
              allowedPreferences={allowedPreferences}
              users={users}
              userID={user.id}
            />
          )}
        />
        <Route
          exact
          path={`/box/${id}/ward`}
          component={() => (
            <BoxWard
              isDraw={isDraw}
              users={users}
              currency={currency}
              limit={limit}
              allowedPreferences={allowedPreferences}
              userID={user.id}
            />
          )}
        />
        <Route
          exact
          path={`/box/${id}/settings`}
          component={() => (
            <BoxSettings
              link={link}
              currency={currency}
              limit={limit}
              allowedPreferences={allowedPreferences}
              name={name}
            />
          )}
        />
        <Route
          exact
          path={`/box/${id}/draw`}
          component={() => (
            <BoxDraw
              isDraw={isDraw}
              users={users}
              link={link}
            />
          )}
        />
        <Route exact path={`/box/${id}/participants`} component={() => <BoxParticipants users={users} />} />
        <Route exact path={`/box/${id}/invite`} component={() => <AddUsers id={id} />} />
        <Route exact path={`/box/${id}/delete`} component={() => <BoxDelete id={id} />} />
      </Switch>
    </Container>
  );
};

export default BoxItem;

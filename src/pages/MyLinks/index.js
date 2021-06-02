import React from 'react';

import ListItem from '../../components/ListItem';
import Menu from '../../components/Menu';
import StatusBarPage from '../../components/StatusBarPage';

import { Container, Title, ListLinks } from './styles';

export default function MyLinks() {
  return (
    <Container>
      <StatusBarPage barStyle='light-content' backgroundColor='#132742' />

      <Menu />

      <Title>Meus Links</Title>

      <ListLinks
        data={[{ id: 1, link: 'test.com' }, { id: 2, link: 'test2.com' }]}
        keyExtrator={(item) => String(item.id)}
        renderItem={({ item }) => <ListItem data={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
        showVerticalScrollIndicator={false}
      />
    </Container>
  );
}

import React from 'react';
import { Feather } from '@expo/vector-icons';

import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';

import {
  ContainerLogo,
  Logo,
  ContainerContent,
  Title,
  Subtitle,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText,
} from './styles';

export default function Home() {
  return (
    <LinearGradient
      colors={['#1DDBB9', '#132742']}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <StatusBarPage barStyle='light-content' backgroundColor='#1DDBB9' />

      <Menu />

      <ContainerLogo>
        <Logo source={require('../../assets/Logo.png')} resizeMode='contain' />
      </ContainerLogo>

      <ContainerContent>
        <Title>SujeitoLink</Title>
        <Subtitle>Cole seu link para encurtar</Subtitle>

        <ContainerInput>
          <BoxIcon>
            <Feather name='link' size={22} color='#FFF' />
          </BoxIcon>
          <Input placeholder='Cole seu link aqui...' placeholderTextColor='white' />
        </ContainerInput>

        <ButtonLink>
          <ButtonLinkText>Gerar Link</ButtonLinkText>
        </ButtonLink>
      </ContainerContent>
    </LinearGradient>
  );
}

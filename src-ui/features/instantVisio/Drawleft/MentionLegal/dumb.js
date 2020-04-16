import React from 'react';
import {Image, ScrollView} from 'react-native';
import {Block, Text, NavBar,Icon,theme,Button} from './../../../../global/components/Socles';
import images from './../../../../global/components/images';
import style from './style';
import {i18nString} from './../../../../global/i18n';

const Dump = ({navigation, MentionLegal}) => (
  <>
    <NavBar
      title={i18nString('labelMentionLegal').toUpperCase()}
      left={
        <Button
        onlyIcon
        icon="navigate-before"
        iconFamily="ArgonExtra"
        iconSize={35}
        color="transparent"
        iconColor="#666666"
        onPress={() => navigation.navigate('Home')}
        style={{width: 40, height: 40}}>
        back
      </Button>
      }
      leftStyle={{paddingVertical: 12, flex: 0.2}}
    />
    <Block flex style={{marginHorizontal: 15}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <Image
          style={{width: 150, height: 150}}
          source={images.logo.visioLogo}
        />
        <Text style={{fontSize: 26, fontWeight: 'bold', color: '#696969'}}>{i18nString('labelMentionLegal')}</Text>
        {MentionLegal.map(legal => (
          <Block key={legal.id}>
            <Text
              style={{
                marginTop: 15,
                marginBottom: 15,
                fontWeight: 'bold',
                fontSize: 17,
                color: '#696969'
              }}>
                {i18nString('MentionLegal.'+(legal.id-1)+'.titre')}
            </Text>
            {legal.article.map(articl => (
              <Block row key={articl.id} style={{marginVertical: 5}}>
                {articl.titreGras !== '' && (
                  <Text style={{fontWeight: 'bold', color: '#696969'}}>{i18nString('MentionLegal.'+(legal.id-1)+'.article.'+(articl.id-1)+'.titreGras')}</Text>
                )}
                <Block flex>
                  <Text>{i18nString('MentionLegal.'+(legal.id-1)+'.article.'+(articl.id-1)+'.Text')}</Text>
                </Block>
              </Block>
            ))}
          </Block>
        ))}
      </ScrollView>
    </Block>
  </>
);

export default Dump;

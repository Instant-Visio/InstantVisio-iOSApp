import React from 'react';
import {Image, ScrollView} from 'react-native';
import {
  Block,
  Text,
  Button,
  NavBar,
  theme,
  Icon,
} from './../../../../global/components/Socles';
import images from './../../../../global/components/images';
import {i18nString} from './../../../../global/i18n';
import style from './style';

const Dump = ({navigation, AboutUS}) => (
  <>
    <NavBar
      title={i18nString('About').toUpperCase()}
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
        <Text style={{fontSize: 26, fontWeight: 'bold', color: '#696969'}}>
          {i18nString('labelCredit')}
        </Text>
        {AboutUS.map(about => (
          <Block key={about.id}>
            <Text
              style={{
                marginTop: 15,
                marginBottom: 15,
                fontWeight: 'bold',
                color: '#696969',
                fontSize: 20,
              }}>
              {i18nString('AboutUS.' + (about.id - 1) + '.titre')}
            </Text>
            {about.acteurs.map(acteur => (
              <Block row key={acteur.id} style={{marginVertical: 10}}>
                {acteur.image === '' ? (
                  <Image
                    style={{width: 70, height: 70}}
                    source={images.icon.user}
                  />
                ) : (
                  <Image
                    style={{width: 70, height: 70}}
                    source={
                      acteur.id - 1 === 0
                        ? i18nString(
                            'AboutUS.' +
                              (about.id - 1) +
                              '.acteurs.' +
                              (acteur.id - 1) +
                              '.image',
                            {DailyImage: images.icon.daily},
                          )
                        : i18nString(
                            'AboutUS.' +
                              (about.id - 1) +
                              '.acteurs.' +
                              (acteur.id - 1) +
                              '.image',
                            {OVHcloudImage: images.icon.ovh},
                          )
                    }
                  />
                )}
                <Block flex style={{marginHorizontal: 25}}>
                  <Text>{acteur.nom}</Text>

                  {acteur.site ? (
                    <Text>
                      {i18nString('labelSite')}
                      {acteur.site}
                    </Text>
                  ) : (
                    <Button
                      onlyIcon
                      icon="linkedin"
                      iconFamily="entypo"
                      iconSize={20}
                      color="white"
                      iconColor="#3B5998"
                      style={{width: 35, height: 35}}>
                      warning
                    </Button>
                  )}
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

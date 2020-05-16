import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Text,
  TouchableOpacity,
  Easing,
} from 'react-native';
import {Button} from './index';
var styles = StyleSheet.create({
  fabList: {
    zIndex: 10,
    position: 'absolute',
    bottom: 90,
    display: 'flex',
    flexDirection: 'row',
    right: 0,
    height: 50,
    paddingRight: 20,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 100,
    backgroundColor: 'transparent',
  },
  fabOpenIcon: {
    zIndex: 100,
    paddingLeft: 8,
    height: 50,
    width: 80,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabOpenIconFirst: {
    zIndex: 100,
    paddingLeft: 8,
    paddingRight: 5,
    height: 50,
    width: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabOpenIconLast: {
    zIndex: 100,
    paddingLeft: 8,
    paddingRight: 5,
    height: 50,
    width: 55,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class FabSwipeMenu extends React.Component {
  constructor(props) {
    super(props);
    this.width = new Animated.Value(50);
    this.state = {
      isOpenSwipList: false,
    };
    this.animationWidth = this.props.otherThenTraining ? 155 : 130;
    //console.log(this.props);
  }
  openSwiprList = () => {
    this.width.setValue(55);
    this.setState({isOpenSwipList: true});
    Animated.timing(this.width, {
      toValue: this.animationWidth,
      delay: 0,
      duration: this.animationWidth,
    }).start();
  };

  closeSwiprList = () => {
    this.width.setValue(this.animationWidth);
    this.setState({isOpenSwipList: false});
    Animated.timing(this.width, {
      toValue: 55,
      delay: 0,
      duration: this.animationWidth,
    }).start();
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isOpenSwipList ? (
          <TouchableOpacity
            onPress={() => this.closeSwiprList()}
            style={{
              backgroundColor: 'rgba(0,0,0,0)',
              position: 'absolute',
              flex: 1,
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              zIndex: 0,
            }}></TouchableOpacity>
        ) : null}
        <Animated.View style={[styles.fabList, {width: this.width}]}>
          {this.state.isOpenSwipList ? (
            <Button
              onPress={() => this.closeSwiprList()}
              transparent
              style={styles.fabOpenIconFirst}>
              <Text style={{borderTopLeftRadius:15,fontSize: 12, color: 'rgb(256,256,256)'}}>-</Text>
            </Button>
          ) : (
            <Button
              onPress={() => this.openSwiprList()}
              style={[styles.fabOpenIconFirst,{borderTopLeftRadius:86}]}>
              <Text style={{fontSize: 12, color: 'rgb(256,256,256)'}}>+</Text>
            </Button>
          )}
          <Button onPress={()=>this.props.sharedLink()} style={styles.fabOpenIcon}>
            <Text style={{fontSize: 12, color: 'rgb(256,256,256)'}}>
             Partager
            </Text>
          </Button>
        </Animated.View>
      </React.Fragment>
    );
  }
}

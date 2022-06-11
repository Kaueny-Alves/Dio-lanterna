import React, { useEffect, useState } from 'react';

import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';



const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((oldToggle) => !oldToggle)
  }

  useEffect(() => {
    Torch.switchState(toggle)

  }, [toggle])

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle((oldToggle) => !oldToggle)
    })
    return ()=> subscription.remove()
  }, [])

  return (
    <View style={toggle ? styles.containerLight : styles.container}>
      <TouchableOpacity onPress={handleToggle}>

        <Image
          style={toggle ? styles.lightingOn : styles.lightingOff}
          source={toggle ? require('./images/eco-light.png') : require('./images/eco-light-off.png')} />
        <Image
          style={styles.dioLogo}
          source={toggle ? require('./images/logo-dio.png') : require('./images/logo-dio-white.png')} />
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  lightingOff: {
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,
  },
  dioLogo: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 250,
    height: 250,
  },
});

export default App;
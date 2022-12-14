import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  MaterialIcons,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function Foto({ navigation }) {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            height: scrollY.interpolate({
              inputRange: [5, 160, 180],
              outputRange: [140, 20, 0],
              extrapolate:'clamp',
            }),
            opacity: scrollY.interpolate({
              inputRange:[1,75,170],
              outputRange:[1,1,0],
              extrapolate:'clamp'
            })
          },
        ]}>
        <Image
          source={require('../Imagens/foto1.jpeg')}
          style={styles.imageheader}
        />
        <Text style={styles.text}>
          Aqui você pode acompanhar as imagens dos ultimos eventos.
        </Text>
      </Animated.View>
      <ScrollView
      scrollEventThrottle={15}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollY },
              },
            },
          ],
          { useNativeDriver: false }
        )}>
        <Image source={require('../Imagens/foto3.jpg')} style={styles.image} />

        <Image source={require('../Imagens/foto4.jpeg')} style={styles.image} />

        <Image source={require('../Imagens/foto5.jpeg')} style={styles.image} />

        <Image
          source={require('../Imagens/foto10.jpeg')}
          style={styles.image}
        />

        <Image source={require('../Imagens/foto8.jpeg')} style={styles.image} />

        <Image source={require('../Imagens/foto9.jpeg')} style={styles.image} />

        <Image
          source={require('../Imagens/foto12.jpeg')}
          style={styles.image}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0870c',
  },
  imageheader: {
    width: 350,
    height: 80,
    alignItems: 'center',
  },
  header: {},

  image: {
    width: '100%',
    height: 300,
    margin: 7,
    borderRadius: 5,
  },

  text: {
    //fontFamily: 'Anton_400Regular',
    fontSize: 20,
    marginHorizontal: '1%',
    textAlign: 'center',
  },
});

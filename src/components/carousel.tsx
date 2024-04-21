import React from "react";

import { ReactElement } from "react";

import { dataImage } from "../data/data";

import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native"

import Carousel from "react-native-reanimated-carousel";

export type TDados = {
    image: string;
  }

const width = Dimensions.get('window').width;

export const BannerImage = () => {
  const renderItem: (item: {
    item: TDados;
    index: number;
  }) => ReactElement = ({ item }) => {
    return(
    <View style={styles.imageDimensions}>
      <Image style={styles.image}
        source={{ uri: item.image }}
        resizeMode='contain' />
    </View>
  )
  }

  return (
    <SafeAreaView>
        <View style={styles.header}>
            <Text style={styles.text}>Carrossel com 5 imagens</Text>
        </View>
        
        <Carousel
          data={dataImage}
          renderItem={renderItem}
          scrollAnimationDuration={1000}
          loop={false}
          width={width}
          height={width / 2}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    margin: 16,
  },
  text: {
    fontFamily: 'Rubik-Italic-VariableFont_wght',
    fontWeight: 'bold',
    fontSize: 25,
  },
  imageDimensions: {
    height: 180,
    alignItems: 'center',
    marginHorizontal: 40,
    borderRadius: 20,
    width: Dimensions.get('screen').width * 0.8,
  },
  image: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: 20,
  }

});

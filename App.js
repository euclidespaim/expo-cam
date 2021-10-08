import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from "react";
import {Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import styles from './src/style.js'


export default function App() {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [shouldShow, setShouldShow] = useState(true);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>App do Kid!!</Text>
        <Text style={styles.corpo}>Bem vindo ao primeiro app mobile do Kid!</Text>

          { shouldShow ?
          (
          <Camera style={styles.camera} type={type}>
              <View style={styles.flipContainer}>
                  <TouchableOpacity style={styles.button}
                      onPress={() => {
                          setType(
                              type === Camera.Constants.Type.back
                                  ? Camera.Constants.Type.front
                                  : Camera.Constants.Type.back
                          );
                      }}>
                      <Text style={styles.flipText}> Flip </Text>
                  </TouchableOpacity>
              </View>
          </Camera>
          ) : null}

        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonStart}
             onPress={() => setShouldShow(!shouldShow)
             }>
             <Text style={styles.buttonTexto}>Start Cam</Text>
          </TouchableOpacity>
        </View>
          <StatusBar style="auto" />
    </View>
);
}


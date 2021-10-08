import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function TakePic() {

    const __startCamera = async () => {
        const {status} = await Camera.requestPermissionsAsync()
        if(status === 'granted'){
            // do something

            return (<Camera
                style={{flex: 1,width:"100%"}}
                ref={(r) => {
                    camera = r
                }}
            ></Camera>);

        }else{
            Alert.alert("Access denied")
        }i


    }
    __startCamera();

}
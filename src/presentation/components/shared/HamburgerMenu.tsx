import React, { useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect (()=> {
    navigation.setOptions({
         // eslint-disable-next-line react/no-unstable-nested-components
         headerLeft: () => (
            <Pressable 
               onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer)}>            
               
              <Text>Menú</Text>
            </Pressable>
         )
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (<></>);
}
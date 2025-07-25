import React, { useEffect } from 'react';
import { Pressable/* , Text */ } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { globalColors } from '../../theme/theme';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect (()=> {
    navigation.setOptions({
         // eslint-disable-next-line react/no-unstable-nested-components
         headerLeft: () => (
            <Pressable 
              // eslint-disable-next-line react-native/no-inline-styles
              style = {{marginLeft: 5}}

               onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer)}>            
               
              {/* <Text>Menú</Text> */}

               <Ionicons 
                  name='menu-outline'
                  size = {60}
                  color = {globalColors.primary}
               /> 
            </Pressable>
         )
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (<></>);
}
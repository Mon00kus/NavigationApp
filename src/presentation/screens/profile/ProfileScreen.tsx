/* eslint-disable react-native/no-inline-styles */
import { Platform, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  return ( 
    <View style ={{
      flex:1,
      paddingHorizontal: 20,
      marginTop: Platform.OS === 'android' ? top : 0
    }}>
      <Text style={{
        marginBottom: 10
      }}>Profile Screen, Works</Text>
      <PrimaryButton 
        onPress= {()=> navigation.dispatch(DrawerActions.toggleDrawer)}
        label = "Abrir menu"        
      />
    </View>
  )
}
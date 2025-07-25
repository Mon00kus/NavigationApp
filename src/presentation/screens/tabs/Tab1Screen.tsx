import { Text, View } from 'react-native';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu'; 
import Ionicons from '@react-native-vector-icons/ionicons';

export const Tab1Screen = () => { 

  return (
    <View>
      <HamburgerMenu />
      <Text>Tab1 Screen</Text>      
      <Ionicons 
        name='rocket-outline'
        size = {160}
        color = {'red'}
      /> 
      
    </View>
  )

}
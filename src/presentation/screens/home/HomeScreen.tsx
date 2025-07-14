import { useEffect } from 'react';
import { Pressable, View } from 'react-native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../theme/theme';
import type { RootStackParams } from '../../routes/StackNavigator';
import { Text } from 'react-native-gesture-handler';

export const HomeScreen = () => {
  const navigation=useNavigation<NavigationProp<RootStackParams>>();
  useEffect(()=>{
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerLeft:() => (
        <Pressable onPress= {()=>navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              color: 'blue', // Cambia el color a azul
              fontSize: 18,   // Cambia el tamaño de la fuente
              fontWeight: 'bold', // Hace el texto negrita
              // Agrega más estilos según sea necesario
            }}
          >Menu</Text>
        </Pressable>
      ),
      title: ''
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <View style={globalStyles.container}>
        <PrimaryButton 
            onPress={()=>navigation.navigate('Products')}
            label='Productos'
        />
        <PrimaryButton 
            onPress={()=>navigation.navigate('Settings')}
            label='Settings'
        />
    </View>
  )
}
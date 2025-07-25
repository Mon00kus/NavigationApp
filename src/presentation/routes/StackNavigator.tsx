import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';  
import { useNavigation } from '@react-navigation/native';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';

export type RootStackParams = {
  Home :    undefined,
  Product:  { id: number, name: string },
  Products: undefined,
  Settings: undefined
}

const Stack = createStackNavigator<RootStackParams>();
  
export const StackNavigator=()=>{
  const navigator = useNavigation();
  
  useEffect(() => {
    navigator.setOptions({
      headerShown: false,
  })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack.Navigator 
      screenOptions={
        {
          headerShown: false,
          headerStyle:{
            elevation:0,
            shadowColor: 'transparent'
          },          
        }
      }      
    >
      <Stack.Screen 
        options={{}}
        name="Home" 
        component={HomeScreen}
      />
      <Stack.Screen 
        name="Products" 
        component={ProductsScreen}
      />
      <Stack.Screen
        name="Product" 
        component={ProductScreen}
      />
      <Stack.Screen 
        name="Settings" 
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
}
import { Text, View, StyleSheet } from 'react-native';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { type RootStackParams } from '../../routes/StackNavigator';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';

const products = [
  {id: 1, name: 'Producto 1'},
  {id: 2, name: 'Producto 2'},
  {id: 3, name: 'Producto 3'},
  {id: 4, name: 'Producto 4'},
  {id: 5, name: 'Producto 5'},
  {id: 6, name: 'Producto 6'},
]

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style= {globalStyles.container}>
      {/* <Text style={localStyles.bottomText}>Productos</Text> */}
      <HamburgerMenu />
      <FlatList
        data={ products }
        renderItem={({item})=>(
          <PrimaryButton
            onPress={ () => navigation.navigate('Product', { id: item.id, name: item.name }) }
            label={ item.name }
          />
        )}
      />
      <Text style={localStyles.bottomText}>Ajustes</Text>
      <PrimaryButton
         onPress={ () => navigation.navigate('Settings') }
         label="Ajustes"
      />
    </View>
  )
};

const localStyles = StyleSheet.create({
  bottomText: {
    fontSize: 20,
    fontWeight: 'bold', 
    marginTop: 20,
  },
});
import { RouteProp, useRoute, useNavigation, NavigationProp } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';
import { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';
import { useEffect } from 'react';

export const ProductScreen = () => {

  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation<NavigationProp<RootStackParams, 'Product'>>();

  useEffect(()=>{
    navigation.setOptions({
      title: params.name
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <View style= {globalStyles.container}>
      <Text>Product Screen</Text>
      <Text style = {localStyles.productText}
      >
        {params.id} - {params.name}
      </Text>
    </View>
  )
};

const localStyles = StyleSheet.create({
  productText: {
    fontSize: 20,
    fontWeight: 'bold',     
    textAlign: 'center',
    marginTop: 20,
  },
});
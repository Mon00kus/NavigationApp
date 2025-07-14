import { Text, View, } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const SettingsScreen = () => {

  const navigator = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>Ajustes</Text>
      <PrimaryButton 
        label = "Regresar"
        onPress = {() => navigator.goBack()}
      />      
      <PrimaryButton
        label = "Regresar al home"
        onPress = {() => navigator.dispatch(StackActions.popToTop())}
      />      
    </View>
  )
};

/* const localStyles = StyleSheet.create({
  subTitle: {
    backgroundColor: 'Yellow',    
  }
}); */
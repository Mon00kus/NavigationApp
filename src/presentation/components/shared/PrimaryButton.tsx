import { View, Text, Pressable } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface Props {
  onPress: () => void;
  label: string
}

export const PrimaryButton = ({onPress, label}: Props) => {
  
  return (
    <View style={globalStyles.container}>      
      <Pressable 
        onPress={onPress}
        style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  )
}
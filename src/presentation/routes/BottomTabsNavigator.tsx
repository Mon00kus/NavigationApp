/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
/* import { Tab2Screen } from '../screens/tabs/Tab2Screen'; */
/* import { Tab3Screen } from '../screens/tabs/Tab3Screen'; */
import { Text } from 'react-native';
import { globalColors } from '../theme/theme';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

export const  BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions = {{
        //headerShown: false,
        tabBarStyle: {
          backgroundColor: globalColors.background,
          borderWidth:0,
          elevation:0,
          borderTopWidth: 0
        },
        tabBarLabelStyle: {
          marginBottom: 5
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent'
        } 
      }}
    >
      <Tab.Screen name="Tab1"
        options={{
          title:'', 
          tabBarIcon: ({color})=>(<Text style={{color}} >Tab1</Text>)
        }} 
        component={Tab1Screen} 
      />
      <Tab.Screen name="Tab2" 
        options={{
          title:'', 
          tabBarIcon: ({color})=>(<Text style={{color}} >Tab2</Text>)
        }} 
        component={TopTabsNavigator} 
      />
      <Tab.Screen name="Tab3" 
        options={{
          title:'', 
          tabBarIcon: ({color})=>(<Text style={{color}} >Tab3</Text>)
        }} 
        component={StackNavigator} 
      />
    </Tab.Navigator>
  );
};
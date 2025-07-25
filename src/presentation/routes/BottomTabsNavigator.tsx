/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
/* import { Tab2Screen } from '../screens/tabs/Tab2Screen'; */
/* import { Tab3Screen } from '../screens/tabs/Tab3Screen'; */
/* import { Text } from 'react-native'; */
import { globalColors } from '../theme/theme';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import Ionicons from '@react-native-vector-icons/ionicons';

const Tab = createBottomTabNavigator();

export const  BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      
      screenOptions = {{
        tabBarActiveTintColor: globalColors.primary,
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
      <Tab.Screen 
        name="Tab1"
        options={{
          title:'', 
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          tabBarIcon: ({color})=>(<Ionicons name='accessibility-outline' size= {30} color = {globalColors.secondary}/>)
        }}  
        component={Tab1Screen} 
      />
      <Tab.Screen 
        name="Tab2" 
        options={{
          title:'', 
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          tabBarIcon: ({color})=>(<Ionicons name='airplane-outline' size= {30} color = {globalColors.secondary} />)
        }} 
        component={TopTabsNavigator} 
      />
      <Tab.Screen 
        name="Tab3" 
        options={{
          title:'', 
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          tabBarIcon: ({color})=>(<Ionicons name='american-football-outline' size= {30} color = {globalColors.secondary} />)
        }} 
        component={StackNavigator} 
      />
    </Tab.Navigator>
  );
};
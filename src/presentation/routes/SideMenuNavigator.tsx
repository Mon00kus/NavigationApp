import { View, useWindowDimensions } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
/* import { StackNavigator } from './StackNavigator'; */
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { BottomTabNavigator } from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  
  const dimensions = useWindowDimensions();
  
  return (
    <Drawer.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      drawerContent={(props) => <CustomDrawerContent {...props} />}
                 
      screenOptions={{
        drawerType: (dimensions.width >= 768) ? 'permanent': 'slide',
        headerShown: false,
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20
        },
      }}
    >
  {/*     <Drawer.Screen name="StackNvigator" component={StackNavigator} /> */}
      <Drawer.Screen name="Tabs" component={BottomTabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 200,
          backgroundColor: globalColors.showProfile,
          margin: 30,
          borderRadius: 50
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}
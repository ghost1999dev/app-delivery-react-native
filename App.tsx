import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/Presentation/views/home/Home';
import { RegisterScreen } from './src/Presentation/views/register/Register';
import { ProfileInfoScreen } from './src/Presentation/views/profile/info/ProfileInfo';
import { RolesScreen } from './src/Presentation/views/roles/Roles';
import { ClientTabsNavigatorScreen } from './src/Presentation/navigator/ClientTabsNavigator';
import { AdminTabsNavigatorScreen } from './src/Presentation/navigator/AdminTabsNavigator';
export type RootStackParamList={
  HomeScreen: undefined,
  RegisterScreen: undefined,
  ProfileInfoScreen:undefined,
  RolesScreen:undefined,
  ClientTabsNavigatorScreen:undefined,
  AdminTabsNavigatorScreen:undefined
}
const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen 
          name="RegisterScreen" 
          component={RegisterScreen}
          options={{
            headerShown:true,
            title:'New User'
          }} 
        />
       
        <Stack.Screen
          name="RolesScreen"
          component={RolesScreen}
          options={{
            headerShown:true,
            title:'Selecciona un rol'
          }}
        />
        <Stack.Screen
          name="ClientTabsNavigatorScreen"
          component={ClientTabsNavigatorScreen}
        />
         <Stack.Screen
          name="AdminTabsNavigatorScreen"
          component={AdminTabsNavigatorScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ClientCategoryListScreen } from '../views/client/category/CategoryList';
import { ClientOrderListScreen } from '../views/client/order/OrderList';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import { Image } from 'react-native';
interface Props extends StackScreenProps<RootStackParamList, "ProfileInfoScreen"> {}
const Tab = createBottomTabNavigator();
export const ClientTabsNavigatorScreen = ({navigation}:Props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="ClientCategoryListScreen" 
        component={ClientCategoryListScreen}
        options={{
          title:'Categorias',
          tabBarLabel:'Categorias',
          tabBarIcon:({color})=>(
            <Image
              source={require('../../../assets/list.png')}
              style={{width:25, height:25}}  
            />
          )
        }}
      />
      <Tab.Screen 
        name="ClientOrderListScreen" 
        component={ClientOrderListScreen}
        options={{
          title:'Ordenes',
          tabBarLabel:'Ordenes',
          tabBarIcon:({color})=>(
            <Image
              source={require('../../../assets/orders.png')}
              style={{width:30, height:30}}  
            />
          )
        }}
      />
      <Tab.Screen 
        name="ProfileInfoScreen" 
        component={ProfileInfoScreen}
        options={{
          title:'Tu perfil',
          tabBarLabel:'Perfil',
          tabBarIcon:({color})=>(
            <Image
              source={require('../../../assets/user_menu.png')}
              style={{width:30, height:30}}  
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}


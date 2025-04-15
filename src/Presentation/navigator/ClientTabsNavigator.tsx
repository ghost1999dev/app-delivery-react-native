import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ClientCategoryListScreen } from '../views/client/category/CategoryList';
import { ClientOrderListScreen } from '../views/client/order/OrderList';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
interface Props extends StackScreenProps<RootStackParamList, "ProfileInfoScreen"> {}
const Tab = createBottomTabNavigator();
export const ClientTabsNavigatorScreen = ({navigation}:Props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ClientCategoryListScreen" component={ClientCategoryListScreen}/>
      <Tab.Screen name="ClientOrderListScreen" component={ClientOrderListScreen}/>
      <Tab.Screen name="ProfileInfoScreen" component={ProfileInfoScreen}/>
    </Tab.Navigator>
  )
}


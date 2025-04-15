import React from 'react'
import {createBottomTabNavigator  } from "@react-navigation/bottom-tabs";
import { TabActions } from '@react-navigation/native';
import { AdminCategoryListScreen } from '../views/admin/category/CategoryList';
import { AdminOrderListScreen } from '../views/admin/order/list/OrderList';
import { ProfileInfoScreen } from '../views/profile/info/ProfileInfo';
const Tab = createBottomTabNavigator()
export const AdminTabsNavigatorScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AdminCategoryListScreen" component={AdminCategoryListScreen}/>
      <Tab.Screen name="AdminOrderListScreen" component={AdminOrderListScreen}/>
      
    </Tab.Navigator>
  )
}

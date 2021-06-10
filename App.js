
import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './Views/Inicio';
import NuevoCliente from './Views/NuevoCliente';
import DetallesCliente from './Views/DetallesCliente/';
import BarraSuperior from './Componentes/Barra';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';




const Stack = createStackNavigator();

//Definir el tema

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'pink',
    accent: 'Red'
  }
}

console.log(theme);

const App = () => {
  return ( 
 
    <>
    <PaperProvider>
     <NavigationContainer>
       <Stack.Navigator
          initialRouteName="Inicio"
          screenOptions={{
            headerStyle:{
              backgroundColor: theme.colors.primary
            },
            headerTintColor: theme.colors.surface,
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}
       >
         <Stack.Screen
         name="Inicio"
         component={Inicio} 
         options={ ({navigation, route}) => ({
            
          // headerLeft: (props) => <BarraSuperior {...props } 
          //                     navigation={navigation}
          //                     route={route}
          //                   />
       })}
         />
         <Stack.Screen
         name="NuevoCliente"
         component={NuevoCliente} 
         options={{
           title:"Nuevo Cliente"
         }}
         />
         <Stack.Screen
         name="DetallesCliente"
         component={DetallesCliente}
         options={{
          title:"Detalles Cliente"
        }} 
         />
       </Stack.Navigator>
     </NavigationContainer>
     </PaperProvider>
    </>


   );
};

const styles = StyleSheet.create ({



});
 
export default App;
import React from 'react';
import {StyleSheet, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import WelcomeScreen from './src/screens/WelcomeScreen';
import MainScreen from './src/screens/MainScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const styles = StyleSheet.create({
    view: {flex: 1, backgroundColor: backgroundStyle.backgroundColor},
  });

  return (
    <NavigationContainer>
      <View style={styles.view}>
        <Stack.Navigator
          initialRouteName="MainScreen"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

export default App;

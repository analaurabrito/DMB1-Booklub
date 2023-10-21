import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from '../pages/MainPage';

const Stack = createNativeStackNavigator();

export default function AppRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='MainPage' component={MainPage}/>
        </Stack.Navigator>
    );
}
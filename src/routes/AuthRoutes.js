import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingPage from '../pages/LoadingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import FPasswordPage from '../pages/FPasswordPage';

const Stack = createNativeStackNavigator();

export default function AuthRoutes(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='LoadingPage' component={LoadingPage} />
            <Stack.Screen name='LoginPage' component={LoginPage}/>
            <Stack.Screen name='RegisterPage' component={RegisterPage}/>
            <Stack.Screen name='FPasswordPage' component={FPasswordPage}/>
        </Stack.Navigator>
    );
}
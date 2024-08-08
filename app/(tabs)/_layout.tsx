import {Tabs} from "expo-router";
import Icons from '@expo/vector-icons/MaterialIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {FontAwesome6} from '@expo/vector-icons';

const TabsLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name={'home'}
                options={{
                    title: 'Главная',
                    headerShown: false,
                    tabBarIcon(props) {
                        return <Icons name={'home'} {...props}/>
                    }
                }
                }
            />
            <Tabs.Screen
                name={'category'}
                options={{
                    title: 'Каталог',
                    headerShown: false,
                    tabBarIcon(props) {
                        return <Icons name={'manage-search'} {...props}/>
                    }
                }
                }
            />
            <Tabs.Screen
                name={'cart'}
                options={{
                    title: 'Корзина',
                    headerShown: false,
                    tabBarIcon(props) {
                        return <MaterialCommunityIcons name="shopping-outline" {...props}/>
                    }
                }
                }
            />
            <Tabs.Screen
                name={'desires'}
                options={{
                    title: 'Желания',
                    headerShown: false,
                    tabBarIcon(props) {
                        return <MaterialCommunityIcons name="cards-heart-outline" {...props}/>
                    }
                }
                }
            />
            <Tabs.Screen
                name={'user'}
                options={{
                    title: 'Кабинет',
                    headerShown: false,
                    tabBarIcon(props) {
                        return <FontAwesome6 name="user" {...props}/>
                    }
                }
                }
            />
        </Tabs>
    )
}
export default TabsLayout
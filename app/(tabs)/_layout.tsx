import {Tabs} from "expo-router";
import Icons from '@expo/vector-icons/MaterialIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {FontAwesome6} from '@expo/vector-icons';

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#e05656",
                tabBarInactiveTintColor: "#CDCDE0",
                tabBarLabelStyle: {
                    fontSize: 11
                },
                tabBarStyle: {
                    backgroundColor: "#161622",
                    borderTopWidth: 1,
                    borderTopColor: "#232533",
                    height: 67,
                    paddingTop: 5,
                    paddingBottom: 5
                },
            }}
        >
            <Tabs.Screen
                name={'home'}
                options={{
                    title: 'Главная',
                    headerShown: false,
                    tabBarIcon(props) {
                        return <Icons style={{fontSize: 28}} name={'home'} {...props}/>
                    },

                }
                }
            />
            <Tabs.Screen
                name={'category'}
                options={{
                    title: 'Каталог',
                    headerShown: false,
                    tabBarIcon(props) {
                        return <Icons style={{fontSize: 28}} name={'manage-search'} {...props}/>
                    }
                }
                }
            />
            <Tabs.Screen
                name={'cart'}
                options={{
                    title: 'Корзина',
                    headerTintColor: 'black',
                    headerShown: false,
                    tabBarBadge: 3,
                    tabBarIcon(props) {
                        return <MaterialCommunityIcons style={{fontSize: 28}} name="shopping-outline" {...props}/>
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
                        return <MaterialCommunityIcons style={{fontSize: 28}} name="cards-heart-outline" {...props}/>
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
                        return <FontAwesome6 style={{fontSize: 26}} name="user" {...props}/>
                    }
                }
                }
            />
        </Tabs>
    )
}
export default TabsLayout
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {useGetMe} from "@/components/user/query/user-query";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import {router} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useAppDispatch} from "@/store/hooks/hook";
import {accessToken} from "@/store/auth/authToken";

export const UserList = ({token}: { token: string }) => {
    const {data} = useGetMe(token)
    const dispatch = useAppDispatch()
    const onPressLogout = () => {
        AsyncStorage.removeItem('access')
        dispatch(accessToken({
            access: '',
            refresh: ''
        }))
        return router.replace('auth/sign-in')
    }
    return (
        <>
            {data !== undefined ? (
                    <View style={styles.con}>
                        <View style={styles.block1}>
                            <View>
                                <Image width={70} height={70} source={{
                                    uri: `data:image/png;base64,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`
                                }}/>
                            </View>
                            <View>
                                <Text>{data.data.user.last_name}</Text>
                                <Text>{data.data.user.first_name}</Text>
                                <Text>{data.data.user.phone}</Text>
                            </View>
                        </View>
                        <View style={styles.block2}>

                            <Pressable style={styles.pressable} onPress={() => router.push('user/order')}>
                                <View style={styles.presView}>
                                    <MaterialIcons name="add-shopping-cart" size={24} color="red"/>
                                    <Text>Заказы</Text>
                                </View>
                                <View>
                                    <MaterialIcons name="chevron-right" size={24} color="#989797FF"/>
                                </View>
                            </Pressable>
                            <Pressable style={styles.pressable}
                                       onPress={() => router.push(`user/${data.data.user.cashback_balance}`)}>
                                <View style={styles.presView}>
                                    <MaterialIcons name="settings-backup-restore" size={24} color="red"/>
                                    <Text>Мой кэшбэк</Text>
                                </View>
                                <View>
                                    <MaterialIcons name="chevron-right" size={24} color="#989797FF"/>
                                </View>
                            </Pressable>
                            <Pressable style={styles.pressable} onPress={() => router.push('user/settings-profile')}>
                                <View style={styles.presView}>
                                    <Ionicons name="settings-outline" size={24} color="red"/>
                                    <Text>Настройки профиля</Text>
                                </View>
                                <View>
                                    <MaterialIcons name="chevron-right" size={24} color="#989797FF"/>
                                </View>
                            </Pressable>
                            <Pressable style={styles.pressable}
                                       onPress={() => router.push(`user/changePassword/${data.data.user.phone}`)}>
                                <View style={styles.presView}>
                                    <MaterialIcons name="password" size={24} color="red"/>
                                    <Text>Смена пароля</Text>
                                </View>
                                <View>
                                    <MaterialIcons name="chevron-right" size={24} color="#989797FF"/>
                                </View>
                            </Pressable>
                            <Pressable style={styles.pressable} onPress={() => router.push('user/store-info')}>
                                <View style={styles.presView}>
                                    <MaterialIcons name="maps-home-work" size={24} color="red"/>
                                    <Text>Магазин</Text>
                                </View>
                                <View>
                                    <MaterialIcons name="chevron-right" size={24} color="#989797FF"/>
                                </View>
                            </Pressable>
                            <Pressable style={styles.pressable} onPress={onPressLogout}>
                                <View style={styles.presView}>
                                    <MaterialIcons name="logout" size={24} color="red"/>
                                    <Text>Выйти</Text>
                                </View>
                                <View>
                                    <MaterialIcons name="chevron-right" size={24} color="#989797FF"/>
                                </View>
                            </Pressable>
                        </View>
                    </View>
                ) :
                <View>
                    <Text>Loading...</Text>
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    con: {
        gap: 50,
        paddingLeft: '5%',
        paddingRight: '5%',
        marginTop: '15%'
    },
    block1: {
        flexDirection: 'row',
        gap: 15
    },
    block2: {
        gap: 20
    },
    pressable: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    presView: {
        flexDirection: 'row',
        gap: 10
    }
})
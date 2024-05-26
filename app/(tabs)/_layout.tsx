import { IconUnion } from '@/components/icons/IconUnion';
import { COLORS } from '@/constants/Colors';
import { Tabs } from 'expo-router';
import { SafeAreaView, View } from 'react-native';

export default function TabLayout() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingLeft: 8, paddingRight: 8 }}>
                <Tabs
                    screenOptions={{
                        headerShown: false,
                        tabBarStyle: {
                            height: 56,
                            backgroundColor: COLORS.light.white,
                            paddingBottom: 0,
                            borderRadius: 999,
                            marginLeft: 16,
                            marginRight: 16,
                        },
                        tabBarLabelStyle: {
                            marginBottom: -12,
                        },
                    }}
                >
                    <Tabs.Screen
                        name="index"
                        options={{
                            tabBarLabel: '',
                            tabBarIcon: ({ focused }) => (
                                <IconUnion
                                    style={{
                                        opacity: focused ? 1 : 0.65,
                                        color: focused ? COLORS.light.active : COLORS.light.textBold,
                                    }}
                                    name="home"
                                />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name="addNew"
                        options={{
                            tabBarLabel: '',
                            tabBarIcon: ({ focused }) => (
                                <IconUnion
                                    style={{
                                        opacity: focused ? 1 : 0.65,
                                        color: focused ? COLORS.light.active : COLORS.light.textBold,
                                    }}
                                    name="add"
                                />
                            ),
                        }}
                    />
                    <Tabs.Screen
                        name="profile"
                        options={{
                            tabBarLabel: '',
                            tabBarIcon: ({ focused }) => (
                                <IconUnion
                                    style={{
                                        opacity: focused ? 1 : 0.65,
                                        color: focused ? COLORS.light.active : COLORS.light.textBold,
                                    }}
                                    name="person"
                                />
                            ),
                        }}
                    />
                </Tabs>
            </View>
        </SafeAreaView>
    );
}

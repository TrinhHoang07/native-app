import { COLORS } from '@/constants/Colors';
import { ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={{ flex: 1 }}>
            <View
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
            >
                <Text style={{ fontSize: 24, color: COLORS.light.active, fontWeight: 'bold' }}>ht-07</Text>
                <View>
                    <Text>actions</Text>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                <Text>THIS IS POST</Text>
                <Text>THIS IS POST</Text>
                <Text>THIS IS POST</Text>
                <Text>THIS IS POST</Text>
                <Text>THIS IS POST</Text>
                <Text>THIS IS POST</Text>
                <Text>THIS IS POST</Text>
            </ScrollView>
        </View>
    );
}

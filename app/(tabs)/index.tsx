import Header from '@/components/header';
import { IconUnion } from '@/components/icons/IconUnion';
import { COLORS } from '@/constants/Colors';
import { ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={{ flex: 1 }}>
            <Header />
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

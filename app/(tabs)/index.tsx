import Header from '@/components/header';
import { IconUnion } from '@/components/icons/IconUnion';
import Post from '@/components/post';
import { COLORS } from '@/constants/Colors';
import { FlatList, ScrollView, Text, View } from 'react-native';

export default function HomeScreen() {
    const data = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <FlatList data={data} keyExtractor={(item) => `ht_${item}`} renderItem={() => <Post />} />
        </View>
    );
}

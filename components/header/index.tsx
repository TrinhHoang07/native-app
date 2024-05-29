import { Text, View } from 'react-native';
import { IconUnion } from '../icons/IconUnion';
import { COLORS } from '@/constants/Colors';

export default function Header() {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 8,
                paddingVertical: 8,
            }}
        >
            <Text style={{ fontSize: 24, color: COLORS.light.active, fontWeight: 'bold' }}>ht-07</Text>
            <View style={{ padding: 6, backgroundColor: COLORS.light.over, borderRadius: 999 }}>
                <IconUnion name="search" style={{ opacity: 0.65 }} size={22} />
            </View>
        </View>
    );
}

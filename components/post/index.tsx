import { COLORS } from '@/constants/Colors';
import { IMAGES } from '@/constants/Images';
import { Image, Text, View } from 'react-native';
import { IconUnion } from '../icons/IconUnion';

export default function Post() {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                paddingBottom: 12,
                marginBottom: 12,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.light.over,
            }}
        >
            <View style={{ flexShrink: 0, width: 48, height: 48, position: 'relative', display: 'flex' }}>
                <Image
                    style={{ width: '100%', height: '100%', borderRadius: 999 }}
                    source={IMAGES.avatar}
                    alt="avatar user post"
                    resizeMode="contain"
                />
                <View
                    style={{
                        position: 'absolute',
                        bottom: 4,
                        right: -2,
                        backgroundColor: COLORS.light.white,
                        padding: 2,
                        borderRadius: 999,
                    }}
                >
                    <View style={{ backgroundColor: COLORS.light.active, borderRadius: 999 }}>
                        <IconUnion name="add" size={12} style={{ color: COLORS.light.white }} />
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, paddingLeft: 8 }}>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold' }}>_hoangtrinh.07</Text>
                        <Text style={{ opacity: 0.75, color: COLORS.light.text, marginLeft: 8 }}>8 giờ</Text>
                    </View>
                    <View style={{ marginRight: 8 }}>
                        <IconUnion size={16} name="ellipsis-horizontal-sharp" />
                    </View>
                </View>
                <View>
                    <Text>CONTENTS</Text>
                </View>
                <View>
                    <Text>ACTIONS</Text>
                </View>
            </View>
        </View>
    );
}

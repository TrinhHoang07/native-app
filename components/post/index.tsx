import { COLORS } from '@/constants/Colors';
import { IMAGES } from '@/constants/Images';
import { Image, Text, View } from 'react-native';

export default function Post() {
    return (
        <View
            style={{
                display: 'flex',
                flexDirection: 'row',
                marginBottom: 16,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.light.over,
            }}
        >
            <View>
                <Image
                    style={{ width: 64, height: 64, borderRadius: 999 }}
                    source={IMAGES.avatar}
                    alt="avatar user post"
                    resizeMode="contain"
                />
            </View>
            <View>
                <View>
                    <Text>HEADER</Text>
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

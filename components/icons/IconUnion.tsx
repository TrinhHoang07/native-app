import Ionicons from '@expo/vector-icons/Ionicons';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';

export function IconUnion({ size = 26, style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
    return <Ionicons size={size} style={[style]} {...rest} />;
}

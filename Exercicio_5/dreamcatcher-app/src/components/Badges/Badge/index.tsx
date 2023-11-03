import { Text, View, ViewProps, TouchableOpacity, TouchableOpacityProps, StyleSheet, StyleProp, ViewStyle } from "react-native";

import { TagDataProps } from "../../../screens/Home";
import { styles } from "./styles";

type TouchableOrView<T extends {touchable: boolean} | undefined> = T extends {touchable: true} ? BadgeTouchableProps : BadgeViewProps;

interface BadgeTouchableProps extends TouchableOpacityProps {
    tag: TagDataProps
    touchable?: boolean
}
interface BadgeViewProps extends ViewProps {
    tag: TagDataProps
    touchable?: boolean
}

const flattenStyles = (style: StyleProp<any>) => {
   console.log(StyleSheet.flatten([styles.badge, style]));
}

export const Badge = <T extends {touchable: boolean} | undefined> ({tag, touchable, ...props}: TouchableOrView<T>) => {
   return touchable ? (
      <TouchableOpacity
         activeOpacity={0.8}
         style={styles.badge}
         {...props}>
         <Text style={{ color: "white", fontSize: 12 }}>{tag.name}</Text>
      </TouchableOpacity>
   ) : (
      <View
         style={styles.badge}
         {...props}>
         <Text style={{ color: "white", fontSize: 12 }}>{tag.name}</Text>
      </View>
   );
};
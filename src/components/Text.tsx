import { Text as RnText, TextProps as RnTextProps } from "react-native";

export function Text(props: RnTextProps) {
	return (
		<RnText className="font-mon" {...props}>
			{props.children}
		</RnText>
	);
}

// eslint-disable-next-line no-restricted-imports
import { Text as RnText, TextProps as RnTextProps } from 'react-native';

export default function Text(props: RnTextProps) {
  return (
    <RnText className="font-mon" {...props}>
      {props.children}
    </RnText>
  );
}

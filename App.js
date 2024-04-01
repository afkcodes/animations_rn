import { View } from 'react-native';
import PanGesture from './PanGesture';

export default function AnimatedStyleUpdateExample(props) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      {/* <Basics /> */}
      <PanGesture />
    </View>
  );
}

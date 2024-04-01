import { useEffect } from 'react';
import { View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

const handleRotation = (progress) => {
  'worklet';
  return `${progress.value * 2 * Math.PI}rad`;
};

export default function Basics(props) {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * 100) / 2,
      transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.8), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, []);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <Animated.View
        style={[{ height: 100, width: 100, backgroundColor: 'teal' }, animatedStyle]}
      />
    </View>
  );
}

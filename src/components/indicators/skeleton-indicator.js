import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { View, StyleSheet } from "react-native";

const SkeletonIndicator = ({ blocks, width, height }) => {
  const skeletonBlocks = Array.from({ length: blocks }, (v, i) => i + 1);
  return (
    <View style={styles.indicatorWrapper}>
      {skeletonBlocks.map((val) => (
        <SkeletonPlaceholder borderRadius={4} key={val}>
          <SkeletonPlaceholder.Item flexDirection="column" alignItems="center">
            <SkeletonPlaceholder.Item
              width={width}
              height={height}
              borderRadius={10}
            />
            <SkeletonPlaceholder.Item>
              <SkeletonPlaceholder.Item
                width={width}
                height={10}
                marginTop={6}
              />
              <SkeletonPlaceholder.Item
                marginTop={6}
                width={width - width / 4}
                height={10}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  indicatorWrapper: {
    margin: 10,
    flex: 1,
    alignItems: "start",
    justifyContent: "space-between",
    alignContent: "space-around",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default SkeletonIndicator;

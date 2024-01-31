import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { View, StyleSheet } from "react-native";

const skeletonBlocks = Array.from({ length: 6 }, (v, i) => i + 1);

const SkeletonIndicator = () => (
  <View style={styles.indicatorWrapper}>
    {skeletonBlocks.map((val) => (
      <SkeletonPlaceholder borderRadius={4} key={val}>
        <SkeletonPlaceholder.Item flexDirection="column" alignItems="center">
          <SkeletonPlaceholder.Item
            width={180}
            height={180}
            borderRadius={10}
          />
          <SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item width={180} height={10} marginTop={6} />
            <SkeletonPlaceholder.Item marginTop={6} width={140} height={10} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    ))}
  </View>
);

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

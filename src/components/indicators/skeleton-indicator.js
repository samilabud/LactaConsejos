import SkeletonPlaceholder from "expo-react-native-skeleton-placeholder";
import { View, StyleSheet } from "react-native";

const SkeletonIndicator = ({
  blocks,
  width,
  height,
  vAlign = "space-between",
  lines = 1,
}) => {
  const skeletonBlocks = Array.from({ length: blocks }, (v, i) => i + 1);
  const skeletonLines = Array.from({ length: lines }, (v, i) => i + 1);
  const styles = StyleSheet.create({
    indicatorWrapper: {
      margin: 10,
      flex: 1,
      alignItems: "start",
      justifyContent: vAlign,
      alignContent: "space-around",
      flexDirection: "row",
      flexWrap: "wrap",
    },
  });
  return (
    <View style={styles.indicatorWrapper}>
      {skeletonBlocks.map((val) => (
        <SkeletonPlaceholder borderRadius={4} key={`skeleton-${val}`}>
          <SkeletonPlaceholder.Item flexDirection="column" alignItems="center">
            <SkeletonPlaceholder.Item
              width={width}
              height={height}
              borderRadius={10}
            />
            <SkeletonPlaceholder.Item>
              {skeletonLines.map((val) => (
                <SkeletonPlaceholder.Item
                  width={width}
                  height={10}
                  marginTop={6}
                  key={`skeleton-item-${val}`}
                />
              ))}
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

export default SkeletonIndicator;

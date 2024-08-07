import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import React from "react";

interface ImageCProps {
  title: string;
  src: ImageSourcePropType | undefined;
}
const ImageC = ({ title, src }: ImageCProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image
        style={{
          objectFit: "cover",
          width: "100%",
          aspectRatio: 1,
          height: "100%",
        }}
        source={src}
      />
    </View>
  );
};

export default ImageC;
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 300,
    width: 200,
    overflow: "hidden",
    backgroundColor: "red",
    justifyContent: "flex-end",
    alignItems: "center",
    borderRadius: 5,
  },
  title: {
    position: "absolute",
    zIndex: 1,
    paddingHorizontal: 20,
    borderRadius: 2,
    fontSize: 25,
    color: "black",
    fontWeight: "400",
    backgroundColor: "rgba(222,222,222,0.4)",
  },
});

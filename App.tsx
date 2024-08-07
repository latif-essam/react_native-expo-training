import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageC from "./components/ImageC";

export default function App() {
  const images = [
    require(`./assets/gallery/1.jpg`),
    require(`./assets/gallery/2.jpg`),
    require(`./assets/gallery/3.jpg`),
    require(`./assets/gallery/4.png`),
    require(`./assets/gallery/5.jpg`),
    require(`./assets/gallery/6.jpg`),
    require(`./assets/gallery/7.jpg`),
    require(`./assets/gallery/1.jpg`),
    require(`./assets/gallery/2.jpg`),
    require(`./assets/gallery/3.jpg`),
    require(`./assets/gallery/4.png`),
    require(`./assets/gallery/5.jpg`),
    require(`./assets/gallery/6.jpg`),
    require(`./assets/gallery/7.jpg`),
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView horizontal>
        <View style={styles.container}>
          {images.map((image, index) => (
            <ImageC src={image} key={index} title={image} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(22,22,22,0.2)",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    gap: 20,
  },
});

import { Pressable, View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import * as data from "@/assets/data/words.json";

export default function WordLength() {
  const route = useRoute();
  const theme = route.params.theme;
  const themeName = route.params.themeName;
  const nav = useNavigation();

  return (
    <View style={{ marginTop: 30 }}>
      <Text style={{ textAlign: "center", fontSize: 35, marginBottom: 20 }}>
        Theme is: {themeName}
      </Text>
      <Pressable
        style={styles.link}
        onPress={() => {
          var wordId = Math.floor(Math.random() * data[theme + "4"].length);
          console.log("Word is: " + data[theme + "4"][wordId]);
          nav.navigate("wordle", {
            word: data[theme + "4"][wordId].toUpperCase(),
            guesses: 6,
            theme: themeName,
          });
        }}
      >
        <Text style={styles.linkText}>4 Letter Word</Text>
      </Pressable>
      <Pressable
        style={styles.link}
        onPress={() => {
          var wordId = Math.floor(Math.random() * data[theme + "5"].length);
          console.log("Word is: " + data[theme + "5"][wordId]);
          nav.navigate("wordle", {
            word: data[theme + "5"][wordId].toUpperCase(),
            guesses: 6,
            theme: themeName,
          });
        }}
      >
        <Text style={styles.linkText}>5 Letter Word</Text>
      </Pressable>
      <Pressable
        style={styles.link}
        onPress={() => {
          var wordId = Math.floor(Math.random() * data[theme + "6"].length);
          console.log("Word is: " + data[theme + "6"][wordId]);
          nav.navigate("wordle", {
            word: data[theme + "6"][wordId].toUpperCase(),
            guesses: 6,
            theme: themeName,
          });
        }}
      >
        <Text style={styles.linkText}>6 Letter Word</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  link: {
    color: "black",
    padding: 5,
    borderStyle: "solid",
    borderColor: "black",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 40,
    marginVertical: 5,
  },
  linkText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
});

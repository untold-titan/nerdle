import { Text, View, StyleSheet, Pressable } from "react-native";
import { Stack, useNavigation } from "expo-router";
import { Header } from "@/components/header";
import * as data from "@/assets/data/words.json";

export default function Index() {
  const nav = useNavigation();

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: (props) => <Header data={props} />,
        }}
      />
      <View
        style={[
          styles.container,
          {
            flexDirection: "column",
          },
          {
            backgroundColor: "#F7F4F3",
          },
        ]}
      >
        {/* body */}
        <View style={{ flex: 4, backgroundColor: "#F7F4F3", marginTop: 20 }}>
          <Pressable
            style={styles.wotd}
            title="Word of the Day"
            onPress={() => {
              var themeId = (Math.floor(Math.random() * (data.themes.length - 0 + 1) + 0))
              var wordLength = Math.floor(Math.random() * (6 - 4 + 1) + 4)
              if(themeId >= data.themes.length){
                themeId = data.themes.length - 1;
              }
              var wordId = Math.floor(Math.random() * (data[data.themes[themeId].Value + wordLength].length))
              console.log("Word is: " + data[data.themes[themeId].Value + wordLength][wordId].toUpperCase());
              // Pick random word from the list of words :)
              nav.navigate("wordle", {
                word: data[data.themes[themeId].Value + wordLength][wordId].toUpperCase(),
                guesses: 6,
                theme: data.themes[themeId].Name,
              });
            }}
          >
            <Text
              style={{ fontSize: 40, textAlign: "center", fontWeight: "bold" }}
            >
              Word of the Day
            </Text>
          </Pressable>
          {/* TODO: Replace with pressable */}
          {/* <Link href="/statistics" style={styles.link}>
            Statistics
          </Link> */}
          <Text
            style={{ fontSize: 25, textAlign: "center", marginVertical: 30 }}
          >
            Themes:
          </Text>
          {data.themes.map((theme) => {
            return (
              <Pressable
                key={theme.Value}
                style={styles.link}
                onPress={() => {
                  nav.navigate("word-length", {
                    theme: theme.Value,
                    themeName: theme.Name
                  });
                }}
              >
                <Text style={styles.linkText}>{theme.Name}</Text>
              </Pressable>
            );
          })}
        </View>
        <View style={{ flex: 0.5, backgroundColor: "#F7F4F3" }} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wotd: {
    fontSize: 40,
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 20,
    textAlign: "center",
    marginHorizontal: 30,
  },
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
  linkText:{
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
    
  }
});

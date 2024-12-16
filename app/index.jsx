import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { Link, Stack, useNavigation } from "expo-router";
import { Header } from "@/components/header";

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
              backgroundColor: "#F7F4F3"
            }
          ]}
        >
          {/* body */}
          <View style={{ flex: 4, backgroundColor: "#F7F4F3", marginTop: 20 }}>
            <Pressable style={styles.wotd} title="Word of the Day" onPress={() => {
              // Pick random word from the list of words :)
              nav.navigate("wordle",{
                word:"CHIE",
                guesses: 6,
                theme: "Persona 4"
              })}}><Text style={{fontSize: 40, textAlign: "center", fontWeight:"bold"}}>Word of the Day</Text></Pressable>
            <Link href="/statistics" style={styles.link}>
              Statistics
            </Link>
            <Text style={{fontSize: 25, textAlign: "center", marginVertical: 30}}>Themes:</Text>
            <Link href="/word-length" style={styles.link}>
              Cyberpunk 2077
            </Link>
            <Link href="/word-length" style={styles.link}>
              Naruto
            </Link>
            <Link href="/word-length" style={styles.link}>
              One Piece
            </Link>
            <Link href="/word-length" style={styles.link}>
              Persona
            </Link>
            <Link href="/word-length" style={styles.link}>
              Hunter x Hunter
            </Link>
            <Link href="/word-length" style={styles.link}>
              Pokemon
            </Link>
            {/* <Link href="/wordle" style={styles.link}>
              Wordle Testing
            </Link> */}
            {/* <Button title="Test New Word" onPress={() => {
              nav.navigate("wordle",{
                word:"CHIE",
                guesses: 6,
                theme: "Persona 4"
              })
            }}/> */}
          </View>
          {/* footer */}
          <View style={{ flex: 0.5, backgroundColor: "#F7F4F3" }} />
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wotd:{
    fontSize: 40,
    padding: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 20,
    textAlign: "center",
    marginHorizontal: 30
  },
  link: {
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
    padding: 5,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    textAlign: "center",
    marginHorizontal: 40,
    marginVertical: 5
  },
});

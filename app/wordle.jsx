import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { TextInput } from "react-native";
import { Text, View } from "react-native";
import { Stack } from "expo-router";
import { Header } from "@/components/header";

export default function Test({}) {
  const route = useRoute();
  const textRef = useRef(null);
  const theme = route.params.theme ?? "Persona 3";
  const word = route.params.word ?? "MAKOTO";
  const wordLength = word.length ?? 6;
  const guesses = route.params.guesses ?? 6;
  const [currentGuess, setGuess] = useState(0);
  const [data, setData] = useState([]);

  // Page Startup
  useEffect(() => {
    var newData = [];
    for (let i = 0; i < guesses; i++) {
      emptyStr = "";
      for (let i = 0; i < wordLength; i++) {
        emptyStr += " ";
      }
      newData.push({ guess: emptyStr, colors: [] });
    }

    setData(newData);
  }, []);

  const onWordleBoxTap = () => {
    textRef.current.focus();
  };

  const handleWordleBoxInput = (value) => {
    let guessData = value;
    if (guesses <= currentGuess) {
      return;
    }
    if (guessData.length > wordLength) {
      guessData = guessData.slice(0, wordLength - guessData.length);
    }
    guessData = guessData.toUpperCase();
    for (var i = guessData.length; i < wordLength; i++) {
      guessData += " ";
    }
    var newData = JSON.parse(JSON.stringify(data));
    newData[currentGuess] = { guess: guessData, colors: [] };
    setData(() => newData);
  };

  const submitAnswer = () => {
    if (guesses <= currentGuess) {
      return;
    }
    if (data[currentGuess].guess.trim().length < wordLength) {
      return;
    }

    // Set colors of text boxes
    const guess = data[currentGuess].guess;
    var colors = [];
    for (var i = 0; i <= word.length; i++) {
      if (guess.charAt(i) == word.charAt(i)) {
        colors.push("#33cc33");
      } else if (word.includes(guess.charAt(i))) {
        colors.push("#ffff66");
      } else {
        colors.push("#FF0000");
      }
    }

    // Save new data;
    var newData = JSON.parse(JSON.stringify(data));
    newData[currentGuess] = { guess: guess, colors: colors };
    setData(() => newData);

    setGuess(currentGuess + 1);
    textRef.current.clear();
  };

  let keyNum = 0;
  return (
    <>
      <Stack.Screen
        options={{ headerTitle: (props) => <Header data={props} /> }}
      />
      <View style= {{backgroundColor: "F7F4F3"}}>
        <View style={{ marginTop: 25, marginBottom: 10 }}>
          <Text style={{ fontSize: 24, textAlign: "center" }}>
            The theme is: {theme}
          </Text>
        </View>
        <View style={{ width: 0, height: 0 }}>
          <TextInput
            ref={textRef}
            maxLength={wordLength}
            value={guesses[currentGuess]}
            onSubmitEditing={() => submitAnswer()}
            onChangeText={(val) => handleWordleBoxInput(val)}
          ></TextInput>
        </View>
        <View style={{ marginHorizontal: "auto", marginTop: 5 }}>
          {data.map((row) => {
            keyNum++;
            return (
              <View
                key={keyNum}
                onTouchEnd={onWordleBoxTap}
                style={{ flexDirection: "row" }}
              >
                {row.guess.split("").map((c, guessIndex) => {
                  keyNum++;
                  return (
                    <View
                      key={keyNum}
                      style={{
                        width: "55",
                        aspectRatio: 1,
                        alignContent: "center",
                        backgroundColor: row.colors[guessIndex] ?? "white",
                        borderRadius: 15,
                        borderColor: "#F37F68",
                        borderStyle: "solid",
                        borderWidth: 1,
                        margin: 2,
                      }}
                    >
                      <Text style={{ fontSize: 40, marginLeft: 16 }}>{c}</Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
      </View>
    </>
  );
}

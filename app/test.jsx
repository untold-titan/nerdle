import { useEffect, useState } from "react";
import { useRef } from "react";
import { TextInput } from "react-native";
import { Text, View } from "react-native";

export default function Test() {
  const textRef = useRef(null);

  const wordLength = 6;
  const guesses = 6;
  const [currentGuess, setGuess] = useState(0);
  const [data, setData] = useState([]);

  // Page Startup
  useEffect(() => {
    newData = [];
    for (let i = 0; i < guesses; i++) {
      emptyStr = "";
      for (let i = 0; i < wordLength; i++) {
        emptyStr += " ";
      }
      newData.push(emptyStr);
    }

    console.log(newData);
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
    for (var i = guessData.length; i < wordLength; i++) {
      guessData += " ";
    }
    var newData = JSON.parse(JSON.stringify(data));
    newData[currentGuess] = guessData;
    setData(() => newData);
    console.log(data);
  };

  const submitAnswer = () => {
    if (guesses <= currentGuess) {
      return;
    }
    if (data[currentGuess].trim().length < wordLength) {
      return;
    }
    setGuess(currentGuess + 1);
    textRef.current.clear();
  };

  let keyNum = 0;
  return (
    <View>
      <View style={{ width: 0, height: 0 }}>
        <TextInput
          ref={textRef}
          maxLength={wordLength}
          value={guesses[currentGuess]}
          onSubmitEditing={() => submitAnswer()}
          onChangeText={(val) => handleWordleBoxInput(val)}
        ></TextInput>
      </View>
      <View style={{marginHorizontal:"auto", marginTop:5}}>
        {data.map((guess) => {
          keyNum++;
          return (
            <View
              key={keyNum}
              onTouchEnd={onWordleBoxTap}
              style={{ flexDirection: "row" }}
            >
              {guess.split("").map((c) => {
                keyNum++;
                return (
                  <View
                    key={keyNum}
                    style={{
                      width: "15%",
                      aspectRatio: 1,
                      alignContent: "center",
                      backgroundColor: "blue",
                      borderRadius: 15,
                      margin: 2,
                    }}
                  >
                    <Text style={{ fontSize: 40, marginLeft: 17 }}>{c}</Text>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
}

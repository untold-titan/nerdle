import { Text, View, StyleSheet, Button } from "react-native";
import { Link, Stack } from "expo-router";

export default function Index() {
  return (
    <>
      {/* <Stack.Screen options={{ header: () => null }} /> */}
      <View style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
        {/* header */}
        <View style={{ flex: 0.5, backgroundColor: '#F7F4F3' }} />

        {/* body */}
        <View style={{ flex: 4, backgroundColor: '#F7F4F3' }}>

          <Link href="/word_of_day" style={styles.link}>Word of the Day</Link>

          <Link href="/statistics" style={styles.link}>Statistics</Link>
          <Link href="/test" style={styles.link}>Wordle Testing</Link>

        </View>

        {/* footer */}
        <View style={{ flex: .5, backgroundColor: '#F7F4F3' }} />
          
        </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  link: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  }
});
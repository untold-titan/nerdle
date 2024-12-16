import { Text, View, StyleSheet, Button, Image } from "react-native";
import { Link, Stack } from "expo-router";

export default function WordOfTheDay() {
    return (
    <>  
        <View style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>

            {/* body */}
            <View style={{ flex: 4, backgroundColor: '#F7F4F3' }}>

                <Link href="/word_of_day" style={styles.link}>4 Letter Word</Link>

                <Link href="/statistics" style={styles.link}>5 Letter Word</Link>

                <Link href="/statistics" style={styles.link}>6 Letter Word</Link>

            </View>

            {/* footer */}
            <View style={{ flex: .5, backgroundColor: '#F7F4F3' }}>

            </View>

        </View>
    </>
    )
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
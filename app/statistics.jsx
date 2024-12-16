import { Text, View, StyleSheet, Button, Image } from "react-native";
import { Link, Stack } from "expo-router";

export default function Statistics() {
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
  });
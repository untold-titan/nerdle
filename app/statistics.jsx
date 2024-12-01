import { Text, View, StyleSheet, Button, Image } from "react-native";
import { Link, Stack } from "expo-router";

export default function Statistics() {
    return (
    <>  
    <Stack.Screen options={{ header: () => null }} />
        <View style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
            {/* header */}
            <View style={{ flex: 0.5, backgroundColor: '#F7F4F3' }}> 
                <Link href="/" style={{height: 50, width: 50}}>
                    <Image source={require('../assets/images/left-arrow.png')} />
                </Link>

            </View>

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
import { View,Image } from "react-native"


export function Header(){

    return(
        <View style={{marginHorizontal:"auto",}}>
            {/* <Text>{data.children}</Text> */}
            <Image style={{ width:190, height:50}} source={require("../assets/images/nerdle.png")}/>
        </View>
    )
}
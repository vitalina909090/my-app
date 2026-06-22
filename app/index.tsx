import { globalStyles } from "@/global/gloabalStyle";
import { Link } from "expo-router";
import { Text, View, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={require("../assets/images/react-logo.png")}/>
        <Text style={[globalStyles.title, globalStyles.bold, {marginBottom: 5}]}>My App</Text>
        <Text>My first <Text style={globalStyles.bold}>Expo app</Text></Text>
    
        <View style={styles.gap}></View>
        <Link href="/city" style={globalStyles.link}>Go to city</Link>

        <View style={styles.gap}></View>
        <Link href="/components" style={globalStyles.link}>Go to components</Link>
    
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gap:{
    height: 20
  }
});

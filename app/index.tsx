import { colors, globalStyles } from "@/global/gloabalStyle";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <View style={styles.avatarCircle}>
        <Image
          style={styles.avatar}
          source={require("@/assets/images/my_avatar.png")}
        />
      </View>

      <MaskedView
        maskElement={
          <Text style={globalStyles.title}>
            This app is about me :)
          </Text>
        }
      >
        <LinearGradient
          colors={[colors.plum, colors.rose]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={[globalStyles.title, { opacity: 0 }]}>
            This app is about me :)
          </Text>
        </LinearGradient>
      </MaskedView>

      <Text style={styles.subtitle}>
        A small app that will tell you about me, my city, and my hobbies
      </Text>

    <Pressable
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: pressed ? colors.mauve : colors.dustyRose,
          transform: [{ scale: pressed ? 0.95 : 1 }],
        },
      ]}
      onPress={() => router.replace('(tabs)' as any)}
    >
      <Text style={styles.buttonText}>Let's Go</Text>
    </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  avatarCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: colors.cream,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
    shadowColor: colors.rose,
    elevation: 25,
  },
  avatar: {
    width: 130,
    height: 130,
  },

  subtitle: {
    textAlign: "center",
    marginTop: 8,
    color: colors.muted,
  },

  button: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 35,
    marginTop: 35,
  },
  buttonText: {
    color: colors.plum,
    fontWeight: "800",
    textTransform: "uppercase",
  }

});
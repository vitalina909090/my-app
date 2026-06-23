import { landmarks } from "@/data/data";
import { colors, globalStyles } from "@/global/gloabalStyle";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CityScreen = () => {
  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sectionLabel}>
          <MaterialCommunityIcons
            name="home-city-outline"
            size={16}
            color={colors.rose}
          />
          <Text style={globalStyles.labelText}>My city</Text>
        </View>

        <Text style={globalStyles.title}>Zaporizhzhia</Text>
        <Text style={styles.subtitle}>
          A city of rivers, history, and resilient spirit - on the banks of the
          mighty Dnipro.
        </Text>

        <View style={styles.sectionLabel}>
          <MaterialCommunityIcons
            name="map-marker-multiple-outline"
            size={16}
            color={colors.rose}
          />
          <Text style={globalStyles.labelText}>Landmarks</Text>
        </View>

        {landmarks.map((item, index) => (
          <View
            key={index}
            style={[globalStyles.cardAccented, styles.landmarkCard, { marginBottom: 12 }]}
          >
            <View style={[globalStyles.iconBox, { width: 40, height: 40 }]}>
              <MaterialCommunityIcons
                name={item.icon as any}
                size={20}
                color={colors.mauve}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={globalStyles.smallTitle}>{item.name}</Text>
              <Text style={styles.landmarkDescription}>{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },

  sectionLabel: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 14,
  },

  subtitle: {
    marginTop: 12,
    marginBottom: 30,
    color: colors.muted,
  },

  landmarkCard: {
    flexDirection: "row",
    gap: 14,
  },

  landmarkDescription: {
    marginTop: 3,
    color: colors.muted,
  },
});

export default CityScreen;
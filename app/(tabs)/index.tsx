import Separator from "@/components/ui/Separator";
import { hobbies, skills } from "@/data/data";
import { colors, globalStyles } from "@/global/gloabalStyle";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AboutScreen = () => {
  return (
    <SafeAreaView style={[globalStyles.container, styles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.avatarCircle}>
            <Image
              source={require("@/assets/images/my_avatar.png")}
              style={styles.avatar}
            />
          </View>

          <Text style={globalStyles.title}>Vitalina</Text>
          <Text style={[globalStyles.labelText, styles.tagline]}>
            Developer - Artist - Bookworm
          </Text>
        </View>

        <View style={styles.sectionLabel}>
          <MaterialCommunityIcons
            name="account-heart-outline"
            size={16}
            color={colors.rose}
          />
          <Text style={globalStyles.labelText}>About Me</Text>
        </View>
        <View style={globalStyles.cardAccented}>
          <Text style={{color: colors.plum}}>
            Hi! I'm Vitalina - a creative person who loves both making things
            with code and making things with hands. My days are split between
            sketching characters, reading fantasy novels, and knitting something
            cozy.{"\n\n"}I started learning React Native because I wanted to
            turn my ideas into real apps that people can hold in their hands.
            There's something magical about building a screen that someone
            actually taps.
          </Text>
        </View>

        <Separator />

        <View style={styles.sectionLabel}>
          <MaterialCommunityIcons name="star-four-points-outline" size={16} color={colors.rose} />
          <Text style={globalStyles.labelText}>Hobbies & Interests</Text>
        </View>

        <View style={styles.chipGrid}>
          {hobbies.map((item, index) => (
            <View key={index} style={styles.chip}>
              <MaterialCommunityIcons name={item.icon as any} size={17} color={colors.mauve} />
              <Text style={styles.chipLabel}>{item.labelText}</Text>
            </View>
          ))}
        </View>

        <Separator />

        <View style={styles.sectionLabel}>
          <MaterialCommunityIcons name="lightning-bolt-outline" size={16} color={colors.rose} />
          <Text style={globalStyles.labelText}>Skills</Text>
        </View>

        {skills.map((item, index) => (
          <View key={index} style={styles.skillRow}>
            <View style={globalStyles.iconBox}>
              <MaterialCommunityIcons name={item.icon as any} size={20} color={colors.mauve} />
            </View>
            <Text style={globalStyles.smallTitle}>
              {item.labelText}
            </Text>
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

  header: {
    alignItems: "center",
    justifyContent: "center",
  },

  avatarCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: colors.rose,
    padding: 4,
  },
  avatar: {
    width: 100,
    height: 100,
  },

  tagline: {
    marginTop: 4,
    marginBottom: 24,
    opacity: 0.7,
  },

  sectionLabel: {
    flexDirection: "row",
    gap: 5,
    marginBottom: 14,
  },

  chipGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 8,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    backgroundColor: colors.blush,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.petal,
  },
  chipLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.plum,
  },

  skillRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    paddingVertical: 10,
    marginBottom: 10,
  },
});

export default AboutScreen;
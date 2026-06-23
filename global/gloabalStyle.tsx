import { StyleSheet } from "react-native";

export const colors = {
  cream: "#fdf6f5",
  blush: "#f9edec",
  dustyRose: "#f2d3d0",
  rose: "#e87a96",
  mauve: "#dca9b5",
  plum: "#5a3532",
  muted: "#8c6d6a",
  petal: "#e8c4c0",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.plum,
  },

  smallTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: colors.plum,
  },

  labelText: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.rose,
    letterSpacing: 2.5,
    textTransform: "uppercase",
  },

  cardAccented: {
    backgroundColor: colors.blush,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: colors.rose,
    shadowColor: colors.plum,
    elevation: 6,
  },

  iconBox: {
    borderRadius: 11,
    backgroundColor: colors.dustyRose,
    alignItems: "center",
    justifyContent: "center",
  },
});
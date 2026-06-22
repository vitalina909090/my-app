import React from "react";
import type { PressableProps } from "react-native";
import { Pressable, StyleSheet, Text } from "react-native";
 
type Variant = "primary" | "secondary";
type Size = "sm" | "md" | "lg";
 
interface ButtonProps extends PressableProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
}
 
const Button = ({
        children,
        variant = "primary",
        size="md",
        disabled,
        ...props 
    }: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
            styles.base,
            styles[variant],
            styles[size],
            pressed && styles.pressed,
            disabled && styles.disabled
        ]}
        disabled={disabled}
        {...props}
    >
        <Text style={[
            styles.text,
            styles[`text_${variant}`],
            styles[`text_${size}`],
        ]}>{children}</Text>
    </Pressable>
  );
};
 
const styles = StyleSheet.create({
  base: {
    borderRadius: 10,
  },
  /* variant styles */
  primary: {
    backgroundColor: "dodgerblue",
  },
  secondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "dodgerblue",
  },
  /* sizes */
  sm: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  md: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  lg: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
 
  /* states */
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  disabled: {
    opacity: 0.4,
  },
 
  /* text styles */
 
  text: {
    textAlign: "center",
    fontWeight: "bold",
  },
  text_primary: {
    color: "white",
  },
  text_secondary: {
    color: "dodgerblue",
  },
  text_sm: {
    fontSize: 13,
  },
  text_md: {
    fontSize: 15,
  },
  text_lg: {
    fontSize: 17,
  },
});
 
export default Button;
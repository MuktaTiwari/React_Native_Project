import { useTheme } from "@/contexts/ThemeContext";
import { DarkTheme, LightTheme } from "@/theme/colors";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();
  const colors = theme === "dark" ? DarkTheme : LightTheme;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>
        Current Theme: {theme}
      </Text>

      {/* Custom Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.text }]}
        onPress={toggleTheme}
      >
        <Text style={[styles.buttonText, { color: colors.background }]}>
          Toggle Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
});

import { useTheme } from "@/contexts/ThemeContext";
import { DarkTheme, LightTheme } from "@/theme/colors";
import React from "react";
import { Text, View } from "react-native";

export default function Profile() {
  const { theme } = useTheme();
  const colors = theme === "dark" ? DarkTheme : LightTheme;

  return (
    <View style={{ flex: 1, backgroundColor: colors.background, padding: 20 }}>
      <Text style={{ color: colors.text, fontSize: 20 }}>
        Profile Settings
      </Text>
    </View>
  );
}

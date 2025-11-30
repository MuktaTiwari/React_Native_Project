import { useTheme } from "@/contexts/ThemeContext";
import { DarkTheme, LightTheme } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const { theme } = useTheme();
  const colors = theme === "dark" ? DarkTheme : LightTheme;

  const router = useRouter();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.title, { color: colors.text }]}>Welcome Back</Text>
        <Ionicons name="notifications-outline" size={26} color={colors.text} />
      </View>

      {/* Banner */}
      <View style={[styles.banner, { backgroundColor: colors.card }]}>
        <Text style={[styles.bannerText, { color: colors.text }]}>Your Dashboard</Text>
        <Image 
          source={{ uri: "https://picsum.photos/300" }}
          style={styles.bannerImage}
        />
      </View>

      {/* Quick Actions */}
      <Text style={[styles.sectionTitle, { color: colors.text }]}>Quick Actions</Text>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.card, { backgroundColor: colors.card }]}
        onPress={()=>router.push("/(drawer)/home/product")}
        
        >
          <Ionicons name="person" size={30} color={colors.text} />
          <Text style={[styles.cardText, { color: colors.text }]}>Products</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: colors.card }]}>
          <Ionicons name="cart" size={30} color={colors.text} />
          <Text style={[styles.cardText, { color: colors.text }]}>Orders</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.card, { backgroundColor: colors.card }]}>
          <Ionicons name="settings" size={30} color={colors.text} />
          <Text style={[styles.cardText, { color: colors.text }]}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: colors.card }]}>
          <Ionicons name="chatbubble-ellipses" size={30} color={colors.text} />
          <Text style={[styles.cardText, { color: colors.text }]}>Support</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
  },

  banner: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
  },

  bannerText: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 15,
  },

  bannerImage: {
    width: "100%",
    height: 140,
    borderRadius: 12,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  card: {
    paddingVertical: 24,
    width: "47%",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  cardText: {
    fontSize: 16,
    marginTop: 10,
  },
});

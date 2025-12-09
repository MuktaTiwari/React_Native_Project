import { useTheme } from "@/contexts/ThemeContext";
import { DarkTheme, LightTheme } from "@/theme/colors";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// 👉 Define product type for TypeScript
type ProductType = {
  id: number;
  name: string;
  price: number;
  image_url: string;
  description: string;
};
const API_URL =
  Platform.OS === "android"
    ? "http://10.237.235.128:5000/api/products" // Android emulator
    : "http://localhost:5000/api/products"; // iOS simulator / web
// If using a physical device, replace localhost with your PC LAN IP, e.g., "http://192.168.1.10:5000/api/products"

export default function Product() {
  const { theme } = useTheme();
  const colors = theme === "dark" ? DarkTheme : LightTheme;

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(API_URL);
        

        setProducts(res.data);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <Image
              source={{ uri: item.image_url }}
              style={styles.productImage}
            />

            <Text style={[styles.title, { color: colors.text }]}>
              {item.name}
            </Text>

            <Text style={[styles.price, { color: colors.text }]}>
              ₹{item.price}
            </Text>

            <Text style={[styles.description, { color: colors.lightText }]}>
              {item.description}
            </Text>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: colors.primary }]}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

// 👉 IMPROVED PREMIUM STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  card: {
    width: "100%",
    borderRadius: 20,
    padding: 18,
    marginBottom: 24,

    // Better Shadow
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,

    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.05)",
  },

  productImage: {
    width: "100%",
    height: 230,
    borderRadius: 16,
    marginBottom: 16,
    resizeMode: "cover",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 6,
    letterSpacing: 0.3,
  },

  price: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },

  description: {
    fontSize: 15,
    lineHeight: 22,
    opacity: 0.7,
    marginBottom: 18,
  },

  button: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 2,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    letterSpacing: 0.5,
  },
});

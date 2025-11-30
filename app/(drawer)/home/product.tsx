import { useTheme } from "@/contexts/ThemeContext";
import { DarkTheme, LightTheme } from "@/theme/colors";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
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
  image: string;
  description: string;
};

export default function Product() {
  const { theme } = useTheme();
  const colors = theme === "dark" ? DarkTheme : LightTheme;

  // 👉 Provide array type for products
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("http://10.237.235.128:4000/products");
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
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: colors.card }]}>
            <Image source={{ uri: item.image }} style={styles.productImage} />

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
              style={[styles.button, { backgroundColor: colors.primary }]} // fallback color
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

// 👉 Add your styles back
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    width: "100%",
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  productImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 14,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});

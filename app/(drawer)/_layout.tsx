import { useTheme } from "@/contexts/ThemeContext";
import { DarkTheme, LightTheme } from "@/theme/colors";
import { Drawer } from "expo-router/drawer";
export default function DrawerLayout() {
  const { theme } = useTheme();
  const colors = theme === "dark" ? DarkTheme : LightTheme;
  return (
    <Drawer
      screenOptions={{
        drawerStyle: { backgroundColor: colors.background },
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        drawerActiveTintColor: colors.text,
        drawerInactiveTintColor: colors.lightText,
      }}
    >
      {" "}
      <Drawer.Screen name="home" options={{ title: "Home" }} />{" "}
      <Drawer.Screen name="orders" options={{ title: "Orders" }} />{" "}
      <Drawer.Screen name="profile" options={{ title: "Profile" }} />{" "}
    </Drawer>
  );
}

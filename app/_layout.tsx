import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="dashboard" />
        <Stack.Screen name="attendance/index" />

        <Stack.Screen name="dpr/step1" />
        <Stack.Screen name="dpr/step2" />
        <Stack.Screen name="dpr/step3" />
        <Stack.Screen name="dpr/success" />

        <Stack.Screen name="material/index" />
        <Stack.Screen name="material/new" />

        <Stack.Screen name="invoicing/index" />
      </Stack>
      <StatusBar hidden={false} />
    </>
  );
}

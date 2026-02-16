import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
  return (
    <SafeAreaView>
      <View>
        <Text>Sign In</Text>
        <Button
          title="Sign Up"
          onPress={() => {
            router.push("/(auth)/sign-up");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

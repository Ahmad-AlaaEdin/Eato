import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  return (
    <SafeAreaView>
      <View>
        <Text>Sign Up</Text>
        <Button
          title="Sign In"
          onPress={() => {
            router.push("/(auth)/sign-in");
          }}
        />
      </View>
    </SafeAreaView>
  );
}

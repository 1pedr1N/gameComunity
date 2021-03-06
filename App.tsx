import { StatusBar } from "expo-status-bar";
import Login from "./src/screens/Login";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import {
  Rajdhani_700Bold,
  Rajdhani_500Medium,
} from "@expo-google-fonts/rajdhani";
import { Background } from "./src/components/linearBackground";
import { Home } from "./src/screens/Home";
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Background>
      {/*<StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      /> */}
      <Home />
    </Background>
  );
}

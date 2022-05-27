import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import DiscordIMG from "../../assets/discord.png";
import { styles } from "./styles";

export function Button() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordIMG} style={styles.iconIMG} />
      </View>
      <Text style={styles.title}>Entrar com Discord</Text>
    </TouchableOpacity>
  );
}

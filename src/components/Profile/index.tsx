import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import { Avatar } from "../Avatar";
export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/1pedr1n" />
      <View style={styles.user}>
        <View style={styles.greeting}>
          <Text>Olá</Text>
          <Text style={styles.userName}>Pedro</Text>
          <Text style={styles.message}>Hoje é dia de vitória</Text>
        </View>
      </View>
    </View>
  );
}

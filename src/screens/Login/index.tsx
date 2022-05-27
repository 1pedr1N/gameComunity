import React, { useState } from "react";
import { Text, View, Image, StatusBar } from "react-native";
import { styles } from "./styles";
import IllustrationImage from "../../assets/illustration.png";
import { Button } from "../../components/ButtonIcon";
export default function Login() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImage}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}e organize suas {`\n`}
          jogatinas
        </Text>

        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games{`\n`}
          favoritos com seus amigos
        </Text>
        <Button />
      </View>
    </View>
  );
}

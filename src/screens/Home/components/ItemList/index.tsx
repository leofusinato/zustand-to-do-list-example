import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import useList from "../../../../stores/list";

import { styles } from "./styles";

type Props = {
  description: string;
  index: number;
};

export function ItemList({ description, index }: Props) {
  const { completeItem } = useList((store) => store.actions);

  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => completeItem(index)}
      >
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}

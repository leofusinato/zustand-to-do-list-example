import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import useList from "../../stores/list";
import { ItemList } from "./components/ItemList";

import { styles } from "./styles";

export function Home() {
  const { list } = useList((store) => store.states);
  const { addItem, clearList } = useList((store) => store.actions);
  const [addText, setAddText] = useState("");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TO DO LIST</Text>
        <TextInput
          style={styles.input}
          value={addText}
          onChangeText={(text) => {
            setAddText(text);
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => addItem(addText)}
        >
          <Text style={styles.buttonText}>INSERIR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "red" }]}
          onPress={clearList}
        >
          <Text style={styles.buttonText}>LIMPAR LISTA</Text>
        </TouchableOpacity>
        <View style={styles.divider} />

        {list.map((item, index) => (
          <ItemList key={index} description={item} index={index} />
        ))}
      </View>
    </ScrollView>
  );
}

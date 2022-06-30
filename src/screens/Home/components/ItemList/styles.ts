import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    borderWidth: 0.5,
    borderColor: "orange",
    padding: 16,
    width: "100%",
  },
  description: {
    fontWeight: "500",
    fontSize: 16,
  },
  button: {
    padding: 8,
    backgroundColor: "#88C371",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
});

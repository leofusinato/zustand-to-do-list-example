import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: getStatusBarHeight() + 24,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 6,
    padding: 10,
    width: "100%",
    marginVertical: 24,
  },
  button: {
    marginBottom: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#88C371",
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#E3E4E2",
  },
});

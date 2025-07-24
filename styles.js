import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  input: {
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 8
  },
  scroll: {
    marginTop: 20
  },
  number: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
    marginVertical: 5
  }
})
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: '600',
    marginVertical: 16,
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12
  },
  input: {
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 10
  },
  card: {
    backgroundColor: '#1f1f1f',
    borderRadius: 20,
    padding: 20,
    marginBottom: 10,
    maxHeight: 450,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberList: {
    alignItems: 'center'
  },
  number: {
    color: 'white',
    fontSize: 32,
    marginVertical: 4
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center'
  },
  buttonActive: {
    backgroundColor: '#4a90e2'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500'
  }
});
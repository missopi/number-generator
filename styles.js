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
    marginBottom: 12,
    marginHorizontal: 5,
  },
  inputGroup: {
    marginBottom: 10
  },
  labeledInput: {
    flex: 1,
  },
  inputLabel: {
    color: 'white',
    marginBottom: 10,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 16,
    flex: 1,
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 10,
    marginHorizontal: 4,
  },
  card: {
    backgroundColor: '#1f1f1f',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 10,
    height: 430,
    overflow: 'hidden',
  },
  numberList: {
    alignItems: 'center',
    paddingBottom: 10,
    flexGrow: 1,
  },
  number: {
    color: 'white',
    fontSize: 62,
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
  },
  singleNumberContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  singleNumber: {
    fontSize: 120, // or even 100
    color: 'white',
    fontWeight: '600'
  }
});
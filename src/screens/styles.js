import {MyTheme} from '@utils';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export const styles = StyleSheet.create({
  background: {
    flex: 1,
    // justifyContent:"center",
    alignItems: 'center',
  },
  container: {
    // flex:1,
    width: '100%',
    // backgroundColor:"#87CEEB",
    alignItems: 'center',
    marginTop: '10%',
  },
  input: {
    marginTop: '2%',
    padding: '2%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 8,
  },
  buttonCover: {
    width: '90%',
    alignItems: 'flex-end',
    marginTop: '4%',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    marginTop: '1%',
    width: 80,
    padding: '1%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
  },
  locName: {
    width: '90%',
    textAlign: 'left',
    fontSize: 32,
    color: 'white',
    marginTop: '2%',
  },
  temperature: {
    width: '90%',
    textAlign: 'left',
    fontSize: 82,
    color: 'white',
  },
  condition: {
    width: '90%',
    textAlign: 'left',
    fontSize: 22,
    color: 'white',
  },
});

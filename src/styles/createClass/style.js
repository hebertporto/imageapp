import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    resizeMode: 'stretch',
    width: '100%',
    height: '100%',
    flex: 1
  },
  mainContainer: {
    flex: 1
  },
  firstSection: {
    flex: 0.4,
    flexDirection: 'column'
  },
  secondSection: {
    flex: 0.45,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: '7%'
  },
  thirdSection: {
    flex: 0.15
  },
  thirdSectionDivider: {
    flex: 0.1
  },
  thirdSectionFooter: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headContainer: {
    flex: 1
  },
  logoContainer: {
    flex: 0.7,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoImage: {
    resizeMode: 'contain',
    width: '35%',
    height: '50%'
  },
  loadingContainer: {
    flex: 0.2,
    justifyContent: 'center'
  },
  footerText: {
    fontSize: 12,
    color: 'white',
    backgroundColor: 'transparent'
  },
  inputContainer: {
    height: 50,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginVertical: '1%'
  },
  inputText: {
    flex: 1,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 0.3,
    borderRadius: 3,
    paddingHorizontal: '2%',
    fontSize: 12,
    backgroundColor: 'white'
  },
  loginButtonContainer: {
    flex: 0,
    flexDirection: 'row',
    height: '10%',
    marginTop: '5%'
  },
  loginButton: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  lineContainer: {
    flex: 0,
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  line: {
    flex: 1,
    backgroundColor: 'white',
    height: 1
  },
  orWhiteText: {
    backgroundColor: 'transparent',
    color: 'white',
    paddingHorizontal: '2%',
    position: 'relative',
    ...Platform.select({
      android: {
        bottom: 2
      },
      ios: {
        bottom: 1
      },
    })
  },
  whiteText: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  facebookButtonContainer: {
    flex: 0,
    marginTop: '5%',
    height: '10%',
    flexDirection: 'row'
  },
  underlineText: {
    textDecorationLine: 'underline',
    color: 'white',
    fontSize: 12
  },
  textClickContainer: {
    backgroundColor: 'transparent',
    paddingVertical: '2%',
    paddingHorizontal: '1%'
  },


});

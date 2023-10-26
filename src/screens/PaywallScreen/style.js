import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../theme/Colors';

const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.paywallBackground,
    justifyContent: 'flex-end',
  },
  plantAppText: {
    fontWeight: '800',
    fontSize: 30,
    lineHeight: 46,
    color: COLORS.white,
  },
  premiumText: {
    fontWeight: '300',
    fontSize: 27,
    lineHeight: 32,
    color: COLORS.white,
  },
  textContainer: {flexDirection: 'row', alignItems: 'center', marginLeft: 24},
  afterThreeDays: {
    fontSize: 9,
    lineHeight: 11,
    fontWeight: '300',
    alignSelf: 'center',
    color: COLORS.privacy,
    marginTop: 8,
  },
  tpr: {
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 13,
    color: COLORS.privacy,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  accesAll: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '300',
    color: COLORS.privacy,
    marginLeft: 24,
  },
  buttonContainer: {marginTop: 18},
  closeButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    right: 16,
    top: 55,
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  closeText: {
    fontSize: 10,
    color: '#fff',
  },
  image: {
    width: width,
    height: (width * 571) / 378,
    position: 'absolute',
    top: 0,
  },
});

export default styles;

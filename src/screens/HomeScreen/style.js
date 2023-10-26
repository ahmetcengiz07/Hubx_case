import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  welcomeText: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '400',
    color: COLORS.textColor,
    marginBottom: 6,
  },
  whenText: {
    color: COLORS.textColor,
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '500',
  },
  getStarted: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
    marginLeft: 24,
    marginTop: 24,
    marginBottom: 16,
  },
  premiumButton: {
    marginHorizontal: 24,
    height: 64,
    width: undefined,
    marginTop: 22,
  },
});

export default styles;

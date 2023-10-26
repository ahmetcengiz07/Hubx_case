import {Modal, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/Colors';

const ScreenModal = ({children, isVisible, setIsVisible}) => {
  return (
    <Modal visible={isVisible} setIsVisible={setIsVisible} animationType="fade">
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </Modal>
  );
};

export default ScreenModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

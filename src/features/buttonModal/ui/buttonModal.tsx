import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

export const ButtonModal = ({ title, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    padding: 5,
    bottom: 0,
  },
  button: {
    borderWidth: 2,
    borderColor: '#0a96ea',
    color: '#0a96ea',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  text: {
    color: '#0a96ea',
    fontWeight: 'bold',
  },
});

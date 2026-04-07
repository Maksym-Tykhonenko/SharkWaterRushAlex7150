import {ImageBackground, ScrollView, StyleSheet} from 'react-native';

const Shrkkwaterrshhlayt = ({children}) => {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../../elements/i/shrkkwaterrback.png')}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
});

export default Shrkkwaterrshhlayt;

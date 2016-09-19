import React from 'react';
import AppBar from 'material-ui/AppBar';
import { StyleSheet, css } from 'aphrodite';

const App = () => {
  return (
    <div>
      <AppBar title='Dineros' showMenuIconButton={false} />
      <div className={css(styles.container)}>
        Los dineros que debemos
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
    container: {
        padding: '25px'
    }
});

export default App;

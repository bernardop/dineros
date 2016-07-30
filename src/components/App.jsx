import React from 'react';
import AppBar from 'material-ui/AppBar';
import { StyleSheet, css } from 'aphrodite';

const App = () => {
  return (
    <div>
      <AppBar title='Dineros' showMenuIconButton={false} />
      <div className={css(styles.textColor)}>
        Los dineros que debemos
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
    textColor: {
        color: '#fff',
        padding: '25px'
    }
});

export default App;

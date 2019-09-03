import React from 'react';
import ReactDOM from 'react-dom'
import styles from '../dist/styles.css'

const Main = () => {
  return (
    <div className={styles.mainMenu}>
      <div className={styles.bodyMenu} align="center">
        <div id={styles.topMenu}>
          <a className={styles.button}></a>
        </div>
      </div>

    </div>
  );
};

ReactDOM.render(<Main />, document.getElementById('main'));
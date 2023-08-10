import React from 'react';
import Header from './Header';
import styles from './app.module.css'; // Import your app's CSS

const App = () => {
  // ... Your content and logic

  return (
    <div className={styles.app}>
      <Header />
      {/* Your content */}
    </div>
  );
}

export default App;

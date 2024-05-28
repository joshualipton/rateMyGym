'use client';

import './App.css';
import awsconfig from './aws-exports';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'


function App() {
  Amplify.configure(awsconfig);

  return (
    <div className="App">
    <header className="App-header">
      <Authenticator>
          {({ signOut, user }) => (
            <>
              <h2>My App Content</h2>
              <button onClick={signOut}>Sign Out</button>
            </>
          )}
      </Authenticator>
    </header>
  </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import CustomTextInput from './CustomTextInput';
import WordAdder from './comonents/WordAdder';
import ErrorBoundary from './comonents/ErroBoundary/ErrorBoundary';
import BuggyCounter from './comonents/ErroBoundary/BuggyCounter';

class App extends Component {
  render() {
    return (
     <div>
       <CustomTextInput />
       <WordAdder />
       <ErrorBoundary>
         <BuggyCounter />
       </ErrorBoundary>
     </div>
    );
  }
}

export default App;

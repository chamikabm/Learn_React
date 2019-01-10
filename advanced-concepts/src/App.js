import React, { Component } from 'react';
import './App.css';
import CustomTextInput from './CustomTextInput';
import WordAdder from './comonents/WordAdder';

class App extends Component {
  render() {
    return (
     <div>
       <CustomTextInput />
       <WordAdder />
     </div>
    );
  }
}

export default App;

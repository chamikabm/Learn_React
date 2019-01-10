import React from 'react';
import ListOfWords from './ListOfWords';

class WordAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['marklar']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // This section is bad style and causes a bug
    const words = this.state.words;
    words.push('marklar');
    this.setState({words: words});
  }

  render() {
    return (
      <div>
        <button  style={{ 'margin-top': '100px', 'margin-bottom': '20px',width: '150px', height: '50px'}} onClick={this.handleClick} />
        <ListOfWords words={this.state.words} />
      </div>
    );
  }
}

export default WordAdder;

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
    this.setState(state => ({
      words: state.words.concat(['marklar'])
    }));
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

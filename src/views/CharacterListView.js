import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";

// import actions
import { getChar } from "../actions";

import Loader from 'react-loader-spinner';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  getAllChars = () => {
   
    this.props.getChar();
  };

  componentDidMount() {
    // call our action
    this.getAllChars();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (
         <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
 console.log(state)
  return{
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  isLoading: state.charsReducer.isLoading
}
}


export default connect(
  mapStateToProps, /* mapStateToProps replaces null here */
  {
    getChar
    /* action creators go here */
  }
)(CharacterListView);

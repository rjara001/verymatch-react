import React from 'react'
import { Buttons } from './Buttons'
import { connect } from 'react-redux';

let item;
const mapStateToProps = state => {
  item = state.currentTrack.items[state.currentTrack.items.findIndex((obj => obj.id === state.currentIndex))];
  return state;
};

const Flipcard = () => {

  return (
    <div className="flip-container-inner">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>
              English
            </h1>

            <h2>{item.front}</h2>
          </div>
          <div className="flip-card-back">
            <h1>Español</h1>
            <h2>{item.back}</h2>
          </div>
        </div>
      </div>
      <div>
        <Buttons></Buttons>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Flipcard);
import React from 'react'
import { Buttons } from './Buttons'
import { connect } from 'react-redux';

let _store = []
const mapStateToProps = state => {
  return _store = state;
};

const Flipcard = () => {

  return (
    <div class="flip-container-inner">
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h1>
              English
            </h1>

            <h2>{_store.items[_store.currentIndex].front}</h2>
          </div>
          <div class="flip-card-back">
            <h1>Español</h1>
            <h2>{_store.items[_store.currentIndex].back}</h2>
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
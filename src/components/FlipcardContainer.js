import React from 'react'
import Flipcard from './Flipcard'
import { Provider } from 'react-redux';
import store from '../store/index'

export const FlipcardContainer = () => {

  return (
    <div class="flip-container">
      <h1>Card Flip with Text</h1>
      <h3>Hover over the image below:</h3>

      <Provider store={store}>
        <Flipcard></Flipcard>
      </Provider>
    </div>
  )
}

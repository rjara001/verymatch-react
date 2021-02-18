import React from 'react'
import { Buttons } from './Buttons'
export const Flipcard = () => {

  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h1>
            English
            </h1>

          <h2>Deprevied</h2>
        </div>
        <div class="flip-card-back">
          <h1>Español</h1>
          <h2>Privado</h2>
        </div>
      </div>
      <Buttons></Buttons>
    </div>
  )
}

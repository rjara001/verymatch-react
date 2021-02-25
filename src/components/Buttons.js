import React from 'react'

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import store from '../store/index'
import * as actions from '../store/actions';

const Next = () => {
  console.log('worth for a greet')
  store.dispatch(actions.NextValue())
}

const Success = () => {
  store.dispatch(actions.Success())
}
export const Buttons = () => {

  return (
    <div class="card-buttons">
      <ButtonGroup aria-label="Basic example" style={{ "width": "100%" }}>
        <Button variant="success" onClick={Success} class="btn-block">Ok</Button>{' '}
        <Button variant="dark" onClick={Next}>Next</Button>{' '}

      </ButtonGroup>

    </div>
  )
}

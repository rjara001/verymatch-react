import React from 'react'

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
export const Buttons = () => {
  return (
    <div class="card-buttons">
      <ButtonGroup aria-label="Basic example" style={{ "width": "100%" }}>
        <Button variant="success" class="btn-block">Ok</Button>{' '}
        <Button variant="dark">Next</Button>{' '}

      </ButtonGroup>

    </div>
  )
}

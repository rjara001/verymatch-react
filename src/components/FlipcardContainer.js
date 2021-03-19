import React from 'react'
import Flipcard from './Flipcard'
import Summary from './Summary';
import { connect } from 'react-redux';
import store from '../store/index';
import * as actions from '../store/actions';
import { Link } from 'react-router-dom';

let _store = []
let options = 'Pause';
let menus = '';
const mapStateToProps = state => {

  return _store = state;
};

const renderByStatus = () => {
  if (_store.matchActive)
    options = 'Pause';
  else
    options = 'Resume';

  if (_store.tracksMenuActive)
    menus = 'Do Match';
  else
    menus = 'Change Track';

  if (!_store.matchActive)
    return <Summary></Summary>
  else
    return <Flipcard></Flipcard>;

}

const SwitchOption = () => {
  store.dispatch(actions.SwitchOption())
}

const FlipcardContainer = () => {

  return (
    <div className="flip-menu">
      <div>
        <h1>VeryMatch</h1>
        <h3>Learn <b>{_store.currentTrack.items.length}</b> items doing match for <b>{_store.currentTrack.name}</b> </h3>
        {renderByStatus()}
      </div>
      <div>
        <br></br>
        <a href="/#" onClick={SwitchOption}>{options}</a>
        &nbsp;
        {/* <Link to='/tracks'>{menus}</Link> */}
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(FlipcardContainer);
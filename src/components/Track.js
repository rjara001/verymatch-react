import React from 'react';
import { connect } from 'react-redux';
import Icon from '@mdi/react';
import { mdiPlusCircleOutline } from '@mdi/js';
import * as actions from '../store/actions';
import { Link } from 'react-router-dom';
import store from '../store/index'

let _store = {};

const mapStateToProps = state => {
  return _store = state;
};

const Rows = ({ data }) => {
  return data.items.map(_ => {
    return (
      <tr key={_.id}>
        <td></td>
        <td>{_.front}</td>
        <td>{_.back}</td>
      </tr>
    )
  });
}

const onClickPlay = (id) => {
  store.dispatch(actions.ActiveTrack(id));
}

const RenderTextSelected = ({ value }) => {
  if (value.selected)
    return (<span className="badge pull-right badge-primary">selected</span>)
  else
    return <></>
}

const Groups = ({ data }) => {
  return data.map(_ => {
    return (
      <li className="list-group-item" key={_.id}>
        <h4>
          <div className="card-pull-left">{_.name}</div>
          <span className="badge pull-right badge-warning">
            <Link title="play" to='#' onClick={() => onClickPlay(_.id)}>play</Link>
          </span>
          <RenderTextSelected value={_}></RenderTextSelected>
        </h4>
      </li>
    )
  });
}

const TableItem = () => {
  return <table className="table table-borderless">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">English</th>
        <th scope="col">Spanish</th>
      </tr>
    </thead>
    <tbody>
      <Rows data={_store.currentTrack}></Rows>
    </tbody>
  </table>
}

const Track = () => {
  return (
    <div className="w-100 p-3">
      <div className="tabs-left">
        <div className="tab-content">
          <div className="tab-pane active" id="a">
            <h3>Tracks</h3>
            <ul className="list-group pull-left">
              <Groups data={_store.tracks}></Groups>
            </ul>
            <div>
              <br></br>

            </div>
          </div>

        </div>

      </div>
      <div>
        <div>
          <div className="row align-items-start">
            <div className="col-10">
              <h4>{_store.currentTrack.name}</h4>
            </div>
            <div className="col-2">
              <Icon path={mdiPlusCircleOutline} size={1} color="orange" onClick="addItem" />
            </div>

          </div>

        </div>

        <TableItem></TableItem></div>
    </div>
  )
}

export default connect(mapStateToProps)(Track);
import React from 'react'
import { connect } from 'react-redux';
import SummaryService from "../services/SummaryService";
import * as actions from '../store/actions';
import store from '../store/index'
let _resp = {}
let _store = {};
const mapStateToProps = state => {
  let _summary = new SummaryService(state);
  _resp = _summary.calculate()

  return _store = state;
};

const Next = () => {

  store.dispatch(actions.NextMatch())
}

const Restart = () => {
  store.dispatch(actions.RestarMatch())
}

const Hibernate = () => {
  store.dispatch(actions.HibernateMatch())
}

const MessageKudos = () => {

  if (_store.statusMatch === 'FinishMatch')
    return (<h4>Kudos you completed all match</h4>)
  return '';

}

const ButtonsMatch = () => {
  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button disabled={_store.statusMatch === 'FinishMatch'} type="button" className="btn btn-primary btn-sm" onClick={Next}>Next</button>
        <button type="button" className="btn btn-success btn-sm" onClick={Restart}>Restart</button>
        <button type="button" className="btn btn-warning btn-sm" onClick={Hibernate}>Hibernate First Match</button>
      </div>


    </>
  );
}

const TextMatch = (props) => {
  let Mark = '';
  if (props.status === _store.statusMatch)
    Mark = '*';

  return (
    <>
      {Mark} { props.children}
    </>
  )
}

const Summary = () => {
  return (

        <div className="tabs-left">
          <div className="tab-content">
            <div className="tab-pane active" id="a">
          <h3>Summary '{_store.currentTrack.name}'</h3>
              <MessageKudos></MessageKudos>
              <ul className="list-group pull-left">
                <li className="list-group-item">
                  <h4>
                    <div className="card-pull-left"><TextMatch status="FirstMatch">First Match</TextMatch></div><span className="badge pull-right badge-primary">{_resp.FirstMatch}</span></h4>
                </li>
                <li className="list-group-item">
                  <h4><div className="card-pull-left"><TextMatch status="SecondMatch">Second Match</TextMatch></div><span className="badge pull-right badge-warning">{_resp.SecondMatch}</span></h4>
                </li>
                <li className="list-group-item">
                  <h4><div className="card-pull-left"><TextMatch status="ThirdMatch">Third Match</TextMatch></div><span className="badge pull-right badge-info">{_resp.ThirdMatch}</span></h4>
                </li>
                <li className="list-group-item">
                  <h4><div className="card-pull-left"><TextMatch status="FourthMatch">Fourth Match</TextMatch></div><span className="badge pull-right badge-danger">{_resp.FourthMatch}</span></h4>
                </li>
                <li className="list-group-item">
                  <h4><div className="card-pull-left"><TextMatch>Total Match</TextMatch></div>    <span className="badge pull-right badge-dark">{_resp.Total}</span></h4>
                </li>
              </ul>
              <div>
                <br></br>
                <ButtonsMatch></ButtonsMatch>

              </div>
            </div>

          </div>

        </div>

  )
}

export default connect(mapStateToProps)(Summary);
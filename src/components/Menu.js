import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import FlipcardContainer from './FlipcardContainer';
import Track from './Track';
import Summary from './Summary';
import Icon from '@mdi/react';
import { mdiHome, mdiLanguageRubyOnRails, mdiViewDashboardVariant } from '@mdi/js';

const Menu = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/js/jsMenu.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <Router>
      <div className="container-all">
        <div className="page">

          <nav className="nav nav--offcanvas-1">
            <div className="nav__close"></div>

            <ul className="nav__list">


              <li className="nav__item">
                <Link className="nav__link" title="Home" to='/'><Icon path={mdiHome} size={1} color="white" />&nbsp;&nbsp; Home</Link>
              </li>

              <li className="nav__item">
                <Link className="nav__link" title="Tracks" to='/tracks'><Icon path={mdiLanguageRubyOnRails} size={1} color="white" />&nbsp;&nbsp;Tracks</Link>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="/summary" title="Summary"><Icon path={mdiViewDashboardVariant} size={1} color="white" />&nbsp;&nbsp;Summary</a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="/#" title="Settings"><i className="nav__link-icon material-icons"></i>Settings</a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="/#" title="Plans"><i className="nav__link-icon material-icons"></i>Plans</a>
              </li>

              <li className="nav__item">
                <a className="nav__link" href="/#" title="Log In"><i className="nav__link-icon material-icons"></i>Log In</a>
              </li>
            </ul>
          </nav>

          <div className="page__content page__content--offcanvas-1">
            <div className="nav-open-btn">
              <div className="nav-open-btn__bar"></div>
              <div className="nav-open-btn__bar"></div>
              <div className="nav-open-btn__bar"></div>
            </div>
            <div className="content">

              <div>
                <Route exact path="/" component={FlipcardContainer} />
                <Route path="/tracks" component={Track} />
                <Route path="/summary" component={Summary} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default Menu;



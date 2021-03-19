import { BrowserRouter as Router, Route } from "react-router-dom";
import FlipcardContainer from './FlipcardContainer';
import Track from './Track';

const MainContent = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={FlipcardContainer} />
        <Route path="/tracks" component={Track} />
      </div>
    </Router>
  );
}

export default MainContent;
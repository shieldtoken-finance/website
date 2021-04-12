import "./App.less";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import NewPage from "./pages/News";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact={true} children={<Landing />} />
        <Route path={"/news"} exact={true} children={<NewPage />} />
      </Switch>
    </Router>
  );
}

export default App;

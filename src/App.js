import React from "react";
import "./App.css";
import Home from "./components/home";
import Login from "./components/Form_Components/Login/Login";
import Register from "./components/Form_Components/Register/Register";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/NavBar";
import SelectCategories from "./components/Form_Components/Select_Categories/SelectCategories";
import FirstOnboard from "./components/OnboardComponents/FirstOnboard";
import ManualBlocks from "./components/Blocks_Components/ManualBlocks";

/* return <button onClick={methodDoesNotExist}>Break the world</button>; */
function App() {
<<<<<<< HEAD

	return (
		<div>
			<Navbar />
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<PrivateRoute path='/dashboard' component={Dashboard} />
					<Route path='/onBoard/select' component={SelectCategories} />
					<Route path='/onBoard/1' component={FirstOnboard} />
					<Route path='/manual' component={ManualBlocks} />
				</Switch>
			</div>
		</div>
	);
=======
  return (
    <div>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/onBoard/select" component={SelectCategories} />
          <Route path="/onBoard/1" component={FirstOnboard} />
          <Route path="/manual" component={ManualBlocks} />
        </Switch>
      </div>
    </div>
  );
>>>>>>> 076a0639fdefbe992ef4976c77819058df844587
}

export default App;

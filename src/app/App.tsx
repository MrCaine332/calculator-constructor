import React from 'react';
import Router from "../router/Router";
import Navigation from "../modules/navigation/Navigation";

function App() {
	return (
		<div className="app">
			<div className="container">
				<Navigation />
				<Router />
			</div>
		</div>
	);
}

export default App;

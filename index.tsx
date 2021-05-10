import { React, ReactDOM } from "./deps.ts";

const Foo: React.FC<{}> = () => {
	const [counter, setCounter] = React.useState(0);
	return (
		<div>
			counter = {counter}{' '}
			<button onClick={() => { setCounter(counter + 1) }}>Increment</button>
		</div>
	);
};

const App = () => {
	return <Foo />;
};

const root = document.getElementById('root');
ReactDOM.render(<App />, root);

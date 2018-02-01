import React from 'react';
import '../scss/main.css';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import Preview from './Preview';
import Form from './Form';

class App extends React.Component {
	constructor(props) {
		super(props);
		// this.handleClickShowItem = this.handleClickShowItem.bind(this);
		// // this.showItem = this.showItem.bind(this);
		// this.state = {
		// 	show: false
		// }
	}

	// handleClickShowItem(){
	// 	this.setState({
	// 		show: !this.state.show
	// 	}, showItem(){
	// 			let display= 'none';
	// 			if(this.state.show){
	// 				display = 'block';
	// 			}
	// 			return(display);
	// 			console.log(display);
	// 		}
 	// 	);
	// }


	render() {
		return (
			<div className="overflow">
				<Header />
				<main>
					<Hero />
					<div className="resume-container" id="empezar">
						<div className="split-div">
							<Form />
							<Preview />
						</div>
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;

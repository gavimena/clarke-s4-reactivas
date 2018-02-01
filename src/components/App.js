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
		this.state = {
			show: false,
			nameState: '',
			surnameState: '',
			professionState: ''
		}
		this.inputNameChangeListener = this.inputNameChangeListener.bind(this);
	}

	inputNameChangeListener(event) {
		this.setState( {
			nameState: document.getElementById('name').value
		});
	}



	// handleClickShowItem(){
	// 	this.setState({
	// 		show: !this.state.show
	// 	}, showItem() {
	// 		const display = '';
	// 		return (
	// 			display = {this.state.show? 'block':'none'}
	// 		);
	// 		}
 	// 	);
	// }
			// <ProfilePreview nameProp={this.state.nameState} />

	render() {
		return (
			<div className="overflow">
				<Header />
				<main>
					<Hero />
					<div className="resume-container" id="empezar">
						<div className="split-div">
							<Form handlerFormProp={this.inputNameChangeListener}/>
							<Preview handlerPrevProp={this.state.nameState} />
						</div>
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;

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
		this.handleClickShowPreview = this.handleClickShowPreview.bind(this);
		this.state = {
			visible: false
		}
	}

	handleClickShowPreview(){
		this.setState({visible: !this.state.visible})
	}

	render() {
		return (
			<div className="overflow">
				<Header clickPreview={this.handleClickShowPreview}/>
				<main>
					<Hero />
					<div className="resume-container" id="empezar">
						<div className="split-div">
							<Form />
							<Preview visible={this.state.visible}
								closePreview={this.handleClickShowPreview}/>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;

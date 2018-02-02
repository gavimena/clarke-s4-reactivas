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
		this.updateState = this.updateState.bind(this);
		this.scrollSlow = this.scrollSlow.bind(this);
		this.state = {
			visible: false,
			scroll: false
		}
	}

	handleClickShowPreview(){
		this.setState({visible: !this.state.visible})
	}

	updateState(key,value) {
        const newState= {};
        newState[key]=value;
        this.setState(newState);
    }
		scrollSlow(e){
				// alert ('Si, funciona');
				e.preventDefault();
				this.setState({scroll: true})

		}

	render() {
		return (
			<div className="overflow">
				<Header clickPreview={this.handleClickShowPreview}/>
				<main>
					<Hero scroll={this.scrollSlow} />
					<div className="resume-container" id="empezar">
						<div className="split-div">
							<Form updatePreviewForm = {this.updateState} scroll={this.state.scroll}/>
							<Preview visible={this.state.visible}
								closePreview={this.handleClickShowPreview}
								namePrev={this.state.name} surname={this.state.lastname} job={this.state.profession} phone={this.state.telephone} mail={this.state.email} />
						</div>
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;

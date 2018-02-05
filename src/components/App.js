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
		this.state = {
			visible: false
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

	//update

	render() {
		return (
			<div className="overflow">
				<Header clickPreview={this.handleClickShowPreview}/>
				<main>
					<Hero />
					<div className="resume-container" id="empezar">
						<div className="split-div">
							<Form updatePreviewForm = {this.updateState}/>
							<Preview visible={this.state.visible}
								closePreview={this.handleClickShowPreview}
								namePrev={this.state.name} surname={this.state.lastname} job={this.state.profession}
								summary={this.state.summary}
								position={this.state.position}
								company={this.state.company}
								monthStart={this.state.monthStart}
								monthEnd={this.state.monthEnd}
								yearStart={this.state.yearStart}
								yearEnd={this.state.yearEnd} />
						</div>
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;

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
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleImageChange = this.handleImageChange.bind(this);
		this.state = {
			visible: false,
			scroll: false,
			file:'',
			imagePreviewUrl:''
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

	handleSubmit(event){
		event.preventDefault();
	}


	handleImageChange(event){
		debugger
		event.preventDefault();
		let reader = new FileReader();
		let file = event.target.files[0];

		reader.onloadend = () => {
			this.setState ({
				file: file,
				imagePreviewUrl: reader.result
			});
		}
		reader.readAsDataURL(file)
	}

	render() {

		return (
			<div className="overflow">
				<Header clickPreview={this.handleClickShowPreview}/>
				<main>
					<Hero scroll={this.scrollSlow} />
					<div className="resume-container" id="empezar">
						<div className="split-div">
							<Form updatePreviewForm = {this.updateState} scroll={this.state.scroll} submit={this.handleSubmit} imageChange={this.handleImageChange} />
							<Preview visible={this.state.visible}
								closePreview={this.handleClickShowPreview}
<<<<<<< HEAD
								namePrev={this.state.name} surname={this.state.lastname} job={this.state.profession}
								summary={this.state.summary}
								position={this.state.position}
								company={this.state.company}
								monthStart={this.state.monthStart}
								monthEnd={this.state.monthEnd}
								yearStart={this.state.yearStart}
								yearEnd={this.state.yearEnd} />
=======
								submit={this.handleSubmit} imagePreviewUrl={this.state.imagePreviewUrl} namePrev={this.state.name} surname={this.state.lastname} job={this.state.profession} summary={this.state.summary} phone={this.state.telephone} mail={this.state.email} />
>>>>>>> development
						</div>
					</div>
				</main>
				<Footer />
			</div>
		);
	}
}

export default App;

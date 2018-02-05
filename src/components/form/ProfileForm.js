import React from 'react';
import ReactDOM from 'react-dom';

class Profile extends React.Component {

	constructor(props){
   super(props);
   this.handleChange = this.handleChange.bind(this);
   this.handleDelete = this.handleDelete.bind(this);
	 this.editForm=this.editForm.bind(this);
	 this.state = {
		 editForm: false
		};
	}

	handleChange(event) {
        this.props.updatePreview(event.target.id,event.target.value);
  }

	handleDelete(event) {
      this.props.updatePreview("name", "");
			this.props.updatePreview("lastname", "");
			this.props.updatePreview("profession", "");
			this.refs.name.value = "";
			this.refs.lastname.value = "";
			this.refs.profession.value = "";

	}

	componentWillUpdate() {
		if(this.props.scroll === true){
			const object = ReactDOM.findDOMNode(this.refs.contentProfile)
			window.scrollTo(0, object.offsetTop);
			// element.scrollIntoView({ behavior: 'smooth' });
			// window.configureAnchors({offset: -60, scrollDuration: 200})
		}
	}


	editForm() {
		this.setState({editForm: !this.state.editForm})
	}

	render(){

		return(
			<div className="profile section" ref="contentProfile">
				<div className="info">
					<h2 className="section-title">Perfil</h2>
					<div className="section-buttons">
						<button type="button" className="form__button--edit" value="Editar" onClick={this.editForm}> { this.state.editForm? 'Cerrar':'Editar'}  </button>
					</div>
				</div>

				{ this.state.editForm === true ? <div id="content-profile" className="form__sectionContent" submit={this.handleSubmit} >
					<input type="text" id="name" placeholder="Nombre" ref="name" onChange={this.handleChange} />
					<input type="text" id="lastname" placeholder="Apellidos" onChange={this.handleChange} ref="lastname"/>
					<input type="text" id="profession" placeholder="Profesión" onChange={this.handleChange} ref="profession" />
					<input className="fileImput" type="file" id="photo" placeholder="Foto" onChange={this.props.imageChange} />
					<input type="button" value="Borrar" className="delete-profile form__button--saveDeleteClose" onClick={this.handleDelete}/>
				</div> : null }
			</div>
		);
	}
}

export default Profile;

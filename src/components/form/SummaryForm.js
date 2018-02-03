import React from 'react';

class Summary extends React.Component {

	constructor(props) {
		super(props);
		this.handleChange=this.handleChange.bind(this);
		this.editForm=this.editForm.bind(this);
		this.state = {
			editForm: false
}
	}

	handleChange(event) {
		this.props.updatePreview(event.target.id,event.target.value);
	}

	editForm() {
		this.setState({editForm: !this.state.editForm})
	}

	render(){
		return(
			<div className="summary section">
				<div className="info">
					<h2 className="section-title">Extracto</h2>
					<div className="section-buttons">
						<button type="button" className="form__button--edit" value="Editar" onClick={this.editForm}> { this.state.editForm? 'Cerrar':'Editar'}  </button>
					</div>
				</div>

				{ this.state.editForm === true ? <div id="content-summary" className="form__sectionContent">
					<textarea name="summary" id="summary" onChange={this.handleChange} className="form__textarea--summary" rows="8" cols="80" placeholder="Introduce una pequeña descripción"></textarea>
					<input type="button" name="delete" value="Borrar" className="delete-summary form__button--saveDeleteClose" />
				</div> : null }
			</div>
		);
	}
}

export default Summary;

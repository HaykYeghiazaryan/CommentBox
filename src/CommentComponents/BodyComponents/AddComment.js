import React from 'react';

class AddComment extends React.Component{
	render(){
		const {addValues, inpValues, textValues, addNameText} = this.props;
		return(
			<div className="addComment">
				<input id="input" type="text" className="addInput" placeholder="Write your Name ..." value={inpValues} name="valueInp" onChange={addValues} />
				<br />
				<textarea id="textarea" className="addInput" placeholder="Write Your Comment ..." value={textValues}  name="valueText" onChange={addValues} ></textarea>
				<br />
				<button className="sendWrite" onClick={addNameText} >
					Send
				</button>
			</div>
		);
	}
}
export default AddComment;
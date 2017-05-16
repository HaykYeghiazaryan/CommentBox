import React from 'react';

class TextComment extends React.Component{
	componentDidMount() {
		const {time}=this.props.data;
		const {timeSince,number}=this.props;
		timeSince(time,number);
	}
	render(){
		const {number,del}=this.props;
		const {name,text,time,x}=this.props.data;
		return (
			<div className="com">
				<div className="name">
					<span>
						{name}
					</span>
				</div>
				<div className="textAndCountdown">
					<span className="countDown">{x}</span>
					<span>
						{text}
					</span>
					<span className="abs"></span>
				</div>
				<button className="sendWrite hideShow deletIc" onClick={del} name={number} >
					Delete Comment
				</button>
			</div>
		);
	}
}
export default TextComment;
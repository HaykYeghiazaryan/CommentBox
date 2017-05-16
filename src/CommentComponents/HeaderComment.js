import React from 'react';

class HeaderComment extends React.Component{			
	render(){
		const {title, showCom, showHide} = this.props;
		return(
			<div className="headerContent">
				<button className="sendWrite hideShow" onClick={showHide} >
					{showCom ? "Hide" : "Show"}
				</button>
				{title}
			</div>
		);
	}
}
export default HeaderComment;
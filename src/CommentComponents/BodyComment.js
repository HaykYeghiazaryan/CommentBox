import  React from 'react';

import TextComment from './BodyComponents/TextComment.js';
import AddComment from './BodyComponents/AddComment.js';

class BodyComment extends React.Component{
	render(){
		const {dataCom,showCom,addCom,valuesIn,valuesT,comPlus,deleteCom,x,timeSince} = this.props;
		return (
			<div className="bodyContent">
				<div className="bodyComment" id="bodyC">
					{showCom && dataCom.map((item,index) => <TextComment key={index} data={item} number={index} del={deleteCom} x={x} timeSince={timeSince}  />)}
				</div>
				<AddComment addValues={addCom} inpValues={valuesIn} textValues={valuesT} addNameText={comPlus} />
			</div>
		)
	}
}
export default BodyComment;
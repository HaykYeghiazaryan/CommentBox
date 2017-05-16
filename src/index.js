import React from 'react';

import HeaderComment from './CommentComponents/HeaderComment.js';
import BodyComment from './CommentComponents/BodyComment.js';

class Comment extends React.Component{
	constructor(props){
		super(props);
		this.state={
			data:[
					{
						name:"Hayk",
						text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
						time:new Date(2015,3,25,17,0,0),
						x:"",
					},
					{
						name:"Aram",
						text:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. .",
						time:new Date(2017,0,25,17,10,0),
						x:"",
					},
					{
						name:"Nana",
						text:"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
						time:new Date(2017,3,25,17,20,0),
						x:"",
					},
					{
						name:"Nara",
						text:"Why do we use it?",
						time:new Date(2017,3,26,6,0,0),
						x:"",
					},
					{
						name:"Arpi",
						text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
						time:new Date(2017,3,26,7,2,0),
						x:"",
					},
					{
						name:"Nare",
						text:" Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
						time:new Date(2017,3,28,5,28,0),
						x:"",
					},
					{
						name:"Gurgen",
						text:"Where does it come from?",
						time:new Date(2017,4,4,9,20,0),
						x:"",
					}
				],
				showComment:true,
				valueInp:"",
				valueText:"",
			}
			this.showHideComments=this.showHideComments.bind(this);
			this.addComment=this.addComment.bind(this);
			this.commentPlus=this.commentPlus.bind(this);
			this.deleteComment=this.deleteComment.bind(this);
		}
		showHideComments(){
			this.setState({
				showComment:!this.state.showComment
			})
		}
		HeaderComments(){
			const {data} = this.state;
			if(data.length==0){
				return "No Comment";
			}else if(data.length==1){
				return "1 Comment"
			}else if(data.length>1){
				return data.length+" Comments";
			}
		}
		addComment(event){
			const name=event.target.name;
			console.log(event.target.value);
			this.setState({
				[name]:event.target.value,
			})
		}
		commentPlus(){
			var input = this.state.valueInp;
			var textarea = this.state.valueText;
			var date=new Date();
			var array=this.state.data;
			var myObj = {
				name:input,
				text:textarea,
				time:date,
				x:""
			}
			array.push(myObj);
			this.setState({
				data:array,
				valueInp:"",
				valueText:"",
			})
			var objDiv = document.getElementById("bodyC");
			objDiv.scrollTop = objDiv.scrollHeight;
		}
		deleteComment(event){
			var number=event.target.name;
			var array=this.state.data;
			array.splice(number,1);
			this.setState({
				data:array,
			})
			console.log(this.state.data[number])
		}
		timeSince=(date,i)=>{		
			var seconds = Math.floor((new Date() - date) / 1000);
			var num=this.state.data[i];
			var interval = Math.floor(seconds / 31536000);
			if (interval > 1) {
			   num.x = interval + " years ago" ;
			}
			interval = Math.floor(seconds / 2592000);
			if (interval < 12) {
				num.x = interval + " month ago" ;
			}
			interval = Math.floor(seconds / 86400);
			if (interval < 30) {
				num.x = interval + " days ago" ;
			}
			interval = Math.floor(seconds / 3600);
			if (interval<24) {
				num.x = interval + " hours ago" ;
			}
			interval = Math.floor(seconds / 60);
			if (interval < 60) {
				num.x = interval + " minutes ago" ;
			}
			const {data}=this.state;
			data.splice(i,1,num);
			this.setState({
				data,	
			})	
			setTimeout(()=>{this.timeSince(date,i)}, 1000)
		}	
		render(){
			const {data, showComment, valueInp, valueText,x} = this.state; 
			return(
				<div className="content">
					<HeaderComment title={this.HeaderComments()}  showCom={showComment} showHide={this.showHideComments}/>
					<BodyComment dataCom={data} showCom={showComment} addCom={this.addComment} valuesIn={valueInp} valuesT={valueText} comPlus={this.commentPlus} deleteCom={this.deleteComment} x={x} timeSince={this.timeSince} />
				</div>
			)
		}
	}
export default Comment;
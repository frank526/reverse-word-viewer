import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import headStyles from './styles';

class Head extends Component{
   constructor(props){
     super(props);
     this.handleGetReverseText = this.handleGetReverseText.bind(this);
     this.handleSaveText = this.handleSaveText.bind(this);
     this.state = {text: ''};   
   }

   async handleGetReverseText(){
      const {text} = this.state;
      try{
         await this.props.textReverse(text);
      }catch(error){
         this.setState({error});
         return;
      }
      this.setState({text:''});
   }

   handleSaveText(e) {
      this.setState({text:e.target.value});
   }

   render(){
      return(
       <div style ={headStyles.mainDiv} >
         <div style ={headStyles.secondDiv}>
            <Form.Control 
              type="text"
              placeholder="Insert Text" 
              style={headStyles.inputText}
              onChange = {this.handleSaveText}
              value={this.state.text} 
              />
            <Button onClick ={this.handleGetReverseText} variant="success" >
              Send
            </Button>
         </div>
      </div>
       );
   }
}
export default Head;

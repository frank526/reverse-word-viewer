import React, { Component } from 'react';
import contentStyles from './styles';

class Content extends Component{
   constructor(props){
      super(props);
      this.renderTextList = this.renderTextList.bind(this);
   }

   renderTextList(){
      const { reverseTextList} = this.props;
      if(this.props.error){
         return(<span style={contentStyles.error} >{this.props.error}</span> );
      }
      if(!reverseTextList.length){
         return;
      }
      return(
         <table cellSpacing='5'>
            {
            reverseTextList.map((text, i) =>
                  (<tbody key ={i}>
                     <tr key={i}>
                        <td key={i}>
                           <input type="text" value={text} style ={contentStyles.resultInput} readOnly />
                        </td>
                     </tr>
                   </tbody>
                  ))
             }
         </table>
      )
   }


   render(){
      return(
         <div style ={contentStyles.mainDiv}>
            <div style ={contentStyles.titleDiv}>
               Results:
            </div>
            <div style ={contentStyles.secondDiv}>
              {this.renderTextList()}
            </div>
         </div>
      );
   }
}

export default Content;
import React, { Component } from 'react';
import Content from './components/content/ContentScene';
import Head from './components/head/HeadScene';

import appStyles from './styles';

class App extends Component{

   constructor(props){
      super(props);
   }

   render(){
      return(
         <div style={appStyles.mainDiv}>
            <div>
               <Head />
            </div>
            <div style={appStyles.secondDiv}>
            <Content />
            </div>
         </div>
      );
   }
}
export default App;
export const TEXT_REVERSE = 'TEXT_REVERSE';
export const TEXT_REVERSE_ERROR = 'TEXT_REVERSE_ERROR';


export const textReverse = (text) => {
   return async(dispatch)=>{

    let respJson;
    let error = '';
    try{
       respJson = await fetch(`http://localhost:3000/iecho?text=${text}`)
    }catch(error){
        error = `Error get reverse word ${error}`;
        const actionResp = {
            type: TEXT_REVERSE_ERROR,
            error
         };
        return dispatch(actionResp);
    }

    const resp = await respJson.json();
    if(resp.error){
        error = `Error get reverse word ${resp.error}`;
        const actionResp = {
            type: TEXT_REVERSE_ERROR,
            error
         };
        return dispatch(actionResp);
    }

     const actionResp = {
        type: TEXT_REVERSE,
        reverseText: resp.text,
     };
    return dispatch(actionResp);
   }

}

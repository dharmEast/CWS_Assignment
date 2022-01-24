import { memo,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
var obj ={
    name:"Tom Holland",
    Movie:"Spider Man",
    Gang: "Marvel"
}
const JsonComponent = (props)=> {
    let {userName,storeUserDetails} = props;
    const history = useHistory();
    userName = userName || localStorage.userName;
    useEffect(()=>{
        if(!userName){
            history.push('/');
        }else{
            storeUserDetails({userName})
        }
    },[])
  return (
    JSON.stringify(obj)
  );
}

// Wrap component using "memo" HOC
export default memo(JsonComponent);
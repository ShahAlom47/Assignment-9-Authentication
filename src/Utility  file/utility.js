 export const getLocalData =(key)=>{

const LocalData= localStorage.getItem(key);

if(LocalData){

    return JSON.parse(LocalData)
}
else{
    return []
}


 } 
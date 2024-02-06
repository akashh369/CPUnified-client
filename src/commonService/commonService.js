import axios from 'axios';

const localUrl='http://localhost:5000'
const webUrl=''
const url=localUrl


export function codeChefContestData(){
    const hitUrl=url + "/contests/codechef";
    axios.get(hitUrl)
        .then((response)=>{
            return response.data;
        })
        .catch((error)=>{
            alert(error)
            return error;
        })
}
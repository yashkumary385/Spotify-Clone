console.log('hey what we doing');

async function main(){
let a=fetch("http://127.0.0.1:3000/songs")
let response= await a.text()
console.log(response);



}
main()
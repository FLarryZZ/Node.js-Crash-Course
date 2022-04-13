// const http=require("http");
// const HOSTNAME=process.env.HOSTNAME || "localhost";
// const PORT = process.env.PORT || 3000;

// const server=http.createServer((request,response)=>{
//     response.statusCode=200;
//     response.setHeader("Content-Type","text/plain");
//     response.end("Hello World");
// });

// server.listen(PORT,HOSTNAME,()=>{
//     console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
// });
// console.log(__filename);
// console.log(__dirname);
//prvi primjer u kojem se prvo sve basic izvrsi pa onda ide funkcije i ta sranja u nasem primjeru se izvrsi prvo console.log("Log from outside") pa onda procita file
// const fs=require("fs")
// fs.readFileSync("hi.txt","utf8",(err,data)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log(data); //mozemo i data.toString() koristit
// });
//console.log("Log from outside")

//drugi primjer

//const fs=require("fs"); moze ovako a moze i ovako
//const {readFile,readFileSync}=require("fs");
// try{
//    const data= fs.readFileSync("hi.txt","utf-8");
//    console.log(data);
// }catch(err){
//     console.errror(err)
// }
// console.log("Log from outside")
// const {writeFile,writeFileSync}=require("fs");
// const newContent='This is some new text';
// // writeFile("hi.txt",newContent,{flag:'a'} ,(err)=>{
// //     if(err){
// //         console.errror(err);
// //         return;
// //     }
// //     console.log("Content written")
// // });
// try{
//     writeFileSync("hi.txt",newContent);
//     console.log("Written");
// }catch(err){
//     console.error(err);
// }

//append sranje
// const {appendFile}=require("fs");
// const newContent="\n ide gas bruda moj";
// appendFile("hi.txt",newContent,(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("gotov");
// })
//rename
// const {rename}=require("fs");
// const newContent="\n ide gas bruda moj";
// rename("hi.txt","hello.txt",(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("File renamed");
// })
// const {unlink}=require("fs");
// const newContent="\n ide gas bruda moj";
// unlink("hello.txt",(err)=>{
//     if(err){
//         console.error(err);
//         return;
//     }
//     console.log("File deleted");
// })
// IS MODULES => SRANJE
//const addNums=require("./addNums");// ovo je import al drugaciji
//import {addNums} from './addNums'; al imo dosta popravljanja ne valja ovo po meni
// import{addNums} from "./addNums.js";
// const sum=addNums(2,2)
// console.log(sum)
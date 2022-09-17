const  http  =  require("http");

const server  =  http.createServer(function(req, res){
let k;
let count = 0;

isprime(9871)
    
res.end()

function isprime(num) {
  k=((num+1)/2);
  if(num === 0 || num < 0)
   {
     return res.write("The number is not priem");
   }
     else if(num === 2 || num === 3)
   {
     return res.write("The number is priem");
   }
    else if(num % 2 === 0 || num === 1)
   {
     return res.write("The number is not priem");
   }
     else (isprime)
     for(let i = 3; i<=k; i=i+2)
     {
      if(num % i == 0)
      {
        count++;
        if(count<2)
       {
        return res.write("The number is not priem")
       }
      }
   
     } 
      return  res.write("The number is  priem"); 
 } 
});
server.listen(3333);
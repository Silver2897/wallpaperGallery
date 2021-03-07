export const fetchDataFromAPI = async() => {
   let response;
          try{  
            const results = await fetch('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0');
            response=results.json();
            
          }
          catch(error){
            response=error;
            console.log("Error",error)
          } 
          
          return response;
        };
 
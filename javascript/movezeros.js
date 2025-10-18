
    function pushZerosToEnd(arr) {
      
        // code here
        
        let nonzeroindex = 0
        
        for (let i = 0; i< arr.length; i++){
            
            if(arr[i] !== 0){
                [arr[nonzeroindex], arr[i]] = [arr[i],arr[nonzeroindex]]
                nonzeroindex++
            }
            
       }
       return arr
    }

console.log(pushZerosToEnd([3, 5, 0, 0, 4]))
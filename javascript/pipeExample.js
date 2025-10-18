const fs = require('fs');
const data = fs.createReadStream('input.txt',{encoding:'utf-8'})

const ws = fs.createWriteStream('output.txt')

// data.on('data', (chunk) => {
//     ws.write(chunk)
// })    

// instead of above code we can use pipe method

data.pipe(ws) 

//pipe example is more efficient then listening to data event and writing to writable stream
//because it handles backpressure
//backpressure -> if writable stream is slow then readable stream will be paused
//if writable stream is fast then readable stream will be resumed
//so it handles the flow of data between readable and writable stream
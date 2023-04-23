const path=require('path')
//
console.log(__dirname)
module.exports={
    entry:'./a.js',
    output:{
        path:path.resolve(__dirname,''),
        filename:'main1.js'
    },
    mode:'none'
}
const request = require("request")
const cheerio = require("cheerio")


request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary",cb)

function cb(error,response,html){
    if(error){
        console.error(error)
    }else{
        handlehtml(html)
    }
}


function handlehtml(html){

    let settool = cheerio.load(html)

    let contarr = settool('.ds-ml-4 p')

    let lastcommentry = settool(contarr[0]).text()
    console.log(lastcommentry)
}
const request = require('request')
const cheerio = require('cheerio')


request('https://www.worldometers.info/coronavirus/', cb)


function cb(error,response,html){
    if(error){
        console.error(error);
    }else{
       handlehtml(html);
    }
}


function handlehtml(html){
    let settool = cheerio.load(html)

    let contarr = settool('.maincounter-number span')

    let total_cases = settool(contarr[0]).text()
    console.log(total_cases)
    let death_cases = settool(contarr[1]).text()
    console.log( death_cases)
    let recovered_cases = settool(contarr[2]).text()
    console.log(recovered_cases)
}
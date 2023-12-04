//*********************** */
// GLOBAL VARIABLES
//************************ */
const apikey = "AAYEBOO4YJ3BWSH"
const baseURL = "https://www.alphavantage.co/query"
let url;



//*********************** */
// Functions
//************************ */
// function to fetch the data

function getCompanyInfo(ticker, infoType) {


    if (infoType === "Overview") {
        console.log('here')
        url = `${baseURL}?function=${infoType}&symbol=${ticker}&apikey=${apikey}`
    }
    else if (infoType === 'TIME_SERIES_DAILY') {
        // compact gives last 100 days of data
        url = `${baseURL}?function=${infoType}&symbol=${ticker}&outputsize=compact&apikey=${apikey}`
    }

    //fetch from the url
    fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data))
    
}


//*********************** */
// Main Code
//************************ */

//initial call to populate the first ticker
getCompanyInfo("IBM",'Overview')
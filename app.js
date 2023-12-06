//*********************** */
// GLOBAL VARIABLES
//************************ */
const apikey = "AAYEBOO4YJ3BWSH"
const baseURL = "https://www.alphavantage.co/query"
let url;

const aboutCompany = $(".about")  // company 'About' section



//*********************** */
// Functions
//************************ */
// function to fetch the data

function getCompanyInfo(ticker) {


    // if (infoType === "Overview") {
    //     console.log('here')
    //     url = `${baseURL}?function=${infoType}&symbol=${ticker}&apikey=${apikey}`
    // }
    // else if (infoType === 'TIME_SERIES_DAILY') {
    //     // compact gives last 100 days of data
    //     url = `${baseURL}?function=${infoType}&symbol=${ticker}&outputsize=compact&apikey=${apikey}`
    // }

    url = `${baseURL}?function=Overview&symbol=${ticker}&apikey=${apikey}`

    //fetch from the url
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        renderCompanyName(data)
        renderAboutCompany(data)
    })

}

// function to render Company name
function renderCompanyName(data) {
    // grab div for company name
    const companyName = $(".company-name")
    companyName.append(
        ` <h1>${data.Name}</h1>`
    )
}

// function that render 'About' section
function renderAboutCompany(data){

    // alter the HTML inside the div.about
    aboutCompany.append(
        `<h2>About</h2>
        <p>${data.Description}</p>
        <div class="address">${data.Address}</div>
        <div class="sector">${data.Sector}</div>
        <div class="industry">${data.Industry}</div>
        `
    )
    
}

//function to handle the form submission
function handleSubmit(event){
    
    // prevent the refreshing of the page from the form submission
    // refreshing of the page is the default behaviour of forms
    event.preventDefault()

    //grab the form from the event
    const form = event.target
    
    //create a FormData object to access the form data
    const formData = new FormData(form)
    //grab the movieTitle
    const ticker = formData.get("ticker") //name='ticker"
    
    //fetch the specified ticker
    getCompanyInfo(ticker)

    // clear the input form
    const $input = $("input")
    $input.val("")

}


//*********************** */
// Main Code
//************************ */

//initial call to populate the first ticker
// getCompanyInfo("BLK")
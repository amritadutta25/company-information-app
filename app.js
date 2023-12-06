//*********************** */
// GLOBAL VARIABLES
//************************ */
const apikey = "IKS3X65IYOT28R6B"
const baseURL = "https://www.alphavantage.co/query"
let url;

const companyName = $(".company-name") // company name
const aboutCompany = $(".about")  // company 'About' section


//*********************** */
// HELPER FUNCTIONS
//************************ */

// function to make the starting letter of each word in a string Uppercase and all other letters as Lowercase
//  e.g. capitalizeWords("hello WORLD")) => Output: "Hello World"
function capitalizeWords(str) {

    // /\b\w/g will match the first character of each word in the string
    return str.toLowerCase().replace(/\b\w/g, 
    function(char) {
        return char.toUpperCase();
    });
}



//*********************** */
// FUNCTIONS
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
    companyName.append(
        ` <h1>${data.Name}</h1>`
    )
}

// function that render 'About' section
function renderAboutCompany(data){

    // alter the HTML inside the div.about
    aboutCompany.append(
        `<h2>About</h2>
        <hr>
        <p class="description">${data.Description}</p>
        <div class="row more-about">
            <div class="sector">
                <h4>Sector</h4>
                <span>${capitalizeWords(data.Sector)}</span>
            </div>
            <div class="industry">
                <h4>Industry</h4>
                <span>${capitalizeWords(data.Industry)}</span>
            </div>
            <div class="address">
                <h4>Address</h4>
                <span>${data.Address}</span>
            </div>
        </div>
        `
    )
    
}

// function that render 'Key Statistics' section
function renderStatsCompany(data){

    // alter the HTML inside the div.about
    aboutCompany.append(
        `<h2>About</h2>
        <hr>
        <p class="description">${data.Description}</p>
        <div class="row more-about">
            <div class="sector">
                <h4>Sector</h4>
                <span>${capitalizeWords(data.Sector)}</span>
            </div>
            <div class="industry">
                <h4>Industry</h4>
                <span>${capitalizeWords(data.Industry)}</span>
            </div>
            <div class="address">
                <h4>Address</h4>
                <span>${data.Address}</span>
            </div>
        </div>
        `
    )
    
}

//function to handle the form submission
function handleSubmit(event){

    // clearing previous search result
    companyName.html('')
    aboutCompany.html('')

    
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

// add the function to the form submission
$("form").on("submit", handleSubmit)

//initial call to populate the first ticker
getCompanyInfo("BLK")
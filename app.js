//*********************** */
// GLOBAL VARIABLES
//************************ */
const apikey = "IKS3X65IYOT28R6B"
const baseURL = "https://www.alphavantage.co/query"
let url;

const companyName = $(".company-name") // company name
const aboutCompany = $(".about")  // company 'About' section
const statsCompany = $(".stats") // company 'Statistics' section


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

// function to format large numbers into 'billion', 'million' 
function formatLargeNumber(num) {
    if (num >= 1000000000000)
    {   
        // keeping upto 2 decimal places
        return (num / 1000000000000).toFixed(2) + 'T'
    }
    else if (num >= 1000000000) 
    {
        return (num / 1000000000).toFixed(2) + 'B';
    } 
    else if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + 'M';
    } else {
        return num.toString();
    }
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
        renderStatsCompany(data)
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

// function that render 'Statistics' section
function renderStatsCompany(data){

    // alter the HTML inside the div.stats
    statsCompany.append(
        `<h2>Statistics</h2>
        <hr>
        <div class="row stats-items">
            <div class="stat">
                <div class="row stat-info">
                    <h4>Market Cap</h4>
                    <button class="info-button">i</button>
                </div>
                <span>${formatLargeNumber(data.MarketCapitalization)}</span>
            </div>
            <div class="stat">
                <h4>EBITDA</h4>
                <span>${formatLargeNumber(data.EBITDA)}</span>
            </div>
            <div class="stat">
                <h4>Price-Earnings ratio</h4>
                <span>${data.PERatio}</span>
            </div>
            <div class="stat">
                <h4>Dividend Per Share</h4>
                <span>${data.DividendPerShare}</span>
            </div>
            <div class="stat">
                <h4>Dividend Yield</h4>
                <span>${data.DividendYield*100}%</span>
            </div>
            <div class="stat">
                <h4>52 Week High</h4>
                <span>$${data['52WeekHigh']}</span>
            </div>
            <div class="stat">
                <h4>52 Week Low</h4>
                <span>$${data['52WeekHigh']}</span>
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
    statsCompany.html('')

    
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


// Todo: for statistics - do a 'i' button that when clicked opens a pop up in that space and says what it means
// Todo: try adding one graph which is diplayed when user wants to see it
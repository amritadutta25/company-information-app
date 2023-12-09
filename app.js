//*********************** */
// GLOBAL VARIABLES
//************************ */
const apikey = "IKS3X65IYOT28R6B"
const baseURL = "https://www.alphavantage.co/query"
let url

const companyName = $(".company-name") // company name
const aboutCompany = $(".about")  // company 'About' section
const statsCompany = $(".stats") // company 'Statistics' section

// object with additional stat info
const statInfo = {
    marketcap: "Market capitalization refers to the total market value of a company's outstanding shares of stock.",
    ebitda: "A financial indicator measuring a company's profitability before accounting for interest, taxes, depreciation, and amortization.",
    peratio: "A measure comparing a company's current stock price to its per-share earnings, often used to assess the value and growth potential of stocks.",
    divshare: "The amount of dividend a company pays out to its shareholders for each share owned.",
    divyield: "A financial ratio that shows how much a company pays out in dividends each year relative to its stock price.",
    weekhigh: "The highest price at which a stock has traded during the previous 52 weeks.",
    weeklow: "The lowest price at which a stock has traded during the previous 52 weeks."
}


//*********************** */
// HELPER FUNCTIONS
//************************ */

// function to make the starting letter of each word in a string Uppercase and all other letters as Lowercase
//  e.g. capitalizeWords("hello WORLD")) => Output: "Hello World"
function capitalizeWords(str) {

    // /\b\w/g will match the first character of each word in the string
    return str.toLowerCase().replace(/\b\w/g, 
    function(char) {
        return char.toUpperCase()
    })
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
        return (num / 1000000000).toFixed(2) + 'B'
    } 
    else if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + 'M'
    } else {
        return num.toString()
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
        // if search produces no result, add content to .no-result div
        if (Object.keys(data).length === 0) {
            $(".no-result").append(`No result found. Please enter a valid ticker!`)

            // add some styling to add some margin
            $(".no-result").css({
                margin: "50px 10px"
            })
        }
        else {
            renderCompanyName(data)
            renderAboutCompany(data)
            renderStatsCompany(data)
        }

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
                <span class="about-value">${capitalizeWords(data.Sector)}</span>
            </div>
            <div class="industry">
                <h4>Industry</h4>
                <span class="about-value">${capitalizeWords(data.Industry)}</span>
            </div>
            <div class="address">
                <h4>Address</h4>
                <span class="about-value">${data.Address}</span>
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
                    <button class="info-button marketcap">i</button>
                </div>
                <span class="stat-num">${formatLargeNumber(data.MarketCapitalization)}</span>
            </div>
            <div class="stat">
                <div class="row stat-info">
                    <h4>EBITDA</h4>
                    <button class="info-button ebitda">i</button>
                </div>
                <span class="stat-num">${formatLargeNumber(data.EBITDA)}</span>
            </div>
            <div class="stat">
                <div class="row stat-info">
                    <h4>Price-Earnings ratio</h4>
                    <button class="info-button peratio">i</button>
                </div>
                <span class="stat-num">${data.PERatio}</span>
            </div>
            <div class="stat">
                <div class="row stat-info">
                    <h4>Dividend Per Share</h4>
                    <button class="info-button divshare">i</button>
                </div>
                <span class="stat-num">${data.DividendPerShare}</span>
            </div>
            <div class="stat">
                <div class="row stat-info">
                    <h4>Dividend Yield</h4>
                    <button class="info-button divyield">i</button>
                </div>
                <span class="stat-num">${data.DividendYield*100}%</span>
            </div>
            <div class="stat">
                <div class="row stat-info">
                    <h4>52 Week High</h4>
                    <button class="info-button weekhigh">i</button>
                </div>
                <span class="stat-num">$${data['52WeekHigh']}</span>
            </div>
            <div class="stat">
                <div class="row stat-info">
                    <h4>52 Week Low</h4>
                    <button class="info-button weeklow">i</button>
                </div>
                <span class="stat-num">$${data['52WeekLow']}</span>
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
    $(".no-result").html('') // remove the no search result if any in the previous search
    $(".home-page").remove()
    $(".footer").remove()
    
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

// function to display additional info about the stats
function displayInfo(event) {

    event.preventDefault()

    const infoBox = $('.info-box')

    const buttonClicked = $(event.target)

    let className = buttonClicked.attr('class') // getting class
    className = className.split(' ')[1] // getting the second class to get the specfic button class name

    infoBox.append(
        `${statInfo[className]}`
    )


    infoBox.css({
        display: 'block',

        // top of info-box aligns with the top of the element clicked, that is, info-button(event.target)
        top: buttonClicked.position().top + 'px',

        // left of info-box is on the Right side of the button (left + outerwidth = right edge of the clicked button)
        // Cannot directly use buttonClicked.position().right, since position() only has top and left properties
        left: (buttonClicked.position().left + buttonClicked.outerWidth()) + 'px' 
    })
}


//*********************** */
// Main Code
//************************ */

// function for form submission
$("form").on("submit", handleSubmit)


// Event Delegation: .info-buttons are added to the DOM dynamically after the initial page load. Since the .info-button elements do not exist when we initially bind the event listener, the click event is not attached to these elements.
// Here, we are attaching the event listener to a static parent element 'document' but telling the event listener to only execute when .info-button is clicked
$(document).on("click", ".info-button", displayInfo)


// hide the info-box when clicked anywhere else other than .info-box (the dialog box) and .info-button (the button)
$(document).on('click', function(event) {
    if (!$(event.target).closest('.info-button, .info-box').length) {
        
        //clear the info-box content, otherwise in the second click on the .info-button, the content shows up twice and so on
        $('.info-box').html("")
        
        $('.info-box').hide()
    }
})
# Project
### By somebody

DEPLYOYED SITE: [Click Here](https://amritadutta25.github.io/sealproject1/)

## Description on Project

>The project aims to build a website to report company financial data based on user input. We are using a financial API called Alpha Vantage to retrieve data like daily price, company name, company description, company location etc.


## Details about the API

We are going to use the API with two different endpoints as below:

- `https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo`: This returns a json array with all the company details and overview

<!-- - `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=compact&apikey=demo`: This returns a json array of daily time series data. -->

Sample Fetch/Ajax called:
```js
const url = "https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo"
fetch(apiURL)
.then((res) => res.json())
.then((data) => console.log(data))
```

The Data I get back:
```json
{
  "Symbol": "IBM",
  "AssetType": "Common Stock",
  "Name": "International Business Machines",
  "Description": "International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries. The company began in 1911, founded in Endicott, New York, as the Computing-Tabulating-Recording Company (CTR) and was renamed International Business Machines in 1924. IBM is incorporated in New York. IBM produces and sells computer hardware, middleware and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology. IBM is also a major research organization, holding the record for most annual U.S. patents generated by a business (as of 2020) for 28 consecutive years. Inventions by IBM include the automated teller machine (ATM), the floppy disk, the hard disk drive, the magnetic stripe card, the relational database, the SQL programming language, the UPC barcode, and dynamic random-access memory (DRAM). The IBM mainframe, exemplified by the System/360, was the dominant computing platform during the 1960s and 1970s.",
  "CIK": "51143",
  "Exchange": "NYSE",
  "Currency": "USD",
  "Country": "USA",
  "Sector": "TECHNOLOGY",
  "Industry": "COMPUTER & OFFICE EQUIPMENT",
  "Address": "1 NEW ORCHARD ROAD, ARMONK, NY, US",
  "FiscalYearEnd": "December",
  "LatestQuarter": "2023-09-30",
  "MarketCapitalization": "144784146000",
  "EBITDA": "13663000000",
  "PERatio": "20.46",
  "PEGRatio": "0.418",
  "BookValue": "25.28",
  "DividendPerShare": "6.62",
  "DividendYield": "0.0419",
  "EPS": "7.75",
  "RevenuePerShareTTM": "67.3",
  "ProfitMargin": "0.113",
  "OperatingMarginTTM": "0.145",
  "ReturnOnAssetsTTM": "0.0455",
  "ReturnOnEquityTTM": "0.328",
  "RevenueTTM": "61170999000",
  "GrossProfitTTM": "32688000000",
  "DilutedEPSTTM": "7.75",
  "QuarterlyEarningsGrowthYOY": "0.126",
  "QuarterlyRevenueGrowthYOY": "0.046",
  "AnalystTargetPrice": "132.47",
  "TrailingPE": "20.46",
  "ForwardPE": "15.67",
  "PriceToSalesRatioTTM": "2.335",
  "PriceToBookRatio": "6.19",
  "EVToRevenue": "3.112",
  "EVToEBITDA": "13.46",
  "Beta": "0.762",
  "52WeekHigh": "160.59",
  "52WeekLow": "117.38",
  "50DayMovingAverage": "145.7",
  "200DayMovingAverage": "136.76",
  "SharesOutstanding": "913119000",
  "DividendDate": "2023-12-09",
  "ExDividendDate": "2023-11-09"
}
```

<!-- ```js
const url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=demo"
fetch(apiURL)
.then((res) => res.json())
.then((data) => console.log(data))
```

The Data I get back:
```json
{
    "Meta Data": {
        "1. Information": "Daily Prices (open, high, low, close) and Volumes",
        "2. Symbol": "IBM",
        "3. Last Refreshed": "2023-12-01",
        "4. Output Size": "Full size",
        "5. Time Zone": "US/Eastern"
    },
    "Time Series (Daily)": {
        "2023-12-01": {
            "1. open": "158.4100",
            "2. high": "160.5900",
            "3. low": "158.0000",
            "4. close": "160.5500",
            "5. volume": "4871860"
        },
        "2023-11-30": {
            "1. open": "156.9500",
            "2. high": "158.6000",
            "3. low": "156.8900",
            "4. close": "158.5600",
            "5. volume": "6740622"
        },
        "2023-11-29": {
            "1. open": "156.1500",
            "2. high": "157.5100",
            "3. low": "156.0200",
            "4. close": "156.4100",
            "5. volume": "3568887"
        },
        "2023-11-28": {
            "1. open": "155.4400",
            "2. high": "155.7450",
            "3. low": "154.8600",
            "4. close": "155.6500",
            "5. volume": "2666182"
        },
        "2023-11-27": {
            "1. open": "154.9900",
            "2. high": "156.1350",
            "3. low": "154.7500",
            "4. close": "155.5700",
            "5. volume": "4053093"
        },
        "2023-11-24": {
            "1. open": "155.1300",
            "2. high": "155.4000",
            "3. low": "153.9200",
            "4. close": "155.1800",
            "5. volume": "1799161"
        },
        "2023-11-22": {
            "1. open": "154.5000",
            "2. high": "155.7050",
            "3. low": "154.1600",
            "4. close": "155.1300",
            "5. volume": "3045091"
        },
        "2023-11-21": {
            "1. open": "154.6000",
            "2. high": "154.6600",
            "3. low": "153.5100",
            "4. close": "153.9100",
            "5. volume": "2859508"
        },
        "2023-11-20": {
            "1. open": "152.5100",
            "2. high": "154.6800",
            "3. low": "152.3500",
            "4. close": "154.3500",
            "5. volume": "3658936"
        },
        "2023-11-17": {
            "1. open": "153.2900",
            "2. high": "153.5000",
            "3. low": "152.4601",
            "4. close": "152.8900",
            "5. volume": "4426676"
        },
        "2023-11-16": {
            "1. open": "153.0000",
            "2. high": "153.3500",
            "3. low": "152.1300",
            "4. close": "153.0600",
            "5. volume": "3519172"
        }
    }
}
``` -->

## Mockup

The website will have a search bar where user inputs the ticker they want to know about.
Once we receive the request, the website will display an overview of the company like its name, location, asset type, plus some stats like 52 week high trading price, 52 week low trading price.

#### Desktop View

![My Desktop View](https://wireframepro.mockflow.com/view/companyreport)

#### Mobile View

![My Mobile View](https://i.imgur.com/5Bs7N6B.png)

## Schedule of Work

|Day | Goal | What I did accomplish |
|----|------|-----------------------|
| Sat | Create Readme, Deploy, Get Approval | |
| Sun | Build fetch of data in JS file ||
| Mon | Render data from API on screen ||
| Tues| Build form for user to interact with ||
| Wed | wrap up functionality ||
|Thurs| mobile layout styling ||
| Fri | Desktop layout styling ||
| Sat | Present Project ||
# Project
### By somebody

DEPLYOYED SITE: [Click Here](https://sealproject1.vercel.app/)

## Description on Project

A paragraph discussing the idea of your project, the API you are using and desired user experience.

> I am creating a perfume maker, we generate list of perfume ingredient using the items from the perfume ingredient api. Users will select ingredients and generate an imaginary perfume.

## Details about the API

Give me a brief description of the API you are using and how you plan on using it. Does it use some sort of authentication like an APIkey. List some of the urls are using below.

- `https://www.perfumeapi.com/ingredients`: This returns a json array with all the different ingedients

Sample Fetch/Ajax called:
```js
const url = "https://www.perfumeapi.com/ingredients"
fetch(url)
.then((res) => res.json())
.then((data) => console.log(data))
```

The Data I get back:
```json
[
  {
    "ingredient": "Bergamot",
    "description": "A citrus fruit with a bright, uplifting scent."
  },
  {
    "ingredient": "Lavender",
    "description": "A flowering plant with a calming, relaxing scent."
  },
  {
    "ingredient": "Rose",
    "description": "A flowering plant with a romantic, feminine scent."
  },
  {
    "ingredient": "Jasmine",
    "description": "A flowering plant with an exotic, sensual scent."
  },
  {
    "ingredient": "Sandalwood",
    "description": "A woody plant with a warm, earthy scent."
  },
  {
    "ingredient": "Patchouli",
    "description": "A herb with a deep, musky scent."
  },
  {
    "ingredient": "Vanilla",
    "description": "A spice with a sweet, gourmand scent."
  },
  {
    "ingredient": "Amber",
    "description": "A fossilized resin with a warm, balsamic scent."
  },
  {
    "ingredient": "Musk",
    "description": "An animal secretion with a sensual, musky scent."
  },
  {
    "ingredient": "Oud",
    "description": "A type of agarwood with a dark, mysterious scent."
  }
]
```

## Mockup

Here put a mix of text explanation plus a picture giving us an idea of the layout of your website.

#### Desktop View

![My Desktop View](https://i.imgur.com/5Bs7N6B.png)

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
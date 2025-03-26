/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      homeHeroImg: "url(public/Images/homeHeroImg.jpeg)",
      connectivityImg: "url(public/Images/connectivityImg.jpeg)",
      earthimg: "url(public/images/earthImg.jpeg)",
      bySpaceX:  "url(public/images/bySpaceX.jpeg)",
      trialEarthImg: "url(public/images/trialEarthImg.jpeg)",
      residentialHero:  "url(public/images/residentialHeroImg.jpeg)",
      residentialEarth: "url(public/images/residentialEarthImg.jpeg)",
      highSpeedInternet: "url(public/images/highSpeedInternet.jpeg)",
      designedEarth:  "url(public/images/designEarthImg.jpeg)",
      residentialWeather: "url(public/images/residentialWeather.jpeg)",
      standardBose:  "url(public/images/residential_hardware.jpg)",
      roamHero: "url(public/images/roamHero.jpeg)",
      workPlay: "url(public/images/work&Play.jpeg)",
      residentialEarth3: "url(public/images/residentaialEarth3.jpeg)",
      starlinkOnMotion: "url(public/images/starlinkMotion.jpeg)",
      roamEarth3: "url(public/images/roamEarth2.jpeg)",
      roamEarth1: "url(public/images/roamEarth1.jpeg)",
    },
  },
  plugins: [],
};

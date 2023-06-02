# Getting Started with Create React App

This project was done using:

-   ReactJS
-   TypeScript
-   TailwindCSS and Daisyui
-   React Router v6
-   React Query aka TanstackQuery
-   Axios
-   Chart.js and React-chartjs-2
-   Leaflet and React-leaflet

## Setting up the app

-   Clone the project from the github repo
-   Go to the project directory
-   run `npm i` or `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start` to start the project

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## API endpoints

### `https://disease.sh/v3/covid-19/countries`

This endpoint returns the list of all the countries. The data looks as follow: `CountryData { updated: number; country: string; countryInfo: { _id: number; iso2: string; iso3: string; lat: number; long: number; flag: string; }; cases: number; todayCases: number; deaths: number; todayDeaths: number; recovered: number; todayRecovered: number; active: number; critical: number; casesPerOneMillion: number; deathsPerOneMillion: number; tests: number; testsPerOneMillion: number; population: number; continent: string; oneCasePerPeople: number; oneDeathPerPeople: number; oneTestPerPeople: number; activePerOneMillion: number; recoveredPerOneMillion: number; criticalPerOneMillion: number; }`

We use the data from this endpoint to display the map.

### `https://disease.sh/v3/covid-19/historical/all?lastdays=all`

This endpoint returns an object with the following keys [cases, recovered, deaths]. We only used the value of cases and grouped the data by months. The final data looks as follow: `groupedData: {Jan 2021: 200000, Feb 2021: 300000, Mar 2021: 4300000 and so on ... }`

We use the data from this endpoint to display the map.

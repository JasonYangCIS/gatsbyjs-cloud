# www.jasonyangdev.com
This is the code for my web portfolio: www.jasonyangdev.com
This is build with GatsbyJS and Contentful along with numerous other API's for the "fun code snippet" section

## Fun Code Snippets
https://www.jasonyangdev.com/#code-snippets
This section consists of 4 custom components (planning to build more) for experimental and learning purposes as well as to challenge myself to build something interesting/fun.

### Bill Spliiter
* Custom build that will help calculate how much each person owes at the end of dinner.
* Add as many people as you like to split bills.
* Add items that the person ordered.
* Adjust Tax and Tip percentages.

### Giphy
* Dynamic asynchronous requests to get GIFs of the entered search term
* Hooks into giphy API to get GIFs

### Weather
* Hooks into [Open Weather API](https://openweathermap.org/api) to get dynamic weather data for LA area.
* Parses the weather and use [Open Weather Icons](https://www.npmjs.com/package/open-weather-icons) to display flat icons for current weather conditions.

### Movie API [deprecated]
* Real-time dynamic movie data fetched from [The Movie DB](https://www.themoviedb.org/documentation/api).
* Parse movies data and display responsively.

### Deployment
Delete everything in the bucket: `gsutil rm 'gs://www.jasonyangdev.com/**'`  
Copy everything from public into the bucket: `gsutil -m cp -r public/* 'gs://www.jasonyangdev.com'`
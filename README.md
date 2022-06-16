
What architectural decisions did you make and why? Elaborate on strengths and weaknesses.

- Used stitches for CSS - while this project shouldn't be CSS heavy it's my preferred css in js library formatting wise so i'd rather use it than standard css. 
- For the accordion i thought it would be best to conditionally render the container for the char.id that matched the one selected and set as state. I also added css selectors based on state to make needed visual changes
- Used buttons instead of divs for accessibility - can tab through and enter to open a character tile

The api/fun stuff - I started by running the characters api and then knew i'd need to use the location part of the response to get the location data. to do this i implemented a getURL handler that would take the URL from the expanded character list, set the state, pass that state to the details container to help ensure it runs when needed and not all the time/for all components. I also made the async function in the API hook run based on the url condition being satisfied, allowing it run when it changes. I originally thought it might be okay to do 1 api with a changing URL but i felt it was more clear to use two and separate those needs. 


How did you handle error cases? Eg: botched response, no response, etc.
- Handled errors visually on the user end mostly - if response was not there, render something different on the screen while waiting/error messages
- No direct error handling in API, something i would do with more time.

How did you test the app?
- While building i console.log'd the responses from the api call to see the response format
- tested each function as i went along by displaying and console.logging data - did not use a testing script. 


What third party libraries/ external code snippets did you use, if any?
- stitches for css as mentioned
- looked up a quick guide on accordions but mostly ended up doing it my own way - had to avoid things like display:none for animation purposes. Also used stitches built in state feature. 



If you had more time, what would you have done differently?
I probably would've put more of a focus on error handling the API in the hook as opposed to outside of it exclusively. All in all though, with more time i'd probably make a few more CSS edits because I got WAY too into designing this - was a fun project.





## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

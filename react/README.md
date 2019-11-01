
## Notes of tutorial: Thinking in React
[https://reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)


### Start With A Mock
### Step 1: Break The UI Into A Component Hierarchy
- ##### Single responsibility principle

### Step 2: Build A Static Version in React
- ##### Don't use state at all
- ##### One-way data flow

### Step 3: Identify The Minimal (but complete) Representation Of UI State
- ##### DRY: Don't Repeat Yourself
- ##### Think of all of the pieces of data in application
- ##### Let's go through each one and figure out minimal state, ask three questions:
	- ###### Is it passed in from a parent via props? If so, it isn’t state.
	- ###### Doest it remain unchanged over time? If so, it isn’t state.
	- ###### Can you compute it based on any other state or props in your component? If so, it isn’t state.

### Step 4:Identify Where Your State Should Live
- ##### This is often the most challenging part for newcomers to understand.
- ##### Steps to identify:
	- ###### Identify every component that renders something based on that state.
	- ###### Find a common owner component (a single component above all the components that need the state in the hierarchy).
	- ###### Either the common owner or another component higher up in the hierarchy should own the state.
	- ###### If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.
- ##### Apply `state` and `props` with one-way data flow

### Step 5: Add Inverse Data Flow
- ##### Use `onChange`, `onClick`, `value`, `event` as `e` in DOM
- ##### Create callbacks functions include `setState()` to change `state` data

## #
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

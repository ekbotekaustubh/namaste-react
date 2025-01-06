# Namaste React 

# Parcel
- Dev Build
- Local Server
- HMR: Hot Module Replacement
- File watching algorithm - written in c++
- Caching - Faster builds
- Image Optimization
- Minification of file (code)
- Bundling
- Compress
- Consistent hashing
- Code Splitting
- Differential Bundling - Support Older Browsers (Different bundle for each version)
- Diagnostics
- Error Reporting
- HTTPS
- Tree Shaking - Remove unused code.
- Different build for production and dev.
- JSX transpiled to react by Babel (JSX has syntax like html or xml)

#Babel and JSX
- Javascript compiler or transpiler
- Babel converts jsx to React as follow
- JSX code ex.
  ```JSX
    const jsxHeading = <h1 id="heading" className="heading" tabIndex="1">Namaste React using JSX</h1>;
  ```
- Coverted to React
  ```React
    const jsxHeading = /*#__PURE__*/React.createElement("h1", {
      id: "heading",
      className: "heading",
      tabIndex: "1"
    }, "Namaste React using JSX");
  ```
- Multiline JSX: Use round brackets 
  ```MultilineJSX
     const jsxHeading = (<h1 id="heading" className="heading" tabIndex="1">
        Namaste React using JSX
  </h1>);
  ```
- In React everything is a component
- There are 2 types of components
    - Class based component (Older way => Uses javascript classes)
    - Functional component (New way => Uses javascript functions)
        - React functional component is just a normal javascript function
        - Name it with a capital letter, otherwise it will give error.
        - There are two ways to create functional component
            ```Code
              const Heading = () => {
                return <h1 id="heading" className="heading" tabIndex="1">Namaste React using JSX</h1>;
              }
            ```
            ```shorthand
              const Heading () => (<h1 id="heading" className="heading" tabIndex="1">Namaste React using JSX</h1>);
            ```
    - Component composition
        - Inclusion of one or more components in single component is nothing but Component Composition.
        - We can include component in 3 ways
            - ```{Title()}```
            - ```<Title></Title>```
            - ```<Title />```

- New app for delivering the food.
- Components
    - Header
        - Logo
        - New Items
    - Body
        - Search
        - Restaurant Container
            - RestaurantCart
    - Footer
        - Copyright
        - Links
        - Address
        - Contact
    
- Config Driven UI
- There are two types of export
    - Default Import / Export
        - ```export default Component;```
        - ```import component from "path";```
    - Named Import / Export
        - ```export const Component = {};```
        - ```import {Component} from "path"```
- React Hooks (State Variable)
    - Normal js functions
    - There are many hooks but following two you will use more 
    - useState()
        - Whenever state variable changes, react re-render the component
        - Never create useState variables outside your component. It will throw error.
        - Try to call hooks on the top, as there will be inconsistency and code look ugly.
        - Never create useState inside if condition, this can create inconsistency in your code.
        - Never create useState inside loop, condition, function. You can create them inside component at top.
    - useEffect()
        - useEffect hook has 2 parameters   
            - Callback function
            - Dependency array
        - useEffect get called after every render of that component.
        - Dependency array is not mandatory.
        - So if dependency array is not passed then, useEffect get call after every render.
        - If dependency array is passed, but it is empty, then useEffect is called after initial render. And it renders just once.
        - If dependency array is passed and not empty, then useEffect will get called every time dependency get changed.
        - For Ex.
          ```
          useEffect(() => {
            console.log("useEffect called");
          }, [buttonName])
          ```
        - Dependency is nothing but a state variable.
- React uses reconciliation algorithm. Also known as React fiber.
    - In React 16, new algorithm come, known as React fiber.
    - It is a new way to update the dom
    - It creates virtual dom from actual dom.
    - Diff algorithm find out the differences between current object and new updated object.
    - After finding differences it update the html.
    - This is the reason, why react is fast.
- There are two approaches for rendering API data (We are going to use 2nd approach)
    - 1) When page loads -> call API and wait for response -> After response render UI
    - 2) When page loads -> render with skeleton -> call API and wait for response -> After response re-render UI
- Whenever state variable update, react triggers a reconciliation cycle (re-render the component)    
- 2 types of routing in web app
    - 1) Client side routing
        - All the component is loaded in app in browser
        - It just loads that component
        - No network call
    - 2) Server side routing
        - From browser, we enter url
        - It makes a network call 
        - Fetch page and show on browser.
- Never directly update state variable. Use set functions.
    - For functional components we can have set methods for that variable.
    - in class base component use this.setState() function.
    - If you have 10 state variable and you are updating only 2 variables using setState method, 
      then it will update only 2 variables and it won't touch other 8.
- React Lifecycle of class based component
    - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    - React Lifecycle - 
        - Parent constructor
        - Parent Render
        - First Child Constructor
        - First Child Render
        - Second Child Constructor
        - Second Child Render
          ---------------- Updates DOM here ----------------------
        - First Child Component Did Mount
        - Second Child Component Did Mount
        - Parent Component Did Mount
    - React life cycle works in 2 phases
        - Render Phase
            - This is very fast phase.
            - Here it renders the component. 
        - Commit Phase
            - This phase take time. 
            - We can call APIs in this phase.
    - React batches all parent  / child constructor and render methods
    - Update the DOM
    - Then it calls componentDidMount method.
    - Then it re-render the page.
    
    - React lifecycle of single class based component
    - Constructor get called
    - Render get called (with dummy data)
    - DOM updated with dummy data
    - componentDidMount get called
        - We make API call in this function
        - We fill state variable with response from API
    - Whenever setState get called, it calls render method again with API data
    - DOM Updated with new API data
    - componentDidUpdate get called.
    - Once we go to other page, componentWillUnmount get called.
        - In this method we can clear the things.
        - Ex. If we started setInterval in componentDidMount, we need to call clearInterval in componentWillUnmount.
    - Same thing in function based components
        - If we call setInterval in useEffect, then in return of setEffect we need to clear it.
- Parcel bundle the application in one file.
  but it will be a problem that if application is big and bundled in one file.
  It will take time to load. Same case with small application and multiple bundles.
  So Parcel will help you to create bundle chunks and this is called as Chunking, code splitting, dynamic Bundling, lazy loading, dynamic importing.    
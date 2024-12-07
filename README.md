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
    - useEffect()
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
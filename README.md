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


import React from 'react';
import './BlogQA.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
const BlogQA = () => {
    const myText =
        `import { useState } from 'react';

    function Example() {
      const [isActive, setIsActive] = useState(false);
    
      const handleClick = () => {
        setIsActive(!isActive);
      };
    
      return (
        <button onClick={handleClick}>
          {isActive ? 'Active' : 'Inactive'}
        </button>
      );
    }`


    const myText2 =
        `import { useEffect } from 'react';

        function MyComponent({ selectedItem }) {
          useEffect(() => {
            document.title = 'Selected Item: \${selectedItem}';
          }, [selectedItem]);
        
          return (
            // Your component code here
          );
        }`

    
    const myText3 = `import { useEffect } from 'react';

    function MyComponent() {
      useEffect(() => {
        const handleResize = () => {
          console.log('Window resized!');
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      return (
        // Your component code here
      );
    }`


    const myText4 = `import { useState, useEffect } from 'react';

    function MyComponent() {
      const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1000);
    
        return () => {
          clearTimeout(timer);
        };
      }, []);
    
      return (
        <div style={{ opacity: isVisible ? 1 : 0 }}>
          Hello World!
        </div>
      );
    }
    `

    const myText5 = `function MyComponent(props) {
        return <div>Hello, {props.name}!</div>;
      }
      
      ReactDOM.render(
        <MyComponent name="Alice" />,
        document.getElementById('root')
      );
      `
    
    const myText6 = `
    function Counter() {
        const [count, setCount] = useState(0);
      
        const incrementCount = () => {
          setCount(count + 1);
        };
      
        return (
          <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
          </div>
        );
      }
      
      ReactDOM.render(<Counter />, document.getElementById('root'));
      `

    return (
        <div className='QAContainer'>
            <h3>1. Props Vs State</h3>
            <p>In React, props and state are both used to manage data in a component, but they serve slightly different purposes.

props (short for "properties") are passed down to a component from its parent component. They are read-only and cannot be modified by the component itself. Instead, they are used to configure the component and provide data for it to render. props are usually used for data that is expected to be consistent throughout the lifetime of the component. <br /> <br />

                Here's an example of passing props to a component:</p>
                <SyntaxHighlighter language="jsx" style={vs}>
                {myText5.trim()}
            </SyntaxHighlighter>

            <p>In this example, the name prop is passed to the MyComponent component and used to render a personalized greeting. <br /> <br />

state, on the other hand, is used to manage data that can change over time. It's similar to props, but it's managed internally by the component rather than being passed down from a parent. state is mutable, meaning it can be updated using the setState method. When state changes, React re-renders the component to reflect the new state. <br /> <br />

                Here's an example of using state in a component:</p>
                <SyntaxHighlighter language="jsx" style={vs}>
                {myText6.trim()}
            </SyntaxHighlighter>

            <p>In this example, the count state is managed internally by the Counter component and updated using the setCount function. When the "Increment" button is clicked, the count state is updated and the component re-renders to display the new count value.</p> <br /> <br />

            <h3>2. How does useState work?</h3>
            <p>useState is a hook provided by React that allows functional components to manage state.

                When we use the useState hook, you call it with an initial value, and it returns an array with two values: the current state value, and a function to update that value. React will automatically re-render the component when the state value changes, so we can use the current state value to render different content depending on its value. For Example:

            </p>
            <SyntaxHighlighter language="jsx" style={vs}>
                {myText.trim()}
            </SyntaxHighlighter>

            <p>In the code above, useState(false) initializes the isActive state to false. The setIsActive function can be used to update the isActive state value. When the handleClick function is called, it uses setIsActive to toggle the isActive value between true and false.

                React will automatically re-render the component when the state value changes, so we can use the current state value to render different content depending on its value.</p> <br /> <br />

            <h3>3. Purpose of useEffect other than fetching data</h3>
            <p>The useEffect hook in React has several use cases beyond just fetching data. Some examples include: <br /> <br />

                <b>#Updating the document title:</b> We can use useEffect to update the title of the page dynamically based on the state of your component. For example, we might want to update the title to display the name of the currently selected item in a list.</p>
                <SyntaxHighlighter language="jsx" style={vs}>
                {myText2.trim()}
            </SyntaxHighlighter> <br />

            <p><b>#Subscribing to events:</b> We can use useEffect to subscribe to browser events, such as window resize or keyboard events.</p>
            <SyntaxHighlighter language="jsx" style={vs}>
                {myText3.trim()}
            </SyntaxHighlighter> <br />

            <p><b>#Animating elements:</b> We can use useEffect to create animations by updating the state of component over time.</p>
            <SyntaxHighlighter language="jsx" style={vs}>
                {myText4.trim()}
            </SyntaxHighlighter> <br /> <br />

            <h3>4. How Does React work?</h3>
            <p>React is a JavaScript library for building user interfaces. It works by creating a virtual representation of your UI in memory, called the "virtual DOM". The virtual DOM is a lightweight copy of the actual DOM, with all the same properties and methods. <br /><br />

When we update our component's state or props, React uses a diffing algorithm to compare the new virtual DOM with the previous one, and determines the minimum number of changes needed to update the actual DOM to match the new state. This process is called "reconciliation".

React then applies these changes to the actual DOM, updating only the parts that need to be updated. This is more efficient than updating the entire DOM tree every time there's a change, as it minimizes the amount of work the browser has to do. <br /> <br />

One of the key benefits of React is its component-based architecture. Components are reusable building blocks that encapsulate both the UI and the logic that goes with it. This makes it easy to create complex UIs by composing smaller, simpler components.

React also provides a set of lifecycle methods that let us hook into different stages of a component's life. These methods allow us to initialize state, update the UI when props or state change, and perform cleanup when a component is removed from the DOM. <br /> <br />

React works seamlessly with other libraries and frameworks, making it easy to integrate with existing codebases. It also has a large and active community, which means there are plenty of resources and tools available to help us learn and use React effectively.</p>
            
        </div>
    );
};

export default BlogQA;
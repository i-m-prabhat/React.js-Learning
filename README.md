# React.js

### Official Documentation

<a href="https://react.dev">Latest Docs</a> |
<a href="https://legacy.reactjs.org/">Old Docs</a>  |
<a href="https://create-react-app.dev/">CRA(create react app)</a>

## Introduction to React.js

React is a JavaScript library developed by Facebook for building user interfaces (UIs). It is commonly used to create Single Page Applications (SPAs) and allows developers to create reusable UI components.

## Single Page Applications (SPAs)

A Single Page Application (SPA) is a type of web application that loads a single HTML page and dynamically updates its content using JavaScript APIs. This approach offers improved performance and a more fluid user experience by avoiding full-page reloads.

### Benefits of SPAs

Single Page Applications provide several benefits, including improved performance, faster navigation, and a more interactive user experience. By loading only the necessary data and content, SPAs can deliver a seamless browsing experience.

## React Components

Components in React are modular and reusable units of code that encapsulate a piece of UI functionality. They can be classified into two types: Class Components and Function Components. Components are structured to resemble JavaScript functions but return HTML-like JSX (JavaScript XML) code.

### Basic Structure of an Application

A typical React application can be divided into various components, such as:

- Header
- Body (Content)
- Sidebar

## React Installation Steps

To set up a React development environment, follow these steps:

1. Install Node.js and npm.
2. Set up a text editor, like VS Code.
3. Create a new React application using the command: `npx create-react-app App-Name`

## JSX: JavaScript XML

JSX, which stands for JavaScript XML or Extension, is a syntax extension for JavaScript. It allows developers to write HTML-like code within JavaScript. JSX gets converted into React elements, which are then rendered to the DOM.

### Rules of Writing JSX

- Wrap HTML code in a single top-level element.
- Close all tags.
- Use `className` instead of `class` and `htmlFor` instead of `for`.
- Use the ternary operator instead of if-else conditions.
- Wrap JavaScript expressions in curly braces `{}`.

## Props and State

- **Props**: Props, short for "properties," are used to pass data from a parent component to a child component in React. They are read-only and help maintain a unidirectional flow of data.

- **State**: State is a built-in object in React that holds data or information about a component. It can be modified based on user actions or other events. When the state of an object changes, React re-renders the component to reflect the changes in the browser.

## Rules of Using Hooks

1. Hooks must be used inside function components, not in class components.
2. Hooks need to be imported from the `react` library.
3. Hooks should be called at the top level of a component.
4. Hooks cannot be used conditionally; they should be used consistently.

## Examples of React Hooks

### `useState` Hook

The `useState` hook is used to manage state in functional components. It returns the current state value and a function to update that value.

Example:

```jsx
const [count, setCount] = useState(0);
const [data, setData] = useState("king");
```

### `useEffect` Hook

The `useEffect` hook is used for handling side effects in functional components, such as data fetching or DOM manipulation. It runs after the component has rendered.

Example:

```jsx
useEffect(() => {
    console.log("Component mounted");
}, []);
```

### `useRef` Hook

The `useRef` hook is used for accessing and interacting with DOM elements in functional components.

Example:

```jsx
import React, { useRef } from "react";

function App() {
    const refElement = useRef("");
    refElement.current.focus();
    refElement.current.style.color = "blue";
    refElement.current.value = "Random text";
}
```

### Prop Drilling

Prop drilling is a situation where props need to be passed through multiple levels of nested components. This can be addressed using context API or custom hooks for better state management. <br/>
Parent ➡ ChildA ➡ ChildB ➡ ChildC ➡ ChildD

### What is the Context API?

The Context API is a built-in feature in React (introduced in React 16.3) that enables data sharing between components without explicitly passing props through each level. It involves creating a context, providing values, and consuming those values in components.

```
create, provider, consumer

const data = createContext();
const name = "prabhat";
<data.Provider value={name}>
    <Child/>
</data.Provider>
<data.Consumer>
    {
        (name)=>{
            return(
                <h1>My name is {name}</h1>
            )
        }
    }
</data.Consumer>
```

Example:

```
// parent component

import React,{createContext} from "react";
import Child from "./Child";

const data = createContext();
const data2 = createContext();

function ParentComponent(){
    const name = "Prabhat";
    const gender = "Male";

    return(
        <>
        <data.Provider value={name}>
            <data2.Provider value={gender}>
                <Child/>
            </data2.Provider>
        </data.Provider>
        </>
    )
}

export default ParentComponent;
export {data,data2};


// child component
import React from "react";
import {data,data2} from "./ParentComponent"

function Child(){
    return(
        <data.Consumer>{
            (name)=>{
                return(
                    <data2.Consumer>
                    {
                        (gender)=>{
                            return(
                                <h1>My name is {name} and my gender is {gender}</h1>
                            )
                        }
                    }
                    </data2.Consumer>
                )
            }
        }
        </data.Consumer>
    )
}

export default Child;
```

### `useContext` Hook

The `useContext` hook is used to consume values from the context in functional components.

Example:

```
import react,{createContext} from "react";
import Child from "./Child";

const data = createContext();
const data2 = createContext();

function ParentComponent(){
    const name = "Prabhat";
    const gender = "Male";

    return(
        <>
        <data.Provider value={name}>
            <data2.Provider value={gender}>
                <Child/>
            </data2.Provider>
        </data.Provider>
        </>
    )
}

export default ParentComponent;
export {data,data2};


// child component
import React from "react";
import {data,data2} from "./ParentComponent"

function Child(){
    const name = useContext(data);
    const gender = useContext(data2);

    return(
        <>
            <h1>My name is {name} and gender is {gender}</h1>
        </>
    )
}

export default Child;
```

### `useMemo` and `useCallback` Hooks

The `useMemo` hook is used to optimize performance by memoizing the result of a computation based on dependencies. The `useCallback` hook is used to memoize callback functions.

Examples:

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(), [dependency]);
```

#### useMemo

```
conat variableName = useMemo(()=>{
    console.log("***************");
    return statement;
},[state])
```

Example

```
import React,{useState,useMemo} from "react";

function App(){
    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);

    const multiply = useMemo(()=>{
        console.log("***************");
        return add*10;
    },[add])

    return(
        <div>
            {multiply} <br/>
            <button onClick={()=>setAdd(add + 1)}>Addition</button>
            <span>{add}</span> <br/>

            <button onClick={()=>setMinus(minus - 1)}>Substraction</button>
            <span>{minus}</span> <br/>
        </div>
    )
}
```

### Lifting State Up

Lifting State Up or data transfer from Child to parent

Example:-

```
// ParentComponent
import Child from "./Child";

function ParentComponent() {
    function getData(data){
        console.log(data);
    }
    return(
        <>
            <Child getData={getData}/>
        </>
    );
}


// Child component

import React,{useState} from "react";

function child(props){
    const [name, setName] = useState();
    function handleSubmit(e){
        e.preventDefault();
        props.getData(name);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)}></input>
            <button>Submit</button>
        </form>
    )
}

export default Child;
```

### Registration Form in React

```
import React,{useState,useEffect} from "react";

function Form(){
    const data={name:"",email:"",password:""};
    const [inputData, setInputData] = useState(data);
    const [flag, setFlag] = useState(false);

    useEffect(()=>{
        console.log("Registered");
    },[flag])

    function handleData(e){
        setInputData({...inputData, [e.target.name]:e.target.value})
        console.log(inputData)
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All Fields are Mendatory")
        }else{
            setFlag(true)
        }
    }

    return(
        <>
        <pre>{(flag)?<h2>Hello {inputData.name}, You've Registered Successfully</h2>:""}</pre>
        <form onSubmit={handleSubmit}>
            <h1>Registration Form</h1>
            <input type='text' name='name' value={inputData.name} onChange={handleData} placeholder="Enter Your Name"></input> <br/>

            <input type='text' name='email' value={inputData.email} onChange={handleData} placeholder="Enter Your Email"></input> <br/>

            <input type='password' name='password' value={inputData.password} onChange={handleData} placeholder="Enter Your Password"></input> <br/>

            <button type='Submit'>Register</button>
        </form>
        </>
    )
}
```

### List rendering using map()

Array.prototype.map() <br/>
    The map() methos creates a new array populated with the result of calling a provided function on every element in the calling array.

Example:-

```
    const array = [1,2,3,4,5,6,7,8];
    const double = array.map(x => x*2);
    console.log(double);
    //expected output: [2,4,6,8,10,12,14,16]
```

#### map() with key

```
const array = [1,2,3,4,5,6,7,8];
const double = array.map((x,index)=> <h1 key={index}>{x*2}</h1>)
console.log(double);
    //expected output: [2,4,6,8,10,12,14,16]
```

### useState hook with object

```
import react,{useState} from "react";

function App(){
    const [values, setValues]= useState({firstName:"King", lastName: "Kohli"});
    function updateName(){
        setValues({...values, firstName: "Virat"})
    }

    return(
        <>
        <h1>First Name is {values.firstName} and Last Name is {values.lastName}</h1>
        <button onClick={updateName}>Update</button>
        </>
    )
}

export default App;
```

### useState hooks with an Array

```
import react,{useState} from "react";

function App(){
    const [items, setItems] = useState([]);
    console.log(items);

    function addItems(){
        setItems([...items, {
            id: items.length,
            value: Math.random();
        }])
    }

    return(
        <>
        <ol>
            {
                items.map(items => (
                    <li key={items.id}>{items.value}</li>
                ))
            }
        </ol>
        <button onClick={addItems}>Add Items</button>
        </>
    )
}
```

### ToDo List in React

```
import react,{useState} from "react";

function TodoList() {
    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([]);

    function addActivity(){
        setListData((listData)=>{
            const updatedList = [...listData,activity]
            console.log(updatedList)
            setActivity("");
            return updatedList;
        })
    }

    function removeActivity(i){
        const updatedListData = listData.filter((element, id)=>{
            return i!=id;
        })
        setListData(updatedListData);
    }
    function removeAll(){
        setListData([]);
    }

    return(
        <>
        <h1>TODO LIST</h1>
        <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}></input>
        <button onClick={addActivity}>Add</button>
        <p> Here is Your List :{")"}</p>
        {
            listData!=[] && listData.map((data, i)=>{
                return(
                    <>
                    <p key={i}>
                        {data}
                        <button onClick={removeActivity(i)}>remove(-)</button>
                    </p>
                    </>
                )
            })
        }
        {listData.length>=1 && <button onClick={removeAll}>Remove All</button>}
        </>
    )
}
```

### useReducer hook

#### What is useReducer?
>
> useReducer is a react hook used for state management.
> Alternative of useState() hook.
> Preferable for complete state management logic.

Syntax

```
    const [state, dispatch] = useReducer(reducer, initialstate)
                                            ⬇
                                        reducer(currentState, action)
```

#### What is reducer?

Reducer is a function accepts two paramiter <br/>
    newState=reducer(currentState, action)

Example:-

```
import React,{useReducer} from 'react';

const initialstate=0;
const reducer = (state, action)=>{
    switch(action){
        case "Increment":
            return state+1
        case "Decrement":
            return state-1
        default :
            return state
    }
}

function Counter(){
    const [count, dispatch] = useReducer(reducer, initialstate)

    return(
        <>
            <button onClick={()=>dispatch("Increment")}>+</button>
            <div>Count = {count}</div>
            <button onClick={()=>dispatch("Decrement")}>-</button>
        </>
    )
}

export default Counter;
```

## Custom Hooks

Custom Hooks are functions that encapsulate reusable logic. They can be used to abstract away complex logic from components and promote code reusability.

#### Why to use Custom Hook?

To remove the duplicated logic in components and we can extract that logic to custom hook.

Example:

```jsx
import { useState } from 'react';

function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return [count, increment, decrement];
}

export default useCounter;


// using useCounter custom hook in App component ⬇
import React from 'react';
import useCounter from "./useCounter";

function App(){
    const [count, Increment, Decrement] = useCounter(10);

    return (
        <>
            <button onClick={Increment}>Increment</button>
            <div>Count = {count}</div>
            <button onClick={Decrement}>Decrement</button>        
        </>
    )
}

export default App;
```

🤍🤍🤍

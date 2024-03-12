After importing the REact/RTK we have to create a Store file in our APP.

things that we have to configure in store.js file >

1. configureStore
   import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({});

2. Now create our Reducers:

In RTK they are refernced as Slices:

We create a folder named Features > a folder named Todo > a file named todoSlice.js.

nanoid= to create unique ids

import {createSlice , nanoid} from '@reduxjs/toolkit';

const initialState = {
todos:[{id: 1 , text : "Hello World"}]
}

export const todoSlice = createSlice({
name:'todo',
initialState,
reducers:{
// always we will be given access to state and actions:

state: gives us what is current state of our function i.e our initialState function

action: the value/ids that we require to call the second method i.e (removeTodo in this case) we get them through action

addTodo: (state, action) =>{
const todo = {
id:nanoid(),
text:action.payload

}
state.todos.push(todo)
},
removerTodo:(state,action)=>{
state.todos = state.todos.filter((todo) => todo.id !== action.payload)
},
}

})

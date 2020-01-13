1. What problem does the context API help solve?

     Context helps to keep state in a centralized place and removes the annoyance of prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as 
a 'single source of truth' in a redux application?

    Actions: are bits of information that are passed through the reducer when a certain event takes place.
    Reducer: takes the information passed from Actions and updates the state
    Store: takes information from the reducer and updates the store

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global which means information can be passed down, where as component state is local and information cant be passed up.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

     Redux-thunk is what allows us to run async operations. It allows us to return functions from our action creators rather than just returning an action.


1. What is your favorite state management system you've learned and this sprint? Please explain why!

     I love prop drilling as sad as that sounds. It was hard for me to understand it at first but after learning redux i realized how simple prop drilling was. But i do understand that eventually prop drilling will become an a bother in larger applications.
 

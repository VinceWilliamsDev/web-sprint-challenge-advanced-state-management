1. What problem does the context API help solve?

  - Context API helps solve the issue of state fragmentation and the need to pass state as props through intermediate components that don't need it to grant their children access to the data they need.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  - The store is where state and the reducers are kept, outside the structure of the rest of the app. Any global state should be kept here, which is why the store is the single source of truth for a redux application.
  - Reducers are the logic that changes state. They should be pure functions so that they change state in prodictable ways. 
  - Actions are passed to the reducers to cause state changes.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

  - Application state is data that is available to numerous components whereas component state is state available to a single component and perhaps its children. 
  - You may consider putting state at the component level if you think it will only be used in that specific branch of the application. Data that will be used across multiple branches in the application tree should be moved to the application level.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  - redux-thunk is a library that allows for asynchorous operations in reducers. This way we can perform async operations such as api calls with our reducers. redux-thunk allows us to write actions as functions to trigger these asyncronous operations.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

  - My favorite is Context API. Its quick to set up and gets the job done. 

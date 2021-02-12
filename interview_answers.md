# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional class?

    A stateful component is one which manages it's own data (state), likely through the use of either React's built-in hooks or though the building and use of custom hooks to render it's UI and pass data down to other component's which it may be responsible for rendering.

    Some of these components, usually a step down in our component tree, may be functional components, or functional class. These are components which are stateless - they don't rely on managing their own state to run any operations, they simply rely on props - data which is passed down to them - to receive the data they need to perform whatever their intended operations are.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

    componentWillMount is triggered just once before our component actually mounts, while componentWillUpdate is triggered just once before our component re-renders due to a change of or receiving of new props or state.

3. Define stateful logic.

    Stateful logic is logic which is built into our components, and or data/state driven UI. This can mean anything from using hooks to manage data in state, making calls to external resources for data to then be manipulated and rendered on our App, building out forms with state-controlled inputs and storing that data to be used elsewhere in our application, or even building off of hooks to build custom hooks which allow us to manipulate out state/data in more sophisticated ways within our components.

4. What are the three step of creating a successful test? What is done in each phase?

    1. Arrange:
        First, we set ourselves up for success by importing all of our required modules, functions, and components, initializing our test, and rendering the component we intend to run tests on. This is the 'Arrange' phase.

    2. Act:

        Then, we go about selecting whichever elements we intend to test from the DOM/Virtual DOM, and, if a part of what we're testing for, run simulated actions on them.

    3. Assert:

        Finally, we assert that not only are our selected elements present within the document and correctly selected, but also that our simulated actions had the intended result.

    This process allows us to appropriately test our code for potential errors, bugs, or flaws in user experience, and then enable us to more accurately go fix those issues before testing again.
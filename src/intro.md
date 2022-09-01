## React Testing Library

```
- You can test your software the way that users actually use it.
- React Testing Library provides a virtual  DOM for tests, any time you're running tests without a browser.
-  It helps with searching virtual DOM  and interacting with virtual DOM

```

## Jest

```
- Jest is a test runner
- jest is responsible for finding tests, running the tests and determining whether the tests pass or fail,
- npm test  runs a npm script that runs jest in Watch mode

```

## Jest Assertions:

```
expect(linkElement).toBeInTheDocument():
  * expect : Global starts the assertion
  * linkElement: subject of assertion
  * toBeInTheDocument:
    - matcher : type of assertion
    -  this matcher comes from Jest - DOM
    -   matcher takes optional argument

More Assertion Examples :
  * expect(ele.textContent).toBe('Hello');
  * expect(eleArray).toHaveLength(7);

Jest Matchers [https://jestjs.io/docs/using-matchers]


```

## Jest DOM:

```
- Comes with create-react-app
- src/setupTest.js imports jest DOM before each test and makes matcher available
- Provides DOM based Matches
       -example : toBeVisible() or toBeChecked()

```

## Source:

1. Jest Matchers [https://jestjs.io/docs/using-matchers]
2. Jest DOM [https://github.com/testing-library/jest-dom#tocontainelement]
3. Testing library Queries [https://testing-library.com/docs/queries/about/#priority]
4. Testing library Cheat Sheet [https://testing-library.com/docs/react-testing-library/cheatsheet/]

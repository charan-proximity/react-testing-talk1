## Jest Watch Mode

#### npm test runs a npm script that runs jest in Watch mode

```
- watch for changes in files since last commmit
- only runs tests that related to these files
- no changes ? No tests

    - Press 'q' to quit watch mode
    - Press 'a' to run all tests
    - Press 'f' to run only failed tests
```

## How Does Jest Work

```
 - Global test method has two arguments
    - string description
    - Test Function

- Test fails if error is thrown when running function
    -  Assertions throw error when expectation fails

- No error -> tests pass
    - Empty test passes


```

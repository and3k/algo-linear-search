# npm test                        

> algo-linear-search@1.0.0 test
> jest

      at Object.log (linearSearch.js:25:9)

 PASS  ./linearSearch.spec.js
  tests linearSearch
    ✓ linearSearch(1, [1, 2, 3]) === 0 (1 ms)
    ✓ linearSearch(3, [1, 2, 3]) === 2
    ✓ linearSearch(4, [1, 2, 3]) === undefined
  tests globalLinearSearch
    ✓ globalLinearSearch('a', 'bananas'.split('')) === [1, 3, 5] (1 ms)
    ✓ globalLinearSearch('s', 'bananas'.split('')) === [6]
    ✓ globalLinearSearch('n', 'bananas'.split('')) === [2, 4]

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.114 s, estimated 1 s
Ran all test suites.

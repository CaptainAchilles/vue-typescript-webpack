// Proxy eslint through lint.js to allow for:
// 1. Better compatibility with windows enviroments
// 2. Suppression of the error codes thrown by eslint when there is a style rule broken.
require("eslint/lib/cli").execute(process.argv);
((require) => {
  const readLine = require('./index.js')(`
1
2
`)
  const myFunction = (a, b) => a + b
  const test = (result, expect) => result === expect && `✅ ${expect}` || `🔴 ${expect}`

  const a = parseInt(readLine())
  const b = parseInt(readLine())
  const result = myFunction(a, b)

  console.log(test(result, 2))
  console.log(test(result, 3))
  console.log(test(result, 4))
})(require);

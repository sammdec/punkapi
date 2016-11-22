const data = require('../data.json')

let seen = new Set()
let hasDuplicates = data.some(function(currentObject) {
    console.log(currentObject.name)
    return seen.size === seen.add(currentObject.id).size
})

if (hasDuplicates) {
  console.log("The beer above has a non unique id ^")
  return process.exit(1)
}

return process.exit(0)

# enumeration-class

## binary example
```js
const suits = new Enumeration({
  spades: null,
  diamonds: null,
  hearts: null,
  clubs: null,
})
console.info(suits.has('hearts')) // TRUE
console.info(suits.has('joker')) // FALSE
suits.spades = 'clubs' // Error
suits.joker = 'I am a suit!' // Error
```

## value example
```js
const classes = new Enumeration({
  element: 'my-awesome-element',
  visible: 'my-awesome-element--visible',
})
console.info(classes.element) // prints "my-awesome-element"

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

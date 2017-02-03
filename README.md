# pug-bem-lexer
A plugin that adds BEM shortcuts to pug

## Installation
run `npm i pug-bem-lexer`

## Setup
```
pug.render(somePugString, {
  plugins : [
    {
        lex : require('pug-bem-lexer')
    }
  ]
});
```

## Example Usage
```
.block.-a-modifier
    ._some-element
```
renders:
```
<div class="block block--a-modifier">
    <div class="block__some-element"></div>
</div>
```


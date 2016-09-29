# bem-pug-lexer
A plugin that adds BEM shortcuts to pug

## Installation
```
pug.render(somePugString, {
  plugins : [
    lex : require('bem-pug-lexer')
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


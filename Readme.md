# Install
```bash
bower install angular-material-sublist
```

> [see an example](https://buster95.github.io/angular-material-sublist/ "Angular Material Sublist Example")

# How To Use

* IMPORT FILES

```html
<link rel="stylesheet" href="src/angular-material-sublist.css">
<script src="src/angular-material-sublist.min.js"></script>
```

* IMPLEMENTS MODULE IN YOUR APP
```javascript
var app = angular.module('myapp', ['mdSublist']);
```

* USE IN HTML
```html
<md-list>
    <md-sublist text="Menu 1" svg-icon="settings">
        <md-list-item>
            <p>Sub Menu 1</p>
        </md-list-item>

        <md-list-item>
            <p>Sub Menu 2</p>
        </md-list-item>

        <md-list-item>
            <p>Sub Menu 3</p>
        </md-list-item>
    </md-sublist>
</md-list>
```
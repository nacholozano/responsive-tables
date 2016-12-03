# For some reason, it does not work out of codepen

# responsive-tables [v0.2](https://github.com/nacholozano/responsive-tables/blob/master/CHANGELOG.md)

A tiny and free dependency solution for responsive web design tables made with Vanilla JS and CSS.

Javascript:
	- Minified -> 1.3 KB <br>
	- Minified + gzipped -> 672 bytes <br>
Minified CSS -> 257 bytes <br>
(You can find this files in dist folder) 

[Demo](http://codepen.io/nacholozano/pen/aNLMRm?editors=0010)

## Browser support from [Can I use](http://caniuse.com/)

You might want change the flex display in css for better compatibility with IE 

 
![alt text](http://i.imgur.com/g8QyFRt.jpg "Browser support")

## Instalation

Just add the files from dist folder

```
<link rel="stylesheet" href="css/responsive-tables.css">
<script src="js/responsive-tables.js"></script>
```

## Usage


You must add the `class='responsive-table'` and make a css class named 'compress-table' with the style you want the tables get when are too long for the viewport. <br>
You can use the default 'responsive-tables.css' or make your own css file. 

There are some required css rules ( [See required css rules](https://github.com/nacholozano/responsive-tables/blob/master/source%20code/dev/css/responsive-tables.css) ).

### Available methods

- Configuration

```
nl_responsiveTable.init({
	throttle: false,  // default: true
	throttleTime: 1000, // default: 300
	compressClass: 'compress-table', // default: compress-table
	// If you have already written the css class and dont want to change its name 
});
```

- Other methods

`nl_responsiveTable.resize() // If you need to recalculate de tables width ` 


### HTML markup

```
<table class="responsive-table">
    <thead>
        <tr>
            <th></th>
            <th></th>
            ...
        </tr>
    </thead>    
    <tbody>
        <tr>
            <td></td>
            <td></td>
            ...
        </tr>
    </tbody>
</table>
```

## Future

1. NPM and Bower packages
2. Customizable library
3. Accessible tables
4. More types of tables and styles

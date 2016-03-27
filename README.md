# responsive-tables

A tiny and free dependency solution for responsive web design tables made with Vanilla JS and CSS. <br>
It works with multiple tables.

Minified Javascript -> 944 bytes <br>
Minified CSS -> 195 bytes <br>
(You can find this files in dist folder) <br>

[Demo](http://codepen.io/nacholozano/pen/zqwXNm?editors=0100)

## Browser support from [Can I use](http://caniuse.com/)
 
![alt text](http://i.imgur.com/g8QyFRt.jpg "Browser support")

## Usage

You must add the `class='responsive-table'` and make a css class named 'compress-table' with the style you want the tables get when are too long for the viewport. <br>
You can use the default 'responsive-tables.css' or make your own css file. <br>

There are some required css rules ( [See required css rules](https://github.com/nacholozano/responsive-tables/blob/master/source%20code/dev/css/responsive-tables.css) ).

If you need to recalculate de tables width you can run `nl_responsiveTable.resize();`

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

1. Customizable library
2. Accessible tables
3. More types of tables and styles

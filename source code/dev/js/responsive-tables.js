; (function(){

  var tables = document.getElementsByClassName('responsive-table'),
  numTables = tables.length,
  tableWidthAtt = 'originalWidth',
  compressClass = 'compress-table',
  headersSelectors = 'thead>tr>th',
  cellHeaderAtt = 'data-header',
  itTables,itHeaders,itCells,table,containerWidth,headers,cells;

  resize();
  window.addEventListener("resize",resize);
  window.nl_responsiveTable = {
    resize: resize
  };
    
  ////////////////////// fn

    function resize(){

      for( itTables = 0 ; itTables < numTables ; itTables++){
        
        table = tables[itTables];
        containerWidth = getWidth(table.parentElement);

        if( overflow() && !compressed() ){
  
             if( !table.getAttribute(tableWidthAtt) ){
               
              table.setAttribute(tableWidthAtt,table.offsetWidth);
              setHeaders();

             }

             table.classList.add(compressClass);

          }else if( notOverflow() && compressed() ){

            table.classList.remove(compressClass);

          }
      }
    }

   function getStyle(el, att) {
      if (getComputedStyle !== 'undefined') {
          return getComputedStyle(el, null)[att];
      } else {
          return el.currentStyle[att];
      }
  }

  function getWidth(el){
    return el.clientWidth-(parseFloat(getStyle(el,'paddingRight'))+parseFloat(getStyle(el,'paddingLeft')));
  }

  function overflow(){
    return table.offsetWidth > containerWidth+1;
  }

  function notOverflow(){
    return table.getAttribute(tableWidthAtt) <= containerWidth-1;
  }

  function compressed(){
    return table.classList.contains(compressClass);
  }

  function cellSelector(){
    return 'tbody>tr>td:nth-child('+(itHeaders+1)+')';
  }
  
  function setHeaders(){
    headers = table.querySelectorAll(headersSelectors);

    for( itHeaders = 0; itHeaders < headers.length ; itHeaders++){
       cells = table.querySelectorAll( cellSelector() );  

       for( itCells = 0; itCells < cells.length ; itCells++){
           cells[itCells].setAttribute(cellHeaderAtt,headers[itHeaders].innerHTML);
       }
                 
    }
  }
  
})();
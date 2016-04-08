;(function(){

	var tables = document.getElementsByClassName('responsive-table'), // get tables
			numTables = tables.length, // get number of tables
			tableWidthAtt = 'data-originalWidth', // name of the attibute we add to each table to know when remove 'compress-table' class
			headersSelectors = 'thead>tr>th', // get table header
			cellHeaderAtt = 'data-header', // name of the html attribute that will contain the column header value, this attribute will be set on each <td> tag when the table is compressed
			itTables,itHeaders,itCells,  // iterators
			table,containerWidth,headers,cells, // current table information
			
			timeout, // a simple timeout for throttle
			
			// Configuration vars
			compressClass = 'compress-table', // class for compress tables
			throttle = true,   // throttle 
			throttleTime = 300;

	// Library methods

	window.nl_responsiveTable = {
		resize: resize,
		init: init,
	};

	////////////////////// fn

	function resize(){

		// iterate tables
		for( itTables = 0 ; itTables < numTables ; itTables++){

			// get table and its praent width
			table = tables[itTables];
			containerWidth = getWidth(table.parentElement);

			// if table overflows
			if( overflow() && !compressed() ){

				// the first time the table is compressed, it saves the table original width  
				// and set up the headers for td tags
				if( !table.getAttribute(tableWidthAtt) ){

					table.setAttribute(tableWidthAtt,table.offsetWidth);
					setHeaders();

				}
				// last, it does compress the table
				addClass(compressClass);

			// if table does not overflow, it decompress the table 
			}else if( notOverflow() && compressed() ){

				removeClass(compressClass);

			}
		}
	}

	// get style attribute from element
	function getStyle(el, att) {
		if (getComputedStyle !== 'undefined') {
			return getComputedStyle(el, null)[att];
		} else {
			return el.currentStyle[att];
		}
	}

	// get element width
	function getWidth(el){
		return el.clientWidth-(parseFloat(getStyle(el,'paddingRight'))+parseFloat(getStyle(el,'paddingLeft')));
	}

	// check if the table overflows
	function overflow(){
		return table.offsetWidth > containerWidth+1;
	}

	// check if the table does not overflow
	function notOverflow(){
		return table.getAttribute(tableWidthAtt) <= containerWidth-1;
	}

	// check if table is compressed
	function compressed(){
		return hasClass(compressClass);
	}

	// get appropriate td tag for each th in thead
	function cellSelector(){
		return 'tbody>tr>td:nth-child('+(itHeaders+1)+')';
	}

	// set the correct 'data-header' value on each <td>
	function setHeaders(){
		headers = table.querySelectorAll(headersSelectors);

		for( itHeaders = 0; itHeaders < headers.length ; itHeaders++){
			cells = table.querySelectorAll( cellSelector() );  

			for( itCells = 0; itCells < cells.length ; itCells++){
				cells[itCells].setAttribute(cellHeaderAtt,headers[itHeaders].innerHTML);
			}

		}
	}
	
	// class control 
	function hasClass(className){
		return table.className.search(className) !== -1;
	}

	function removeClass(className){
		table.className = table.className.replace(className,'');
	}

	function addClass(className){
		table.className += ' '+className;
	}

	// Initialize 
	function init( JSONconf ){
		// configuration
		conf(JSONconf);
		
		// first, it does resize the tables
		resize();

		// Then it does decide if it must throttle
		if( throttle ){
			window.addEventListener("resize", function() {

				clearTimeout(timeout);
				timeout = setTimeout(function() {

					resize();

				}, throttleTime);

			});
		}else{
			window.addEventListener("resize", resize );
		}

	}

	// configuration
	function conf (conf){
		if(conf.hasOwnProperty('throttle')){
			throttle = conf.throttle;
		}
		if(conf.hasOwnProperty('throttleTime')){
			throttleTime = conf.throttleTime;
		}
		if(conf.hasOwnProperty('compressClass')){
			compressClass = conf.compressClass;
		}
	}
	
})();

/**
 * Column Creating for City List home assignment for a company's job meeting request challange
 * by Barış Güler - github.com/hwclass / @hwclass
 */

 var citylist = cityApp.cityList;

/**
 * anonymous IIFE to be initialized
 *
 * @param <Object> _cityApp
 * @param <Array> _cityList
 */
(function (_cityApp, _cityList) {

    numberOfColumns = _cityApp.config.numberOfColumns;
    cityObjectColumnsWrapper = [];

    /**
     * getNumberOfCities() returns length of _cityList
     *
     * @return <int> _cityList
     */
    function getNumberOfCities () {
        return _cityList.length;
    }

    /**
     * getNumberOfCities() returns length of _cityList
     *
     * @return <Integer> _list
     * @param <Array> _list
     */
    function getSortedCityListAlphabetically (_list) {
        return _list.sort(function(fObj, sObj) { return fObj.name > sObj.name; })
    }

    /**
     * setNumberOfColumns() sets column number
     * how many you want for the whole app
     *
     * @args <int> _numberOfColumns
     */
    function setNumberOfColumns (_numberOfColumns) {
        numberOfColumns = _numberOfColumns;
    }

    /**
     * getNumberOfCities() returns length of _cityList
     *
     * @return <Integer> _list
     * @param <Array> _list
     */
    function getNumberOfColumns () {
        return numberOfColumns;
    }

    /**
     * createCityObjectColumnArray() creates multi-dimensional array of arrays
     *
     * @param <int> _numberOfColumns
     */
    function createCityObjectColumnArray (_numberOfColumns) {
        for (var counter = 0, len = _numberOfColumns; counter < len; counter++) {
            this.cityObjectColumnsWrapper.push([]);
        }
    }

    /**
     * getCityObjectColumnsWrapper() creates multi-dimensional array of arrays
     *
     * @return <Array> cityObjectColumnsWrapper
     */
    function getCityObjectColumnsWrapper () {
        return cityObjectColumnsWrapper;
    }

    /**
     * createDOMElementsForCityListColumnsWrapper() creates wrapper and info section 
     * for each city item
     *
     */
    function createDOMElementsForCityListColumnsWrapper () {

        /*content section creation*/
        var contentSection = document.createElement('P');
        contentSection.id = 'content';
        contentSection.setAttribute('id', 'content');
        contentSection.style.width = '450px'

        document.body.appendChild(contentSection);

        /*content section creation*/
        var cityListColumnsWrapper = document.createElement("DIV");
        cityListColumnsWrapper.className = 'columnsWrapper'

        document.body.insertBefore(cityListColumnsWrapper, contentSection);

    }

    /**
     * createCityListColumns() creates column wrappers
     * 
     * @return <Array> cityObjectColumnsWrapper
     *
     */
    function createCityListColumns () {
        var numberOfColumns = getNumberOfColumns();
        var cityListColumnsWrapper = document.getElementsByClassName('columnsWrapper')[0];
        var _tempElement;
        for (var counter = 0; counter < numberOfColumns; counter++) {
            _tempElement = document.createElement('DIV');
            _tempElement.className = 'column-' + counter;
            _tempElement.style.float = 'left';
            _tempElement.style.setProperty('float', 'left');
            _tempElement.style.width = '150px';
            _tempElement.style.marginLeft = '10px';
            /*_tempElement.innerHTML = 'column ' + counter;*/
            cityListColumnsWrapper.appendChild(_tempElement);
            _tempElement = '';
        }
    }

    /**
     * addCitiesIntoColumns() adds cities into column arrays
     */
    function addCitiesIntoColumns () {
        cityList = getSortedCityListAlphabetically(_cityList);

        var numberOfColumns = getNumberOfColumns();
        var totalRow = Math.floor(cityList.length / numberOfColumns) + ( cityList.length % numberOfColumns != 0 ? 1 : 0 );
        var index = 0;

        for (var x = 0; x < numberOfColumns; x++) {
            cityObjectColumnsWrapper.push([]);
            for (var y = 0; y < totalRow; y++) {
                if (cityList.length > index) {
                    cityObjectColumnsWrapper[x][y] = cityList[index];
                    index++;
                }
            }
        }
    }

    /**
     * appendObjectsIntoColumns() appends city items into columns arrays
     */
    function appendObjectsIntoColumns () {

        var columnsWrapper = cityObjectColumnsWrapper;
        var numberOfColumns = cityObjectColumnsWrapper.length;

        for (var k = 0; k < numberOfColumns; k++) {
            var lengthOfColumn = columnsWrapper[k].length;
            for (var l = 0; l < lengthOfColumn; l++) {
                var column = document.getElementsByClassName('column-'+k)[0];
                var PEl = document.createElement('P');
                PEl.id = l;
                PEl.setAttribute('id',l);
                PEl.innerHTML = cityObjectColumnsWrapper[k][l]['name'] + ' (' + cityObjectColumnsWrapper[k][l]['count'] + ')';
                column.appendChild(PEl);
            }
        }

    }

    /**
     * addEvent() controls event-handling for cross-browser issues
     * 
     * @param <Array> elem
     * @param <Array> event
     * @param <Function> fn
     *
     */
    function addEvent(elem, event, fn) {

        function listenHandler(e) {
            var ret = fn.apply(this, arguments);
            if (ret === false) {
                e.stopPropagation();
                e.preventDefault();
            }
            return(ret);
        }

        if (elem.addEventListener) {
            elem.addEventListener(event, listenHandler, false);
        } else {
            elem.attachEvent("on" + event, attachHandler);
        }

    }

    /**
     * addEventHandlersForCityCaptions() adds event-handling 
     * for each city items
     */
    function addEventHandlersForCityCaptions () {

        var columnsWrapper = cityObjectColumnsWrapper;
        var numberOfColumns = cityObjectColumnsWrapper.length;

        for (var k = 0; k < numberOfColumns; k++) {
            var lengthOfColumn = columnsWrapper[k].length;
            for (var l = 0; l < lengthOfColumn; l++) {
                var column = document.getElementsByClassName('column-'+k)[0];
                var currentCitySectionWithinDOM = column.getElementsByTagName('P')[l];
                addEvent(currentCitySectionWithinDOM, 'click', showInfo);
            }
        }

    }

    /**
     * showInfo() shows info for every city
     */
    function showInfo () {

        var parentColumnWrapperIndex = new String(this.parentNode.className).substring(7, this.parentNode.className.length);
        var clickedElementIndex = this.id;
        var cityContentArea = document.getElementById('content');

        cityContentArea.style.marginLeft = '10px';
        cityContentArea.innerHTML = cityObjectColumnsWrapper[parentColumnWrapperIndex][clickedElementIndex]['content'];

    }

    /**
     * log() logs message on console
     *
     * @param _message
     *
     */    
    function log (_message) {
        console.log(_message);
    }

    /**
     * isNull() controls if parameter is null or not
     *
     * @return <boolean>
     * @param _o
     *
     */
    function isNull (_o) {
        return (null == _o ? true : false);
    }

    /**
     * isUndefined() controls if parameter is undefined or not
     *
     * @return <boolean>
     * @param _o
     *
     */
    function isUndefined (_o) {
        return (typeof _o == 'undefined' ? true : false);
    }

    /**
     * isBrowser() controls which browser is used
     *
     * @return <boolean>
     * @param _browserString
     *
     */
    function isBrowser (_browserString) {
        return (navigator.appCodeName === _browserString);
    }

    /**
     * init() initializes the main functions for the programme
     */
    function init () {

        setNumberOfColumns(3);

        createDOMElementsForCityListColumnsWrapper();

        createCityListColumns();

        addCitiesIntoColumns();

        appendObjectsIntoColumns();

        addEventHandlersForCityCaptions();

    }

    init();

}(cityApp, citylist));
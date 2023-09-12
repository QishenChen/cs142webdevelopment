"use strict";
function cs142MakeMultiFilter(originalArray){
    var currentArray=originalArray;
   function arrayFilterer(filterCriteria,callback){
    if(typeof (filterCriteria)!=='function'){
        return currentArray;
    }
        currentArray=currentArray.filter(filterCriteria);
    if(typeof(callback)==='function'){
        callback=callback.bind(originalArray);
        callback(currentArray);
    }
    return arrayFilterer;
   } 
   return arrayFilterer;
}
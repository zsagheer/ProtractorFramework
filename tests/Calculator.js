describe ('Demo Calculator tests', function(){

it ('addition test', function(){
    browser.get('http://juliemr.github.io/protractor-demo/');

    element(by.model('first')).sendKeys('2');
    element(by.model('second')).sendKeys('3');
    element(by.css('[ng-click="doAddition()"]')).clcik();
   
    browser.sleep(2000)
});


});
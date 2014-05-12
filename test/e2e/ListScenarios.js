describe('List Page', function () {
    browser.get('index.html#list');


    it('should display the total number of need to do items', function() {
        expect(element(by.binding('getNeedTodoItemsTotal()')).getText()).toEqual('3');
    });

    it('should display all the todo items', function () {
        element.all(by.css("ul li")).then(function(items){
            expect(items.length).toEqual(3);
        });
    });

    it('should redirect to add new todo item page when click add new button', function(){
        element(by.buttonText('New Todo')).click();
//        browser.
    });

});
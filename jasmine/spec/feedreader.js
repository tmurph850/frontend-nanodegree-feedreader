/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test loops through each feed within the allFeeds
         * object and ensures it has a url defined and that the
         * url is not empty.
         */

        it('urls are defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('names are defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });

    });


    /*The test suite for our Menu.*/
    describe('The Menu', function() {

        /* A test that ensures the menu element is hidden by 
         * default by using the jQuery method hasClass to
         * detect the class in use for the menu-hidden element.
         */
        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });

        /* A test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('changes visibility when click', function() {
            var menuIcon = $('.menu-icon-link');
            var body = $('body');

            // trigger click to make menu visible
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeFalsy();

            // trigger click to make menu invisible
            menuIcon.trigger('click');
            expect(body.hasClass('menu-hidden')).toBeTruthy();

        });

    });


    /* A test suite named "Initial Entries" */
    describe('Initial Entries', function() {
         beforeEach(function(done){
            loadFeed(0, done);
        });

        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         it('should contain at least one feed', function() {
            expect($(".entry").length).toBeGreaterThan(0);

         });

    });
        

    /* A test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        var feedZero;
        
        /* Load up our first feed with array index of zero and change the value of
         * variable feedZero to the text contained within .entry.
         */

        beforeEach(function(done) {
            loadFeed(0, function() {
                feedZero = $('.feed').text();
                loadFeed(1, function() {
                    done();
                }); 
            });
        });
          
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         it('changes content', function() {
            var feedOne = $('.feed').text();
            expect(feedZero).not.toEqual(feedOne);
         });


    });

        
}());

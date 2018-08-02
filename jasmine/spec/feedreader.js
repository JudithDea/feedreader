// new suite starts here
$(function() {

    describe('RSS Feeds', function() {

        // spec 1
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // spec 2
        it('has a URL defined that is not empty', function(){
          for (i=0; i<allFeeds.length; i++){
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url.length).toBeGreaterThan(0);
          };
        });

        // spec 3
        it('has a name that is not empty', function(){
          for (i=0; i<allFeeds.length; i++){
           expect(allFeeds[i].name).toBeDefined();
           expect(allFeeds[i].name.length).toBeGreaterThan(0);
         };
       });
    });


// new suite starts here
$(function(){
  describe("The Menu", function(){

      // spec 4
      it('menu element is hidden by default', function(){
        expect($('body')[0].className).toBe('menu-hidden'); // when we first look at the className, it is "menu-hidden"
      });

      // spec 5
      it('menu changes from hidden to visible on click, and vice versa', function(){
        $('.menu-icon-link').click(); // simulates a click event on the .menu-icon-link element
        expect($('body')[0].className).not.toBe('menu-hidden'); // after clicking the className is not "menu-hidden" anymore
        $('.menu-icon-link').click(); // simulates the second click event
        expect($('body')[0].className).toBe('menu-hidden'); // after clicking again the className is "menu-hdden" again
      });
  });
});

// new suite starts here
$(function(){
    describe("Initial Entries", function(){
      beforeEach(function(done){
        loadFeed(0); // making sure the loadFeed function was invoked before each test runs
        done();
      });

      // spec 6
      it('There is at least one .entry within .feed', function(){
        expect($('.feed').length).toBeGreaterThan(0); // if there is something inside feed, it's length will be greater than 0
      });
    });
});


    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());

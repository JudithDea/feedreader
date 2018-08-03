// I utilized QAShahin's Jasmine tutorials on Youtube (https://www.youtube.com/user/GlassBoxT) to learn the basics of the framework.
// I then completed the project independently.


$(function() {
// new suite starts here
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
          }
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
    describe("The Menu", function(){

      // spec 4
      it('menu element is hidden by default', function(){
        expect($('body')[0].className).toContain('menu-hidden'); // when we first look at the className, it contains "menu-hidden"
      });

      // spec 5
      it('menu changes from hidden to visible on click, and vice versa', function(){
        $('.menu-icon-link').click(); // simulates a click event on the .menu-icon-link element
        expect($('body')[0].className).not.toContain('menu-hidden'); // after clicking the className is not "menu-hidden" anymore
        $('.menu-icon-link').click(); // simulates the second click event
        expect($('body')[0].className).toContain('menu-hidden'); // after clicking again the className is "menu-hdden" again
      });
    });


// new suite starts here
    describe("Initial Entries", function(){
      beforeEach(function(done){
        loadFeed(1, done); // making sure the loadFeed function was invoked before each test runs
      });

      // spec 6
      it('There is at least one .entry within .feed', function(done){
        expect($('.feed .entry').length).toBeGreaterThan(0); // if there is an .entry class inside feed, its length will be greater than 0
        done();
      });
    });


// new suite starts there
    describe('New Feed Selection', function(){
      let feed1,
          feed2;
      beforeEach(function(done){
        loadFeed(0, function(){
          feed1 = $('.header-title').innerHTML; // grabbing the current feed 'name'
          console.log(feed1);
        }); // making sure again the loadFeed function was invoked before each test runs
        done();
    });

    // spec 7
      it('When a new feed is loaded, the content changes', function(done){
        loadFeed(1, function(){
          feed2 = $('.header-title').innerHTML; // now we can set the 2nd feed item to compare to first feed item
          console.log(feed2);
        }); // invoking loadFeed again, now selecting the 2nd element in there
        expect('feed1').not.toBe('feed2'); // feed1 should be different from feed2
        done();
      });
    });

}());

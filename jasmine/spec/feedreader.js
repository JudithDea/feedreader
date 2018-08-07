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
          for (let i = 0; i < allFeeds.length; i++){
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url.length).toBeGreaterThan(0);
          }
        });

        // spec 3
        it('has a name that is not empty', function(){
          for (let i = 0; i < allFeeds.length; i++){
           expect(allFeeds[i].name).toBeDefined();
           expect(allFeeds[i].name.length).toBeGreaterThan(0);
         };
       });
    });


// new suite starts here
    describe("The Menu", function(){

      // spec 4
      it('menu element is hidden by default', function(){
        expect($('body')[0].classList).toContain('menu-hidden'); // when we first look at the className, it contains "menu-hidden"
      });

      // spec 5
      it('menu changes from hidden to visible on click, and vice versa', function(){
        $('.menu-icon-link').click(); // simulates a click event on the .menu-icon-link element
        expect($('body')[0].classList).not.toContain('menu-hidden'); // checks if "menu-hidden" is included in the array of classes
        $('.menu-icon-link').click(); // simulates the second click event
        expect($('body')[0].classList).toContain('menu-hidden');
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
      let feed1, feed2;
          beforeEach(function(done){
              loadFeed(0, function() {
                  // load first feed here
                  feed1 = $('.feed').html(); // storing initial feed item
                  console.log(feed1);
                  loadFeed(1, function() {
                        // load second feed here.
                        feed2 = $('.feed').html(); // storing 2nd feed item to compare to first feed item
                        console.log(feed2);
                      done();
                  });
              });
          });
    });

    // spec 7
      it('When a new feed is loaded, the content changes', function(){
        expect(feed1).not.toBe(feed2); // feed1 should be different from feed2
      });
    });

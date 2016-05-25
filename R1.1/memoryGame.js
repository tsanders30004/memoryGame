$(document).ready(function(){

     var state = 'first';

     var currentVisibleImage = '';
     var currentVisibleTile = '';

     var stateOneImage = '';
     var stateTwoImage = '';

     var monsters = [
       'monsters-01.png',
       'monsters-02.png',
       'monsters-03.png',
       'monsters-04.png',
       'monsters-04.png',
       'monsters-03.png',
       'monsters-02.png',
       'monsters-01.png',
     ];

     $('#grid').append(makeGrid());    /* create HTML grid */

     function makeGrid() {
          debugger;
          var imgTagPart1 = '<img class="monster" src="images/';
          var imgTagPart2 = '">';
          var imgTag = '';
          var i;

          for (i=0; i < monsters.length; i++) {
               imgTag += '<div class="tile animated zoomIn">' + imgTagPart1 + monsters[i] + imgTagPart2 + '</div>';
          }
          return imgTag;
     }


     $('.tile').click(function(){
          if (state === 'first') {
               debugger;

               stateOneImage = $(this).addClass('open');     /* make visible */
               console.log(stateOneImage);
               state = 'second';

          } else {
               debugger;

               stateTwoImage = $(this).addClass('open');     /* make visible */
               console.log(stateTwoImage);

               currentVisibleImage = $(this).find('img').attr('src'); /* filename of image above. */

               /* do filenames match?  */
               console.log('need to figure out how to compare filenames');
               console.log('1st filename = ' + $(stateOneImage).find('img').attr('src'));
               console.log('2nd filename = ' + $(stateTwoImage).find('img').attr('src'));

               if ($(stateOneImage).find('img').attr('src') === $(stateTwoImage).find('img').attr('src')) {
                    console.log('filenames match');
                    console.log('somehow need to keep these one the screen.  remove and add classes here?')
                    $('.open').addClass('matched');
                    $('matched').removeClass('open');
               }
               else {
                    console.log('filenames do not match');
                    console.log('need to make the two files that do not match invisible again after one second delay');
                    console.log('first, just make them disappear');

                    var timeOutID = setTimeout(function(){
                         $('.open:not(.matched)').removeClass('open');     /* finds elements with class 'open' excluding ones which also have 'matched' */
                    }, 1000);
               }

               debugger;
               state = 'first';
          };
     });
});

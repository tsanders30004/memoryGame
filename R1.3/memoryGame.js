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
       'monsters-05.png',
       'monsters-06.png',
       'monsters-07.png',
       'monsters-08.png',
     ];

     $('#grid').append(makeGrid(monsters));    /* create HTML grid */

     function makeGrid(myMonsters) {

          debugger;

          var imgTagPart1 = '<img class="monster" src="images/';
          var imgTagPart2 = '">';
          var imgTag = '';
          var i;
          var myMonstersTimesTwo = [];

          debugger;

          myMonsters = shuffle(myMonsters);  /* shuffled version of original *sorted* array */
          myMonstersLength = myMonsters.length;
          myMonsters.splice(myMonstersLength / 2, myMonstersLength / 2);

          debugger;
          myMonstersTimesTwo = myMonsters.concat(myMonsters);

          debugger;
          myMonstersTimesTwo = shuffle(myMonstersTimesTwo);

          for (i=0; i < myMonstersTimesTwo.length; i++) {
               imgTag += '<div class="tile animated zoomIn">' + imgTagPart1 + myMonstersTimesTwo[i] + imgTagPart2 + '</div>';
               // imgTag += '<div class="tile animated zoomIn">' + imgTagPart1 + myMonstersTimesTwo[i] + imgTagPart2 + '</div>';
          }

          return imgTag;
     }

     function shuffle(myArray) {
          var i;
          var shuffledArray = [];
          var randomIndex;
          var numMonsters;

          numMonsters = myArray.length;

          for (i = 0; i < numMonsters; i++) {
               randomIndex = Math.floor((Math.random() * myArray.length) + 1) - 1;
               shuffledArray.push(myArray[randomIndex]);
               myArray.splice(randomIndex, 1);
          }
          console.log(shuffledArray);
          return shuffledArray;
     };

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

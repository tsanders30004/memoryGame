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
          'monsters-09.png',
          'monsters-10.png',
          'monsters-11.png',
          'monsters-12.png',
          'monsters-13.png',
          'monsters-14.png',
          'monsters-15.png',
          'monsters-16.png'
     ];

     $('#grid').append(makeGrid(monsters, 4, 8));    /* create HTML grid */

     function makeGrid(myMonsters, numRows, numCols) {
          /*   myMonsters is the array of monster image filenames.  It may contain more filenames than we actually need.
               numRows is the number of rows to be shown on the grid
               numRows is the number of rows to be shown on the grid
               the number of monsters = number of tiles = numRows * numCols */

          function makeShuffledMonsterArray(monsterImageList, myRows, myCols) {
               /* returns a shuffled array of myRows * myCols monster image filenames.  each image filename will be in the array exactly twice.  */
               var numMonsters = numRows * numCols;

               /* shuffle the list of monster image filenames */
               monsterImageList = shuffle(monsterImageList);

               monsterImageList.length = numMonsters / 2;   /* chop off half of the array */

               var monsterList2 = monsterImageList.concat(monsterImageList);

               return shuffle(monsterList2);
          }
          // var myMonstersTimesTwo = [];
          // myMonsters = shuffle(myMonsters);
          //
          // /* create a new monster image array */
          // myMonstersLength = myMonsters.length;
          // myMonsters.splice(myMonstersLength / 2, myMonstersLength / 2);
          // myMonstersTimesTwo = myMonsters.concat(myMonsters);
          // myMonstersTimesTwo = shuffle(myMonstersTimesTwo);
          //
          // return myMonstersTimesTwo;

          //   create the image tag that will be used to build the grid
          //   the width and margin of each tile will have to be calculated.
          //   if there are numCols columns and a margin of m percent on each side of each tile,
          //   then numCols * (width + 2 * m) = 100%.  so the width of each time is 100 / numCols - 2 * m

          debugger;

          var monsterList = makeShuffledMonsterArray(myMonsters, numRows, numCols);
          console.log(monsterList);

          var imgTagPart1 = '<img class="monster" src="images/';
          var imgTagPart2 = '">';
          var imgTag = '';
          var i;

          var m = 1;     /* tile margin in percent */
          var w = 100 / numCols - 2 * m;

          var divTag1 = '<div ';
          var divTag2 = 'style="width: ' + w + '%; margin: ' + m + '%;" ';
          var divTag3 = 'class="tile animated zoomIn">';
          var divTag4 = '</div>';
          // console.log('-------------------');
          // console.log(divTag1);
          // console.log(divTag2);
          // console.log(divTag3);
          // console.log(divTag4);
          // console.log(divTag1 + divTag2 + divTag3 + divTag4);
          debugger;

          for (i=0; i < monsterList.length; i++) {
               imgTag += divTag1 + divTag2 + divTag3 + imgTagPart1 + monsterList[i] + imgTagPart2 + divTag4;
               console.log(divTag1 + divTag2 + divTag3 + imgTagPart1 + monsterList[i] + imgTagPart2 + divTag4);
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
          // console.log(shuffledArray);
          return shuffledArray;
     };

     $('.tile').click(function(){
          if (state === 'first') {

               stateOneImage = $(this).addClass('open');     /* make visible */
               // console.log(stateOneImage);
               state = 'second';

          } else {

               stateTwoImage = $(this).addClass('open');     /* make visible */
               // console.log(stateTwoImage);

               currentVisibleImage = $(this).find('img').attr('src'); /* filename of image above. */

               /* do filenames match?  */
               // console.log('need to figure out how to compare filenames');
               // console.log('1st filename = ' + $(stateOneImage).find('img').attr('src'));
               // console.log('2nd filename = ' + $(stateTwoImage).find('img').attr('src'));

               if ($(stateOneImage).find('img').attr('src') === $(stateTwoImage).find('img').attr('src')) {
                    // console.log('filenames match');
                    // console.log('somehow need to keep these one the screen.  remove and add classes here?')
                    $('.open').addClass('matched');
                    $('matched').removeClass('open');
               }
               else {
                    // console.log('filenames do not match');
                    // console.log('need to make the two files that do not match invisible again after one second delay');
                    // console.log('first, just make them disappear');

                    var timeOutID = setTimeout(function(){
                         $('.open:not(.matched)').removeClass('open');     /* finds elements with class 'open' excluding ones which also have 'matched' */
                    }, 1000);
               }

               state = 'first';
          };
     });
});

// Hard-wired version of the sidewalk in var people
var people = [31, 23, 26, 29, 36, 42, 34, 24, 28, 25, 32, 38, 27, 40, 37, 33, 41, 35, 30, 39];

var fors = people.length;

function sort(people) {
  // Should convert to the 'each' iterator for this recursive stuff...
  for (var i = 0, j, temp; i < fors; ++i) {

    console.log(""); console.log("i = " + i); console.log(people);

    var j = i - 1;
    var temp = people[i];

    console.log("The person initiating the sort is at position " + i + ", with value " + people[i] + ".");

    console.log("If " + people[i] + " has a greater number that of the person to our left, " + people[j] + ", s/he remains in place; else, they swap spots.");

    for (j = (i - 1); j >= 0 && people[j] > temp; --j) {
      people[j + 1] = people[j];
      $('#' + temp).insertBefore('#' + people[j + 1]);

      // function visualize(){
      //   $('#' + temp).insertBefore('#' + people[j + 1]);
      //   setTimeout(visualize, 100);
      // }
      // setTimeout(visualize, 100);
      // visualize();

      console.log(temp + " is less than " + people[j + 1] + ": so " + temp + " moves into position " + j + " and " + people[j + 1] + " moves into position " + (j + 1));
    }
  people[j + 1] = temp;
  }
}

$(document).click(function() {
  $('#sortButton').click(sort(people));
});

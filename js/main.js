//Fill array of img IDs from DOM

function people() {
  var peopleArr = [];
  $("#sidewalk")
    .find("img")
    .each(function(){
      peopleArr.push(this.id);
    });
    return peopleArr;
}

function sort() {
  var ppl = people();
  console.log(ppl);

  for (var i = 0, j, temp; i < ppl.length; ++i) {
    var temp = ppl[i];
    for (j = (i - 1); j >= 0 && ppl[j] > temp; --j) {

      $('#' + temp).fadeOut(50);
      ppl[j + 1] = ppl[j];
      $('#' + temp).insertBefore('#' + ppl[j + 1]);

    }
  ppl[j + 1] = temp;
  $('#' + temp).fadeIn(50);
  }
}

function shuffle() {
  console.log('SHUFFLE');
  var toShuffle = people();

  var shuffled = function() {
    var m = toShuffle.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = toShuffle[m];
      toShuffle[m] = toShuffle[i];
      toShuffle[i] = t;
    }
    return toShuffle;
  };
  var display = shuffled();
  console.log('New order is ' + display);
  $('#sidewalk').empty();
  for (var i = 0; i < display.length; i++ ) {
    console.log(display[i]);
  var displayCode = '<img src="img/ppl/' + display[i] + '.jpg" id="' + display[i] + '">';
  $('#sidewalk').append(displayCode);
  }
}

$('#sortButton').click(function() {
  $('#sortButton').click(sort());
});

$('#shuffleButton').click(function() {
  $('#shuffleButton').click(shuffle());
});

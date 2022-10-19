var app = new Framework7({
  // App root element
  el: '#app',
  // ... other parameters
});
var mainView = app.views.create('.view-main')

var waterLevel = 20;
var noWater = 0;
var drowning = 40;

var nearDeath = false;

function dryout() {
  waterLevel--;
  console.log(waterLevel);
  checkHealth();
  var watertimer = setTimeout(dryout, 500);
}

dryout();

function checkHealth() {
  if(waterLevel <= noWater) {
    nearDeath = true;
    console.log("Help!");
    $('#plant path').css('fill', '#d2691e');
  }
}



// by default:
// - dry out over time
// - deplete in nutrients over time

// interactions:
// - water it, replenish the plant
// - feed it, nutrients for the plant
// - trim it

// care 
// - too much water, plant near death
// - too much fertilizer, plant near death
// - if the plant falls into a near death state, you can only heal it by trimming it

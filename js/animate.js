var allClouds = new TimelineLite(),
    $cloudContainer = $("#cloudContainer");


function animationClouds() {
  //loop through creation of 10 clouds
  for(var i = 0; i < 4; i ++){
    //dynamically create a cloud element
    var cloud = $('<div class="cloud"><img src="img/cloud1.png"></div>').appendTo($cloudContainer);
    //set its initial position and opacity using GSAP
    TweenLite.set(cloud, {left:-100, top:i*40, opacity:0});
    //create a repeating timeline for this cloud
    var cloudTl = new TimelineMax({repeat:-1});
    //fade opacity to 1
    cloudTl.to(cloud, 0.5, {opacity:1})
    //move cloud across its container div with random duration. Start time = 0
    .to(cloud, 10 + (Math.random() * 8), {left:"100%", ease:Linear.easeNone}, 0)
    //0.5 seconds before timeline ends start fading opacity to 0 
    .to(cloud, 0.5, {opacity:0}, "-=0.5")
    //add this cloud's timeline to the allClouds timeline at a random start time.
    allClouds.add(cloudTl, Math.random()*5);
  }
}

animationClouds();

function secondClouds() {
  //loop through creation of 10 clouds
  for(var i = 0; i < 4; i ++){
    //dynamically create a cloud element
    var cloud = $('<div class="cloud"><img src="img/cloud2.png"></div>').appendTo($cloudContainer);
    //set its initial position and opacity using GSAP
    TweenLite.set(cloud, {left:-100, top:i*40, opacity:0});
    //create a repeating timeline for this cloud
    var cloudTl = new TimelineMax({repeat:-1});
    //fade opacity to 1
    cloudTl.to(cloud, 0.5, {opacity:1})
    //move cloud across its container div with random duration. Start time = 0
    .to(cloud, 15 + (Math.random() * 8), {left:"100%", ease:Linear.easeNone}, 0)
    //0.5 seconds before timeline ends start fading opacity to 0 
    .to(cloud, 0.5, {opacity:0}, "-=0.5")
    //add this cloud's timeline to the allClouds timeline at a random start time.
    allClouds.add(cloudTl, Math.random()*5);
  }
}

secondClouds();
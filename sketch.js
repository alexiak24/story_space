var kinectron = null;
var bm = new BodyManager();

var deepPink;
var yellow;
var fullVid;


function preload() {
  // fullVid = createVideo("/assets/birdman.mp4");
  // fullVid.size(1920 , 1080);
  // fullVid.showControls();
  // fullVid.play();

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Define and create an instance of kinectron
  kinectron = new Kinectron("172.16.238.157");

  // CONNECT TO MICRROSTUDIO
  //kinectron = new Kinectron("kinectron.itp.tsoa.nyu.edu");
  imageMode(CENTER);
  // Connect with application over peer
  kinectron.makeConnection();
  kinectron.startTrackedBodies(bodyTracked);
  // background(0);h);
  // frameRate(1);
  deepPink = color(255,20,147);
  yellow = color(255,255,0);
}

      // var rightHandJoint = bm.getJoints(kinectron.HANDRIGHT)[0];

      // var rightHandSpeed = rightHandJoint.speed;
      // //do stuff to speed to fit the rate
      // fullVid.rate(rightHandSpeed);

function draw() 
{

  var rightHands = bm.getJoints(kinectron.HANDRIGHT);

  // if(bm.getJoints.length > 0)
  for(var i = 0; i < rightHands.length; i++)
  {
    // console.log(rightHands[i]);
    if(rightHands[i] != null)
    {
      // console.log("test");
      var rightHandJoint = rightHands[i];
      
      var rightHandSpeed = rightHandJoint.speed * 100;
      // if(rightHandSpeed > 7)
      // console.log(rightHandSpeed);
      //do stuff to speed to fit the rate
      var videoSpeed = map(rightHandSpeed, 0, 20, 0, 2);
      // fullVid.speed(videoSpeed);



      if(rightHandSpeed > 5)
      {
        if(i == 0)
        {
          fill(deepPink);
        }
        else
        {
          fill(yellow);
        }
        text(rightHandSpeed,random(0,width), random(0,height));
        console.log(rightHandSpeed);
      }
        
    }




  }



}


function bodyTracked(body) {
  var id = body.trackingId;
  // When there is a new body, add it
  if (!bm.contains(id)) bm.add(body);
  // Otherwise, update it
  else bm.update(body);
}




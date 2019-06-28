house = [0,1,2,3,4,5,6];
let room = 0;
let message = document.querySelector('#description');
let key = false;
let knife = false;
let scissors = false;
let screwdriver = false;

let form = document.querySelector('form');
form.addEventListener('submit', update)

/*Act*/
function update(event) {
  event.preventDefault();
  let form = event.target;
  let text = form.text.value;
  switch(room){
    case 0:
      switch(text) {
        case "look":
          bedRoom();
          break;
        case "x dresser":
          message.innerHTML += "<li>You open your dresser.  Wow!  There's clothes in here!</li>";
          if (knife==true) {message.innerHTML += "<li>You decide you want a new pair of ripped jeans.  So you take out your knife and get to work.  You find a screwdriver!</li>"; screwdriver=true;}
          break;
        case "x bed":
          message.innerHTML += "<li>You lay down in your bed.  It's so comfy you almost never want to leave!</li>"
          break;
        case "x nightstand":
          message.innerHTML += "<li>You look in the nightstand for something useful.  You find the banana you left for yourself last night.  Yum!</li>";
          break;
        case "s":
          livingRoom();
          break;
        default:
          message.innerHTML += "<li>That move is not allowed.</li>"
          break;
      }
      break;
    case 1:
      switch(text){
        case "look":
          bathRoom();
          break;
        case "x toilet":
          message.innerHTML += "<li>You try to use the toilet.  But you can't because you feel like someone is watching you.</li>";
          break;
        case "x sink":
          message.innerHTML += "<li>You wash your hands.  Good job!</li>";
          break;
        case "s":
          livingRoom();
          break;
        default:
          message.innerHTML += "<li>That move is not allowed</li>";
          break;
      }
      break;
    case 2:
      switch(text) {
        case "look":
          livingRoom();
          break;
        case "x trunk":
          message.innerHTML += "<li>You look in the chest of action figures.  You take out batman to 'examine'.  You notice his batteries are dead, and something jingling inside.  You'll need something to open his battery pack.</li>";
          if (screwdriver==true) {message.innerHTML += "<li>You use the screwdriver to open his battery pack.  You wonder what you could have stored in there.  After muttering 'righty tighty, lefty loosey' a few times, you open Batman's battery pack and find a key!</li>"; key=true;}
          break;
        case "x couch":
          message.innerHTML += "<li>You have a seat on the couch.  It is comfy.  It has served you well.</li>";
          break;
        case "x tv":
          message.innerHTML += "<li>You turn on the tv, but quickly turn it off because you're just not in the mood to watch The Bachelorette</li>";
          break;
        case "x door":
          message.innerHTML += "<li>You're a very cautious person, so you have locks on both sides of your door.</li>"
          if (key==true) {message.innerHTML += "<li>You unlock the door and step outside.  The light breeze carries the scent of flowers, the sun beams happily, the neighbor says 'hi'.  You made it outside.  Life is good.</li>";}
          break;
        case "w":
          office();
          break;
        case "e":
          kitchen();
          break;
        case "nw":
          bedRoom();
          break;
        case "ne":
          bathRoom();
          break;
        default:
          message.innerHTML += "<li>That move is not allowed.</li>"
          break;
      }
      break;
    case 3:
      switch(text) {
        case "look":
          office();
          break;
        case "x desk":
          if (scissors==false) {message.innerHTML += "<li>You examine your desk, looking for anything useful.  You don't find much.  But you do spot a pair of scissors in one of the drawers.  You take the scissors.</li>"; scissors=true;}
          else {message.innerHTML += "<li>You look around your desk again.  Not much to see here.</li>";}
          break;
        case "e":
          livingRoom();
          break;
        default:
          message.innerHTML += "<li>That move is not allowed</li>";
          break;
      }
      break;
    case 4:
      switch(text){
        case "look":
          kitchen();
          break;
        case "x fridge":
          message.innerHTML += "<li>Your fridge is looking a little low.  All you have left to eat is celery and jelly.</li>";
          break;
        case "x trashcan":
          message.innerHTML += "<li>You walk over to your trashcan, and immediately regret it.  You resolve to take you trash out.  But not right now.</li>";
          break;
        case "x cabinets":
          if (scissors==true){message.innerHTML += "<li>You use the scissors to cut that stupid child lock off.  And you triumphantly grab a knife!</li>"; knife=true;}
          else {message.innerHTML += "<li>You try to reach into the cabinet where you store everything.  From knives to bowls, it's all there.  For some reason it won't open.  You realize that when you mom came over last week, she put a child lock on it!  Better take care of that...stupid child lock.</li>";}
          break;
        case "w":
          livingRoom();
          break;
        default:
          message.innerHTML += "<li>That move is not allowed.</li>"
          break;
      }
      break;
  }
  form.reset();
  var elmnt = document.querySelector("#description");
  elmnt.scrollTo(0,10000);
}

function bedRoom() {
  room = 0;
  message.innerHTML += "You enter your bedroom.  It's pretty plain.  In front of you is your bed, on your left there's your dresser, in the corner is a nightstand, and behind you is the door";
}

function bathRoom() {
  room = 1;
  message.innerHTML += "<li>You walk into your bathroom.  In front of you is a freshly cleaned sink.  On you right, you see the toilet you just bought because of the incident last week...  Behind you is the door.</li>";
}

function livingRoom() {
  room = 2;
  message.innerHTML += "<li>You enter your living room.  It's a comfortable space with a tv in front of you, a couch behind you, and a trunk for your <strike>toys</strike> collectable action figures in the corner.  The bedroom is behind you to your right, the bathroom is behind you to your left.  Your office is on your right, kitchen on the left.  And the front door in sight!</li>"
}

function office() {
  room = 3;
  message.innerHTML += "<li>You step into your office.  The only thing in here is your cluttered desk.  The door is behind you.</li>"
}

function kitchen() {
  room = 4;
  message.innerHTML += "<li>You enter your kitchen.  You see the fridge to your left, you cabinets to the right, and a trashcan in front of you.</li>"
}

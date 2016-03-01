var usersArray = [
  {firstName: "John", lastName: "Doe", profilePicture: "profile-pictures/user1.jpg", isMyfriend: true },
  {firstName: "Jenn", lastName: "Jones", profilePicture: "profile-pictures/user2.jpg", isMyfriend: true },
  {firstName: "Fred", lastName: "Johnson", profilePicture: "profile-pictures/user3.jpg", isMyfriend: true},
  {firstName: "Alex", lastName: "Anderson", profilePicture: "profile-pictures/user4.jpg", isMyfriend: false},
  {firstName: "Harry", lastName: "Thompson", profilePicture: "profile-pictures/user5.jpg", isMyfriend: false},
  {firstName: "Betty", lastName: "Aaron", profilePicture: "profile-pictures/user6.jpg", isMyfriend: false},
  {firstName: "Alfred", lastName: "Nixon", profilePicture: "profile-pictures/user7.jpg", isMyfriend: false},
  {firstName: "James", lastName: "Phelps", profilePicture: "profile-pictures/user8.jpg", isMyfriend: false},
];

function addAFriend(userObject){
  //adds a single friend using an object as input
  var friendProfile = document.createElement("a");
  var friendPicture = document.createElement("img");
  friendPicture.setAttribute("class", "img-thumbnail");
  friendPicture.setAttribute("src", userObject.profilePicture);
  var nameText = document.createTextNode(userObject.firstName + " " + userObject.lastName);
  friendProfile.appendChild(friendPicture);
  friendProfile.appendChild(nameText);
  var friendsLocation = document.getElementById("yourFriends");
  friendsLocation.appendChild(friendProfile);
}

function addAPerson(userObject){
  var friendProfile = document.createElement("a");
  var friendPicture = document.createElement("img");
  friendPicture.setAttribute("class", "img-thumbnail");
  friendPicture.setAttribute("src", userObject.profilePicture);
  var nameText = document.createTextNode(userObject.firstName + " " + userObject.lastName);
  friendProfile.appendChild(friendPicture);
  friendProfile.appendChild(nameText);
  var friendsLocation = document.getElementById("notYourFriends");
  friendsLocation.appendChild(friendProfile);
}

function addAllFriends(arrayOfUsers){
  for(var i = 0; i < arrayOfUsers.length; i++){
    if(arrayOfUsers[i].isMyfriend == true){
      addAFriend(arrayOfUsers[i]);
    }
    else{
      addAPerson(arrayOfUsers[i]);
    }

  }
}

function removeAllFriends(){
  var friendsContainer = document.getElementById("yourFriends");
  while (friendsContainer.firstChild){
    friendsContainer.removeChild(friendsContainer.firstChild);
  }
}

function removeAllNotFriends(){
  var friendsContainer = document.getElementById("notYourFriends");
  while (friendsContainer.firstChild){
    friendsContainer.removeChild(friendsContainer.firstChild);
  }
}

function changeAFriend(e){
  var userNumber = "";
  var target = e.target;
  if( target.hasAttribute("src") ){
    console.log(target.getAttribute("src"));
    userNumber = target.getAttribute("src");
    for( var i = 0; i < 8; i++){
      if(userNumber == usersArray[i].profilePicture){
        if(usersArray[i].isMyfriend == true){
          usersArray[i].isMyfriend = false;
        }
        if(usersArray[i].isMyfriend == false){
          usersArray[i].isMyfriend = true;
        }
      }
    }
  }
  else if(target.firstChild.hasAttribute("src")){
    console.log(target.firstChild.getAttribute("src"));
    userNumber = target.firstChild.getAttribute("src");
    for( var i = 0; i < 8; i++){
      if(userNumber == usersArray[i].profilePicture){
        if(usersArray[i].isMyfriend == true){
          usersArray[i].isMyfriend = false;
        }
        if(usersArray[i].isMyfriend == false){
          usersArray[i].isMyfriend = true;
        }
      }
    }
  }
  removeAllFriends();
  removeAllNotFriends();
  addAllFriends(usersArray);
}



addAllFriends(usersArray);

var addToNotFriends = document.getElementById("notYourFriends");
addToNotFriends.addEventListener("click", changeAFriend);
var addToFriends = document.getElementById("yourFriends");
addToFriends.addEventListener("click", changeAFriend);

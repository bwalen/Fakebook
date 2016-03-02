var usersArray = [
  {firstName: "John", lastName: "Doe", profilePicture: "profile-pictures/user1.jpg", isMyfriend: true, userId: 0},
  {firstName: "Jenn", lastName: "Jones", profilePicture: "profile-pictures/user2.jpg", isMyfriend: false, userId: 1},
  {firstName: "Fred", lastName: "Johnson", profilePicture: "profile-pictures/user3.jpg", isMyfriend: true, userId: 2},
  {firstName: "Alex", lastName: "Anderson", profilePicture: "profile-pictures/user4.jpg", isMyfriend: false, userId: 3},
  {firstName: "Harry", lastName: "Thompson", profilePicture: "profile-pictures/user5.jpg", isMyfriend: false, userId: 4},
  {firstName: "Betty", lastName: "Aaron", profilePicture: "profile-pictures/user6.jpg", isMyfriend: false, userId: 5},
  {firstName: "Alfred", lastName: "Nixon", profilePicture: "profile-pictures/user7.jpg", isMyfriend: false, userId: 6},
  {firstName: "James", lastName: "Phelps", profilePicture: "profile-pictures/user8.jpg", isMyfriend: false, userId: 7}
];

var timelineArray = [
  {userId: 0, postId: 0, date: 20160225, doILike: false, bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,"},
  {userId: 1, postId: 1, date: 20160225, doILike: false, bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,"},
  {userId: 2, postId: 2, date: 20160225, doILike: false, bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere"},
  {userId: 3, postId: 3, date: 20160225, doILike: false, bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas"},
  {userId: 4, postId: 4, date: 20160225, doILike: false, bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"},
  {userId: 5, postId: 5, date: 20160225, doILike: false, bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex"},
  {userId: 6, postId: 6, date: 20160225, doILike: false, bodyText: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles."},
  {userId: 7, postId: 7, date: 20160225, doILike: false, bodyText: "LLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar"},
  {userId: 0, postId: 8, date: 20160225, doILike: true, bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem"}
]

function addAFriend(userObject){
  //adds a person by appending the dom, either as a friend or not using a user object as input
  var friendProfile = document.createElement("a");
  var friendPicture = document.createElement("img");
  friendPicture.setAttribute("class", "img-thumbnail");
  friendPicture.setAttribute("src", userObject.profilePicture);
  var nameText = document.createTextNode(userObject.firstName + " " + userObject.lastName);
  friendProfile.appendChild(friendPicture);
  friendProfile.appendChild(nameText);
  var friendsLocation;
  if (userObject.isMyfriend == true){
    friendsLocation = document.getElementById("yourFriends");
  }
  else{
    friendsLocation = document.getElementById("notYourFriends");
  }
  friendsLocation.appendChild(friendProfile);
}

function addAllFriends(arrayOfUsers){
  //loops through the user array passing each user to the addAFriend function
  for(var i = 0; i < arrayOfUsers.length; i++){
      addAFriend(arrayOfUsers[i]);
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
  /*this function is called by the event listener for whenever someone clicks on a profile picture,
  it will change the person to a friend and add their picture to the correct spot on the page.*/
  var userNumber = "";
  var target = e.target;
  if( target.hasAttribute("src") ){
    userNumber = target.getAttribute("src");
  }
  else if(target.firstChild.hasAttribute("src")){
    userNumber = target.firstChild.getAttribute("src");
  }
  for( var i = 0; i < usersArray.length; i++){
    if(userNumber == usersArray[i].profilePicture){
      if(usersArray[i].isMyfriend == true){
        usersArray[i].isMyfriend = false;
      }
      else{
        usersArray[i].isMyfriend = true;
      }
    }
  }
  removeAllFriends();
  removeAllNotFriends();
  addAllFriends(usersArray);
  removeAllPosts();
  addAllTimeline(usersArray, timelineArray);
  likeButtonListeners();
}

function addAllTimeline(usersArray, timelineArray){
  for( var i = 0; i < timelineArray.length; i++)
  {
    if( usersArray[timelineArray[i].userId].isMyfriend == true){
      addAPost(usersArray[timelineArray[i].userId], timelineArray[i] );
    }
  }
}

function addAPost(userobj, inputObj){
  var timeLineLocation = document.getElementById("posts");
  var outterMostDiv = document.createElement("div");
  outterMostDiv.setAttribute("class" , "panel panel-default");
  var secondDiv = document.createElement("div");
  secondDiv.setAttribute("class" , "panel-heading");
  var headerLink = document.createElement("a");
  var headerProfileImage = document.createElement("img");
  headerProfileImage.setAttribute("class", "img-post");
  headerProfileImage.setAttribute("src", userobj.profilePicture);
  var userNameText = document.createTextNode(userobj.firstName + " " + userobj.lastName);
  var likeButton = document.createElement("img");
  if(inputObj.doILike == true){
    likeButton.setAttribute("class", "liked-button");
    likeButton.setAttribute("src", "like3.png");
    likeButton.setAttribute("id", inputObj.postId);
  }
  else{
    likeButton.setAttribute("class" , "like-button");
    likeButton.setAttribute("src" , "like10.png");
    likeButton.setAttribute("id", inputObj.postId);
  }
  var bodyDiv = document.createElement("div");
  bodyDiv.setAttribute("class", "panel-body");
  var bodyText = document.createTextNode(inputObj.bodyText);
  bodyDiv.appendChild(bodyText);
  headerLink.appendChild(headerProfileImage);
  headerLink.appendChild(userNameText);
  secondDiv.appendChild(headerLink);
  secondDiv.appendChild(likeButton);
  outterMostDiv.appendChild(secondDiv);
  outterMostDiv.appendChild(bodyDiv);
  timeLineLocation.appendChild(outterMostDiv);
}

function removeAllPosts(){
  var postsContainer = document.getElementById("posts");
  while (postsContainer.firstChild){
    postsContainer.removeChild(postsContainer.firstChild);
  }
}

function likeButton(e){
  timelineArray[e.toElement.getAttribute("id")].doILike = true;
  e.toElement.setAttribute("src", "like3.png");
  e.toElement.setAttribute("class", "liked-button");
}

function likeButtonListeners(){
  var likeAPost = document.getElementsByClassName("like-button");
  for (i = 0; i < likeAPost.length; i++){
    likeAPost[i].addEventListener("click", likeButton);
  }
}

addAllFriends(usersArray);
addAllTimeline(usersArray, timelineArray);
var addToNotFriends = document.getElementById("notYourFriends");
addToNotFriends.addEventListener("click", changeAFriend);
var addToFriends = document.getElementById("yourFriends");
addToFriends.addEventListener("click", changeAFriend);
likeButtonListeners();

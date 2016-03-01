function createPost(postId){
  var newPost = document.createElement("div");
  var postText = document.createTextNode(postId.postContent);
  newPost.appendChild(postText);
  var container = document.getElementById("posts");
  container.appendChild(newPost);
}

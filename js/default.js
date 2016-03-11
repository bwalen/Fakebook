var currentTime = new Date();
var stringDate = (currentTime.getMonth()+1) + "-" + currentTime.getDate() + "-" + currentTime.getFullYear();

var usersArray = [ //data for all users
  {firstName: "John", lastName: "Doe", profilePicture: "images/profile/user1.jpg", userLocation: "California", occupation: "Doctor", numberOfFriends: 50, isMyfriend: true, userId: 0},
  {firstName: "Jenn", lastName: "Jones", profilePicture: "images/profile/user2.jpg", userLocation: "Los Angeles", occupation: "Film Producer", numberOfFriends: 60, isMyfriend: false, userId: 1},
  {firstName: "Fred", lastName: "Johnson", profilePicture: "images/profile/user3.jpg", userLocation: "Irvine", occupation: "Machinist", numberOfFriends: 73, isMyfriend: true, userId: 2},
  {firstName: "Alex", lastName: "Anderson", profilePicture: "images/profile/user4.jpg", userLocation: "Long Beach", occupation: "Dietician", numberOfFriends: 84, isMyfriend: false, userId: 3},
  {firstName: "Harry", lastName: "Thompson", profilePicture: "images/profile/user5.jpg", userLocation: "San Diego", occupation: "Lifeguard", numberOfFriends: 95, isMyfriend: false, userId: 4},
  {firstName: "Betty", lastName: "Aaron", profilePicture: "images/profile/user6.jpg", userLocation: "Tustin", occupation: "Surgeon", numberOfFriends: 208, isMyfriend: false, userId: 5},
  {firstName: "Alfred", lastName: "Nixon", profilePicture: "images/profile/user7.jpg", userLocation: "Riverside", occupation: "Butcher", numberOfFriends: 53, isMyfriend: false, userId: 6},
  {firstName: "James", lastName: "Phelps", profilePicture: "images/profile/user8.jpg", userLocation: "San Francisco", occupation: "Antique Dealer", numberOfFriends: 88, isMyfriend: false, userId: 7},
  {firstName: "Brian", lastName: "Walen", profilePicture: "images/profile/blank-large.jpg", userLocation: "Orange County", occupation: "Software Developer", numberOfFriends: 2, isMyfriend: true, userId: 8, isCurrentUser: true}
];

var timelineArray = [ //data for all timeline posts
  {userId: 0, postId: 0, date: "02-01-2016", doILike: false, timeLinePicture: "images/timeline/beautiful-04.jpg", bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,"},
  {userId: 1, postId: 1, date: "02-02-2016", doILike: false, timeLinePicture: null, bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,"},
  {userId: 2, postId: 2, date: "02-03-2016", doILike: false, timeLinePicture: "images/timeline/1.jpg", bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere"},
  {userId: 3, postId: 3, date: "02-04-2016", doILike: false, timeLinePicture: null, bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas"},
  {userId: 4, postId: 4, date: "02-05-2016", doILike: false, timeLinePicture: "images/timeline/189c.jpg", bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"},
  {userId: 5, postId: 5, date: "02-06-2016", doILike: false, timeLinePicture: "images/timeline/3.jpg", bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex"},
  {userId: 6, postId: 6, date: "02-07-2016", doILike: false, timeLinePicture: null, bodyText: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles."},
  {userId: 7, postId: 7, date: "02-08-2016", doILike: false, timeLinePicture: "images/timeline/101301.jpg", bodyText: "LLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar"},
  {userId: 0, postId: 8, date: "02-09-2016", doILike: true, timeLinePicture: null, bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem"},
  {userId: 0, postId: 9, date: "02-10-2016", doILike: false, timeLinePicture: null, bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,"},
  {userId: 1, postId: 10, date: "02-11-2016", doILike: false, timeLinePicture: "images/timeline/quotes-2.jpg", bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,"},
  {userId: 8, postId: 11, date: "02-12-2016", doILike: false, timeLinePicture: "images/timeline/8.jpg", bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere"},
  {userId: 3, postId: 12, date: "02-13-2016", doILike: false, timeLinePicture: "images/timeline/dogs.jpg", bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas"},
  {userId: 4, postId: 13, date: "02-14-2016", doILike: false, timeLinePicture: null, bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"},
  {userId: 5, postId: 14, date: "02-15-2016", doILike: false, timeLinePicture: "images/timeline/8.jpg", bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex"},
  {userId: 6, postId: 15, date: "02-16-2016", doILike: false, timeLinePicture: "images/timeline/desktop_3.jpg", bodyText: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles."},
  {userId: 7, postId: 16, date: "02-17-2016", doILike: false, timeLinePicture: null, bodyText: "LLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar"},
  {userId: 0, postId: 17, date: "02-18-2016", doILike: true, timeLinePicture: null, bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem"},
  {userId: 1, postId: 18, date: "02-19-2016", doILike: false, timeLinePicture: "images/timeline/6.jpg", bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,"},
  {userId: 2, postId: 19, date: "02-20-2016", doILike: false, timeLinePicture: null, bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere"},
  {userId: 3, postId: 20, date: "02-21-2016", doILike: false, timeLinePicture: "images/timeline/9.jpg", bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas"},
  {userId: 4, postId: 21, date: "02-22-2016", doILike: false, timeLinePicture: "images/timeline/7.jpg", bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"},
  {userId: 8, postId: 22, date: "02-23-2016", doILike: false, timeLinePicture: null, bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex"},
  {userId: 6, postId: 23, date: "02-24-2016", doILike: false, timeLinePicture: "images/timeline/4.jpg", bodyText: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles."},
  {userId: 7, postId: 24, date: "02-25-2016", doILike: false, timeLinePicture: null, bodyText: "LLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar"},
  {userId: 0, postId: 25, date: "02-26-2016", doILike: true, timeLinePicture: "images/timeline/2.jpg", bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem"}
]

var sponsorsProfile = [ //data for sponsored users
  {firstName: "Amazon", lastName: "Sponsored Post", profilePicture: "images/profile/amazon.jpg", isMyfriend: false, userId: 8},
  {firstName: "Twitter", lastName: "Sponsored Post", profilePicture: "images/profile/twitter.png", isMyfriend: false, userId: 9},
  {firstName: "Yelp", lastName: "Sponsored Post", profilePicture: "images/profile/yelp.png", isMyfriend: false, userId: 10},
  {firstName: "Youtube", lastName: "Sponsored Post", profilePicture: "images/profile/youtube.png", isMyfriend: false, userId: 11}
]

var sponsorsPosts = [ //data for sponsored posts
  {userId: 8, postId: 26, date: stringDate, doILike: false, timeLinePicture: "images/timeline/amazon1.png", timeLineLink: "http://www.amazon.com", bodyText: "Amazon.com and you're done."},
  {userId: 9, postId: 27, date: stringDate, doILike: false, timeLinePicture: "images/timeline/twitter.jpg", timeLineLink: "http://www.twitter.com", bodyText: "The best way to discover what's new in your world."},
  {userId: 10, postId: 28, date: stringDate, doILike: false, timeLinePicture: "images/timeline/yelp.jpg", timeLineLink: "http://www.yelp.com", bodyText: "Real People.  Real Reviews."},
  {userId: 11, postId: 29, date: stringDate, doILike: false, timeLinePicture: "images/timeline/youtube.png", timeLineLink: "http://www.youtube.com", bodyText: "Broadcast Yourself!"}
]

function addAFriend(userObject){
  //adds a person by appending the dom, either as a friend or not using a user object as input
  var friendProfile = document.createElement("a");
  friendProfile.setAttribute("userid", userObject.userId);
  var friendPicture = document.createElement("img");
  var friendsDiv = document.createElement("div");
  var nameP = document.createElement("p");
  friendsDiv.setAttribute("class", "thumbnail-height");
  friendPicture.setAttribute("class", "img-friends");
  friendPicture.setAttribute("src", userObject.profilePicture);
  var textP = document.createElement("p");
  textP.setAttribute("class", "name-text");
  var nameText = document.createTextNode(userObject.firstName + " " + userObject.lastName);
  friendsDiv.appendChild(friendPicture);
  textP.appendChild(nameText);
  friendsDiv.appendChild(textP);
  friendProfile.appendChild(friendsDiv);
  var friendsLocation;
  if (userObject.isMyfriend == true){
    friendsLocation = document.getElementById("yourFriends");
  }
  else{
    friendsLocation = document.getElementById("notYourFriends");
    friendProfile.setAttribute("friend", false);
  }
  friendsLocation.appendChild(friendProfile);
}

function addAllFriends(arrayOfUsers){
  //loops through the user array passing each user to the addAFriend function
  //also sorts friends alphabetically by last name
  removeAllFriends();
  var sortedArray = _.sortBy(arrayOfUsers, 'lastName');
  for(var i = 0; i < sortedArray.length; i++){
    if(sortedArray[i].isCurrentUser!=true){
      addAFriend(sortedArray[i]);
    }
  }
}

function removeAllFriends(){
  //removes all friends and not-notfriends from the left side panel
  var friendsContainer = document.getElementById("yourFriends");
  while (friendsContainer.firstChild){
    friendsContainer.removeChild(friendsContainer.firstChild);
  }
  var notFriendsContainer = document.getElementById("notYourFriends");
  while (notFriendsContainer.firstChild){
    notFriendsContainer.removeChild(notFriendsContainer.firstChild);
  }
}

function addAllTimeline(usersArray, timelineArray){
  //adds the time line posts to the page
  removeAllPosts();
  addFriendPanel();
  var postcounter = 0;
  var randomnumber;
  for( var i = timelineArray.length-1; i >= 0; i--)
  {
    if( postcounter == 1 || postcounter == 7 || postcounter == 15 || postcounter==25){//adds sponsored posts
      randomnumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
      addAPost(sponsorsProfile[randomnumber], sponsorsPosts[randomnumber]);
      postcounter++;
    }
    if( usersArray[timelineArray[i].userId].isMyfriend == true){ //only adds posts for people who are friends
      addAPost(usersArray[timelineArray[i].userId], timelineArray[i] );
      postcounter++;
    }
  }
  var addFriend = document.getElementById("friend-panel");
  addFriend.addEventListener("click", changeAfriend);
}

function addAPost(userobj, inputObj){
  //used to add a single post to the timeline when passed a user object and a post object
  var timeLineLocation = document.getElementById("posts");
  var outterMostDiv = document.createElement("div");
  outterMostDiv.setAttribute("class" , "panel panel-default");
  var secondDiv = document.createElement("div");
  secondDiv.setAttribute("class" , "panel-heading");
  var headerLink = document.createElement("a");
  headerLink.setAttribute("userid", userobj.userId);
  if(userobj.numberOfFriends >= 0){ //adds class only to real users so that sponsors do not have a profile listener
    headerLink.setAttribute("class" , "view-profile");
  }
  var headerProfileImage = document.createElement("img");
  headerProfileImage.setAttribute("class", "img-post");
  headerProfileImage.setAttribute("src", userobj.profilePicture);
  var userNameText = document.createTextNode(userobj.firstName + " " + userobj.lastName);
  var likeButton = document.createElement("img");
  if(userobj.numberOfFriends){//makes sure sponsored posts do not get like buttons
    if(inputObj.doILike == true){
      likeButton.setAttribute("class", "like-button liked-button");
      likeButton.setAttribute("src", "images/like3.png");
      likeButton.setAttribute("postid", inputObj.postId);
    }
    else{
      likeButton.setAttribute("class" , "like-button");
      likeButton.setAttribute("src" , "images/like10.png");
      likeButton.setAttribute("postid", inputObj.postId);
    }
  }
  var bodyDiv = document.createElement("div");
  bodyDiv.setAttribute("class", "panel-body");
  var bodyText = document.createTextNode(inputObj.bodyText);
  var bodyImage = document.createElement("img");
  var bodyHR = document.createElement("hr");
  var profilePictureLink = document.createElement("a");
  var dateText = document.createTextNode("Posted: " + inputObj.date);
  if(inputObj.timeLinePicture){//for adding an optional picture to a timeline post
    bodyImage.setAttribute("class" , "img-responsive");
    bodyImage.setAttribute("src", inputObj.timeLinePicture);
    if(inputObj.timeLineLink){//for adding an optional link to a time
      profilePictureLink.setAttribute("href", inputObj.timeLineLink);
      profilePictureLink.appendChild(bodyImage);
      bodyDiv.appendChild(profilePictureLink);
    }
    else{
      bodyDiv.appendChild(bodyImage);
    }
    bodyDiv.appendChild(bodyHR);
  }
  bodyDiv.appendChild(bodyText);
  bodyDiv.appendChild(bodyHR);
  bodyDiv.appendChild(dateText);
  headerLink.appendChild(headerProfileImage);
  headerLink.appendChild(userNameText);
  secondDiv.appendChild(headerLink);
  secondDiv.appendChild(likeButton);
  outterMostDiv.appendChild(secondDiv);
  outterMostDiv.appendChild(bodyDiv);
  timeLineLocation.appendChild(outterMostDiv);
}

function removeAllPosts(){
  //deletes everything from the timeline
  var postsContainer = document.getElementById("posts");
  while (postsContainer.firstChild){
    postsContainer.removeChild(postsContainer.firstChild);
  }
}

function likeButton(e){
  //called by event listener when the user clicks on a like button
  //causes post to become liked, or unliked
  if( timelineArray[e.toElement.getAttribute("postid")].doILike == false){
    timelineArray[e.toElement.getAttribute("postid")].doILike = true;
    e.toElement.setAttribute("src", "images/like3.png");
    e.toElement.setAttribute("class", "liked-button");
  }
  else{
    timelineArray[e.toElement.getAttribute("postid")].doILike = false;
    e.toElement.setAttribute("src", "images/like10.png");
    e.toElement.setAttribute("class", "like-button");
  }
}

function updateStatusText(){
  //called by the even listener when user clicks on the submit button in the update status form
  //adds a new post by the user to the timeline data array and then displays the timeline
  var statusInput = document.getElementById("status-input");
  if(statusInput.value != ""){
    timelineArray.push({userId: 8, postId: timelineArray.length, date: stringDate, doILike: false, timeLinePicture: null, bodyText: statusInput.value});
    addAllTimeline(usersArray, timelineArray);
    statusInput.value = "";
  }
}

function showLikedPost(){
  //called by the event listener when the user clicks on link to show liked posts
  //displays only posts the user has liked in the timeline
  var likedPostsArray = _.where(timelineArray, {doILike: true});
  removeAllPosts();
  for( var i = 0; i < likedPostsArray.length; i++)
  {
    addAPost(usersArray[likedPostsArray[i].userId], likedPostsArray[i] );
  }
}

function newsRequest(){
  //makes initial call to new york times to pull in news articles and sets up
  //the event listener to know when they have responded with the data
  news = new XMLHttpRequest();
  news.open("GET" , "http://api.nytimes.com/svc/search/v2/articlesearch.json?fl=headline%2Cweb_url%2Csnippet%2Clead_paragraph&api-key=ba97582bc69cd83e731a2b0260adee46%3A5%3A74617978", true);
  news.send();
  news.addEventListener("readystatechange", processNewsRequest);
}

function processNewsRequest(e){
  //processes the data received from new york times and chooses the data which
  //is complete enough to display
  var numberPosted=0;
  var checkedArticles=0;
  if(news.readyState == 4 && news.status == 200){
    response = JSON.parse(news.responseText);
    while(numberPosted < 3){
      if(response.response.docs[checkedArticles].headline.print_headline){
        addNews(checkedArticles);
        numberPosted++;
      }
      checkedArticles++;
    }
  }
}

function addNews(whichStory){
  //physically adds the news data to the page
  var newsContainer = document.getElementById("news");
  var newslink = document.createElement("a");
  var newsListItem = document.createElement("li");
  var articleTitle = response.response.docs[whichStory].headline.print_headline;
  var stringBreakdown = response.response.docs[whichStory].snippet.slice(0, 45);
  newslink.setAttribute("href", response.response.docs[whichStory].web_url);
  newslink.setAttribute("target", "_blank");
  var linkText = document.createTextNode(articleTitle + ": ");
  var articleText = document.createTextNode(stringBreakdown + "...");
  newslink.appendChild(linkText);
  newsListItem.appendChild(newslink);
  newsListItem.appendChild(articleText);
  newsContainer.appendChild(newsListItem);
}

function displayProfile(userId){
  //called by the event listener when the user clicks on the picture or name of a friend
  //displays that friend's profile, their pictures, and all of their timeline posts
  removeAllPosts();
  var container = document.getElementById("posts");
  var outterPanel = document.createElement("div");
  outterPanel.setAttribute("class", "panel panel-default");
  var panelBody = document.createElement("div");
  panelBody.setAttribute("class", "panel-body")
  var rowDiv = document.createElement("div");
  rowDiv.setAttribute("class", "row");
  var colDiv = document.createElement("div");
  colDiv.setAttribute("class", "col-sm-6 col-xs-6");
  var profileImage = document.createElement("img");
  profileImage.setAttribute("src", usersArray[userId].profilePicture);
  profileImage.setAttribute("class", "img-responsive");
  var textColDiv = document.createElement("div");
  textColDiv.setAttribute("class", "col-sm-6 col-xs-6");
  var profileHeader = document.createElement("h5");
  var profileHeaderText = document.createTextNode (usersArray[userId].firstName + " " + usersArray[userId].lastName + "'s Profile");
  var locationElement = document.createElement("h5");
  var locationText = document.createTextNode("Location: " + usersArray[userId].userLocation);
  var occupationElement = document.createElement("h5");
  var occupationText = document.createTextNode("Occupation: " + usersArray[userId].occupation);
  var friendsElement = document.createElement("h5");
  var friendsText = document.createTextNode("Number of friends: " + usersArray[userId].numberOfFriends);
  var removeFriendLink = document.createElement("a");
  var removeFriendText = document.createTextNode("Remove this friend.");
  removeFriendLink.appendChild(removeFriendText);
  removeFriendLink.setAttribute("id", "remove-friend");
  removeFriendLink.setAttribute("remove", userId);
  friendsElement.appendChild(friendsText);
  occupationElement.appendChild(occupationText);
  locationElement.appendChild(locationText);
  profileHeader.appendChild(profileHeaderText);
  textColDiv.appendChild(profileHeader);
  textColDiv.appendChild(locationElement);
  textColDiv.appendChild(occupationElement)
  textColDiv.appendChild(friendsElement);
  if(usersArray[userId].isCurrentUser!=true){
    textColDiv.appendChild(removeFriendLink);
  }
  colDiv.appendChild(profileImage);
  rowDiv.appendChild(colDiv);
  rowDiv.appendChild(textColDiv);
  panelBody.appendChild(rowDiv);
  outterPanel.appendChild(panelBody);
  container.appendChild(outterPanel);
  usersPictures(userId);
  displayUsersPosts(userId);
  scroll(0,0);
}

function usersPictures(user){
  //adds a friend's pictures to their profile when viewing their profile
  var container = document.getElementById("posts");
  var outterPanel = document.createElement("div");
  outterPanel.setAttribute("class", "panel panel-default");
  var panelBody = document.createElement("div");
  panelBody.setAttribute("class", "panel-body");
  var rowDiv = document.createElement("div");
  rowDiv.setAttribute("class", "row");
  var colDiv = document.createElement("div");
  colDiv.setAttribute("class", "col-sm-12");
  colDiv.setAttribute("id", "pictures");
  var imagesCreate = document.createElement("img");
  imagesCreate.setAttribute("class", "img-responsive");
  rowDiv.appendChild(colDiv);
  panelBody.appendChild(rowDiv);
  outterPanel.appendChild(panelBody);
  container.appendChild(outterPanel);
  for( var i = 0 ; i < timelineArray.length; i++){
    if(user == timelineArray[i].userId && timelineArray[i].timeLinePicture){
      addAPicture(timelineArray[i].timeLinePicture);
    }
  }
}

function addAPicture(url){
  //adds each picture to the pictures panel in a user profile
  var pictureLocation = document.getElementById("pictures");
  var pictureElement = document.createElement("img");
  pictureElement.setAttribute("class", "img-responsive");
  pictureElement.setAttribute("src", url);
  pictureLocation.appendChild(pictureElement);
}

function displayUsersPosts(user){
  //adds each of a user's posts to the bottom of their profile
  for( var i = 0; i < timelineArray.length; i++){
    if(timelineArray[i].userId == user ){
      addAPost(usersArray[user], timelineArray[i]);
    }
  }
}

function changeAfriend(userNumber){
  //called by the event listener
  //if the inputted user is a friend, they are removed from friends, if they are
  //not a friend, they are added
  if(usersArray[userNumber].isMyfriend == false){
    usersArray[userNumber].isMyfriend=true;
    usersArray[userNumber].numberOfFriends++;
    usersArray[8].numberOfFriends++;
  }
  else{
    usersArray[userNumber].isMyfriend=false;
    usersArray[userNumber].numberOfFriends--;
    usersArray[8].numberOfFriends--;
  }
  addAllFriends(usersArray);
  addAllTimeline(usersArray, timelineArray);
}

function addFriendPanel(){
  //this adds the "add friends" panel to smaller form screens
  var timeLineLocation = document.getElementById("posts");
  var outterMostDiv = document.createElement("div");
  outterMostDiv.setAttribute("class" , "visible-xs-block visible-sm-block panel panel-default");
  var secondDiv = document.createElement("div");
  secondDiv.setAttribute("class" , "panel-heading");
  var headerElement = document.createElement("h5");
  var headerText = document.createTextNode("PEOPLE YOU MIGHT KNOW");
  headerElement.appendChild(headerText);
  secondDiv.appendChild(headerElement);
  outterMostDiv.appendChild(secondDiv);
  var bodyDiv = document.createElement("div");
  bodyDiv.setAttribute("class", "panel-body")
  bodyDiv.setAttribute("id", "friend-panel");
  outterMostDiv.appendChild(bodyDiv);
  timeLineLocation.appendChild(outterMostDiv);
  for(var i = 0; i < usersArray.length; i++)
  {
    if(usersArray[i].isMyfriend==false){
      addFriendToPanel(usersArray[i]);
    }
  }
}

function addFriendToPanel(userObj){
  //adds friends to the "add friends" panel for smaller form screens
  var bodyDiv = document.getElementById("friend-panel");
  var friendSpan = document.createElement("div");
  friendSpan.setAttribute("class", "col-sm-4 col-xs-4");
  var friendPicture = document.createElement("img");
  var pictureLink = document.createElement("a");
  pictureLink.setAttribute("userid", userObj.userId);
  pictureLink.setAttribute("friend", false);
  pictureLink.setAttribute("class", "img-newfriends");
  friendPicture.setAttribute("src", userObj.profilePicture);
  friendPicture.setAttribute("class", "img-responsive");
  var userNameP = document.createElement("p");
  userNameP.setAttribute("class", "text-center");
  var userNameText = document.createTextNode(userObj.firstName + " " + userObj.lastName);
  userNameP.appendChild(userNameText);
  pictureLink.appendChild(friendPicture);
  pictureLink.appendChild(userNameP);
  friendSpan.appendChild(pictureLink);
  bodyDiv.appendChild(friendSpan);
}

function displayEdit(){
  //called by the event listener when the user clicks on Edit profile
  //shows the hidden panel which allows the user to change their profile
  var element = document.getElementById("edit");
  element.setAttribute("class", "panel panel-default");
}

function changeProfile(string){
  //makes changes to the user's information when the user edit's their profile
  var element = document.getElementById("edit");
  var firstNameElement = document.getElementById("editProfileName");
  var lastNameElement = document.getElementById("editProfileLastName");
  var locationElement = document.getElementById("editProfileLocation");
  var occupationElement = document.getElementById("editProfileOccupation");
  var profileName = document.getElementById("your-profile");
  if(string=="submit"){
    usersArray[8].firstName = firstNameElement.value;
    usersArray[8].lastName = lastNameElement.value;
    usersArray[8].userLocation = locationElement.value;
    usersArray[8].occupation = occupationElement.value;
    addName();
  }
  firstNameElement.value = "";
  lastNameElement.value = "";
  locationElement.value = "";
  occupationElement.value = "";
  element.setAttribute("class", "hidden panel panel-default");
  displayProfile(8);
}

function addName(){
  //Adds the name of the user to the left-side panel.  Necessary for if the user changes their profile
  var nameLocation = document.getElementById("your-profile");
  var nameText = document.createTextNode( " " + usersArray[8].firstName + " " + usersArray[8].lastName);
  var iconSpan = document.createElement("span");
  iconSpan.setAttribute("class", "glyphicon glyphicon-user");
  iconSpan.setAttribute("aria-hidden", "true");
  while(nameLocation.firstChild){
    nameLocation.removeChild(nameLocation.firstChild);
  }
  nameLocation.appendChild(iconSpan);
  nameLocation.appendChild(nameText);
}

function postsProcess(e){
  //processes the event listener and sends input to the correct function
  if(e.toElement.hasAttribute("postId")){
    likeButton(e);
  }
  else if(e.target.hasAttribute("userid") && usersArray[e.target.getAttribute("userid")]){
    displayProfile(e.target.getAttribute("userid"));
  }
  else if(e.target.parentNode.hasAttribute("userid") && usersArray[e.target.parentNode.getAttribute("userid")].isMyfriend){
    displayProfile(e.target.parentNode.getAttribute("userid"))
  }
  else if(e.target.parentNode.parentNode.hasAttribute("userid") && usersArray[e.target.parentNode.parentNode.getAttribute("userid")].isMyfriend){
    displayProfile(e.target.parentNode.parentNode.getAttribute("userid"));
  }
  else if(e.target.parentNode.hasAttribute("friend")){
    changeAfriend(e.target.parentNode.getAttribute("userid"));
  }
  else if(e.target.parentNode.parentNode.hasAttribute("friend")){
    changeAfriend(e.target.parentNode.parentNode.getAttribute("userid"));
  }
  else if(e.target.hasAttribute("remove")){
    changeAfriend(e.target.getAttribute("remove"));
  }
  else if(e.target.getAttribute("id")=="timeline"){
    addAllTimeline(usersArray, timelineArray);
  }
  else if(e.target.getAttribute("id")=="liked-posts"){
    showLikedPost();
  }
  else if(e.target.getAttribute("id")=="status-submit"){
    updateStatusText();
  }
  else if(e.target.getAttribute("id")=="your-profile"){
    displayProfile(8);
  }
  else if(e.target.getAttribute("id")=="edit-profile"){
    displayProfile(8);
    displayEdit();
  }
  else if(e.target.getAttribute("id")=="editProfileSubmit"){
    changeProfile("submit");
  }
  else if(e.target.getAttribute("id")=="editProfileCancel"){
    changeProfile("cancel");
  }
}

var news;
var response;
newsRequest();
addName();
addAllFriends(usersArray);
addAllTimeline(usersArray, timelineArray);
var postsListener = document.getElementById("body");
postsListener.addEventListener("click", postsProcess);

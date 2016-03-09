var usersArray = [
  {firstName: "John", lastName: "Doe", profilePicture: "images/profile/user1.jpg", userLocation: "California", occupation: "Doctor", numberOfFriends: 50, isMyfriend: true, userId: 0},
  {firstName: "Jenn", lastName: "Jones", profilePicture: "images/profile/user2.jpg", userLocation: "Los Angeles", occupation: "Film Producer", numberOfFriends: 60, isMyfriend: false, userId: 1},
  {firstName: "Fred", lastName: "Johnson", profilePicture: "images/profile/user3.jpg", userLocation: "Irvine", occupation: "Machinist", numberOfFriends: 73, isMyfriend: true, userId: 2},
  {firstName: "Alex", lastName: "Anderson", profilePicture: "images/profile/user4.jpg", userLocation: "Long Beach", occupation: "Dietician", numberOfFriends: 84, isMyfriend: false, userId: 3},
  {firstName: "Harry", lastName: "Thompson", profilePicture: "images/profile/user5.jpg", userLocation: "San Diego", occupation: "Lifeguard", numberOfFriends: 95, isMyfriend: false, userId: 4},
  {firstName: "Betty", lastName: "Aaron", profilePicture: "images/profile/user6.jpg", userLocation: "Tustin", occupation: "Surgeon", numberOfFriends: 208, isMyfriend: false, userId: 5},
  {firstName: "Alfred", lastName: "Nixon", profilePicture: "images/profile/user7.jpg", userLocation: "Riverside", occupation: "Butcher", numberOfFriends: 53, isMyfriend: false, userId: 6},
  {firstName: "James", lastName: "Phelps", profilePicture: "images/profile/user8.jpg", userLocation: "San Francisco", occupation: "Antique Dealer", numberOfFriends: 88, isMyfriend: false, userId: 7}
];

var timelineArray = [
  {userId: 0, postId: 0, date: 20160225, doILike: false, timeLinePicture: "images/timeline/beautiful-04.jpg", bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,"},
  {userId: 1, postId: 1, date: 20160225, doILike: false, timeLinePicture: null, bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,"},
  {userId: 2, postId: 2, date: 20160225, doILike: false, timeLinePicture: "images/timeline/1.jpg", bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere"},
  {userId: 3, postId: 3, date: 20160225, doILike: false, timeLinePicture: null, bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas"},
  {userId: 4, postId: 4, date: 20160225, doILike: false, timeLinePicture: "images/timeline/189c.jpg", bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"},
  {userId: 5, postId: 5, date: 20160225, doILike: false, timeLinePicture: "images/timeline/3.jpg", bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex"},
  {userId: 6, postId: 6, date: 20160225, doILike: false, timeLinePicture: null, bodyText: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles."},
  {userId: 7, postId: 7, date: 20160225, doILike: false, timeLinePicture: "images/timeline/101301.jpg", bodyText: "LLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar"},
  {userId: 0, postId: 8, date: 20160225, doILike: true, timeLinePicture: null, bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem"},
  {userId: 0, postId: 9, date: 20160225, doILike: false, timeLinePicture: null, bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,"},
  {userId: 1, postId: 10, date: 20160225, doILike: false, timeLinePicture: "images/timeline/quotes-2.jpg", bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,"},
  {userId: 2, postId: 11, date: 20160225, doILike: false, timeLinePicture: null, bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere"},
  {userId: 3, postId: 12, date: 20160225, doILike: false, timeLinePicture: "images/timeline/dogs.jpg", bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas"},
  {userId: 4, postId: 13, date: 20160225, doILike: false, timeLinePicture: null, bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"},
  {userId: 5, postId: 14, date: 20160225, doILike: false, timeLinePicture: "images/timeline/8.jpg", bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex"},
  {userId: 6, postId: 15, date: 20160225, doILike: false, timeLinePicture: "images/timeline/desktop_3.jpg", bodyText: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles."},
  {userId: 7, postId: 16, date: 20160225, doILike: false, timeLinePicture: null, bodyText: "LLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar"},
  {userId: 0, postId: 17, date: 20160225, doILike: true, timeLinePicture: null, bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem"},
  {userId: 1, postId: 18, date: 20160225, doILike: false, timeLinePicture: "images/timeline/6.jpg", bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,"},
  {userId: 2, postId: 19, date: 20160225, doILike: false, timeLinePicture: null, bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere"},
  {userId: 3, postId: 20, date: 20160225, doILike: false, timeLinePicture: "images/timeline/9.jpg", bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas"},
  {userId: 4, postId: 21, date: 20160225, doILike: false, timeLinePicture: "images/timeline/7.jpg", bodyText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"},
  {userId: 5, postId: 22, date: 20160225, doILike: false, timeLinePicture: null, bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex"},
  {userId: 6, postId: 23, date: 20160225, doILike: false, timeLinePicture: "images/timeline/4.jpg", bodyText: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles."},
  {userId: 7, postId: 24, date: 20160225, doILike: false, timeLinePicture: null, bodyText: "LLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar"},
  {userId: 0, postId: 25, date: 20160225, doILike: true, timeLinePicture: "images/timeline/2.jpg", bodyText: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem"}
]

var sponsorsProfile = [
  {firstName: "Amazon", lastName: "Sponsored Post", profilePicture: "images/profile/amazon.jpg", isMyfriend: true, userId: 0},
  {firstName: "Twitter", lastName: "Sponsored Post", profilePicture: "images/profile/twitter.png", isMyfriend: true, userId: 1},
  {firstName: "Yelp", lastName: "Sponsored Post", profilePicture: "images/profile/yelp.png", isMyfriend: true, userId: 2},
  {firstName: "Youtube", lastName: "Sponsored Post", profilePicture: "images/profile/youtube.png", isMyfriend: true, userId: 3}
]

var sponsorsPosts = [
  {userId: 0, postId: 0, date: 20160225, doILike: false, timeLinePicture: "images/timeline/amazon1.png", timeLineLink: "http://www.amazon.com", bodyText: "Amazon.com and you're done."},
  {userId: 1, postId: 1, date: 20160225, doILike: false, timeLinePicture: "images/timeline/twitter.jpg", timeLineLink: "http://www.twitter.com", bodyText: "The best way to discover what's new in your world."},
  {userId: 2, postId: 2, date: 20160225, doILike: false, timeLinePicture: "images/timeline/yelp.jpg", timeLineLink: "http://www.yelp.com", bodyText: "Real People.  Real Reviews."},
  {userId: 3, postId: 3, date: 20160225, doILike: false, timeLinePicture: "images/timeline/youtube.png", timeLineLink: "http://www.youtube.com", bodyText: "Broadcast Yourself!"}
]

function addAFriend(userObject){
  //adds a person by appending the dom, either as a friend or not using a user object as input
  var friendProfile = document.createElement("a");
  //friendProfile.setAttribute("href", "#");
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
  }
  friendsLocation.appendChild(friendProfile);
}

function addAllFriends(arrayOfUsers){
  //loops through the user array passing each user to the addAFriend function
  //also sorts friends alphabetically by last name
  var sortedArray = _.sortBy(arrayOfUsers, 'lastName');
  for(var i = 0; i < sortedArray.length; i++){
      addAFriend(sortedArray[i]);
    }
}

function removeAllFriends(){
  //removes all friends and not-notfriends from the page
  var friendsContainer = document.getElementById("yourFriends");
  while (friendsContainer.firstChild){
    friendsContainer.removeChild(friendsContainer.firstChild);
  }
  var notFriendsContainer = document.getElementById("notYourFriends");
  while (notFriendsContainer.firstChild){
    notFriendsContainer.removeChild(notFriendsContainer.firstChild);
  }
}

function changeAFriend(e){
  /*this function is called by the event listener for whenever someone clicks on a profile picture,
  it will change the person to a friend, or remove a friend and add their picture to the correct spot on the page.*/
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
  addAllFriends(usersArray);
  removeAllPosts();
  addAllTimeline(usersArray, timelineArray);
}

function addAllTimeline(usersArray, timelineArray){
  //adds the time line posts to the page
  var postcounter = 0;
  var randomnumber;
  for( var i = 0; i < timelineArray.length; i++)
  {
    if( postcounter == 1 || postcounter == 7 || postcounter == 15 || postcounter==25){
      randomnumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
      addAPost(sponsorsProfile[randomnumber], sponsorsPosts[randomnumber]);
      postcounter++;
    }
    if( usersArray[timelineArray[i].userId].isMyfriend == true){ //only adds posts for people who are friends
      addAPost(usersArray[timelineArray[i].userId], timelineArray[i] );
      postcounter++;
    }
  }
  likeButtonListeners();
  profileListeners();
}

function addAPost(userobj, inputObj){
  //used to add a single post to the timeline when passed a user object and a post object
  var timeLineLocation = document.getElementById("posts");
  var outterMostDiv = document.createElement("div");
  outterMostDiv.setAttribute("class" , "panel panel-default");
  var secondDiv = document.createElement("div");
  secondDiv.setAttribute("class" , "panel-heading");
  var headerLink = document.createElement("a");
  if(userobj.numberOfFriends >= 0){ //adds class only to real users so that sponsors do not have a profile listener
    headerLink.setAttribute("class" , "view-profile");
  }
  var headerProfileImage = document.createElement("img");
  headerProfileImage.setAttribute("class", "img-post");
  headerProfileImage.setAttribute("src", userobj.profilePicture);
  var userNameText = document.createTextNode(userobj.firstName + " " + userobj.lastName);
  var likeButton = document.createElement("img");
  if(inputObj.doILike == true){
    likeButton.setAttribute("class", "like-button liked-button");
    likeButton.setAttribute("src", "images/like3.png");
    likeButton.setAttribute("id", inputObj.postId);
  }
  else{
    likeButton.setAttribute("class" , "like-button");
    likeButton.setAttribute("src" , "images/like10.png");
    likeButton.setAttribute("id", inputObj.postId);
  }
  var bodyDiv = document.createElement("div");
  bodyDiv.setAttribute("class", "panel-body");
  var bodyText = document.createTextNode(inputObj.bodyText);
  var bodyImage = document.createElement("img");
  var bodyHR = document.createElement("hr");
  var profilePictureLink = document.createElement("a");
  if(inputObj.timeLinePicture){
    bodyImage.setAttribute("class" , "img-responsive");
    bodyImage.setAttribute("src", inputObj.timeLinePicture);
    if(inputObj.timeLineLink){
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
  if( timelineArray[e.toElement.getAttribute("id")].doILike == false){
    timelineArray[e.toElement.getAttribute("id")].doILike = true;
    e.toElement.setAttribute("src", "images/like3.png");
    e.toElement.setAttribute("class", "liked-button");
  }
  else{
    timelineArray[e.toElement.getAttribute("id")].doILike = false;
    e.toElement.setAttribute("src", "images/like10.png");
    e.toElement.setAttribute("class", "like-button");
  }
}

function likeButtonListeners(){
  //adds listeners to all like buttons, and liked buttons.
  var likeAPost = document.getElementsByClassName("like-button");
  for (i = 0; i < likeAPost.length; i++){
    likeAPost[i].addEventListener("click", likeButton);
  }
}

function updateStatusText(e){
  var statusText = document.getElementById("status");
  while(statusText.firstChild){
    statusText.removeChild(statusText.firstChild);
  }
  var statusInput = document.getElementById("status-input");
  var statusTextNode = document.createTextNode(statusInput.value);
  statusText.appendChild(statusTextNode);
}

function showLikedPost(){
  var likedPostsArray = _.where(timelineArray, {doILike: true});
  removeAllPosts();
  for( var i = 0; i < likedPostsArray.length; i++)
  {
    addAPost(usersArray[likedPostsArray[i].userId], likedPostsArray[i] );
  }
  likeButtonListeners();
  profileListeners();
}

function newsRequest(){
  news = new XMLHttpRequest();
  //news.open("GET" , "http://api.nytimes.com/svc/search/v2/articlesearch.json?fl=web_url%2Csnippet%2Clead_paragraph&api-key=ba97582bc69cd83e731a2b0260adee46%3A5%3A74617978", true);
  news.open("GET" , "http://api.nytimes.com/svc/search/v2/articlesearch.json?fl=headline%2Cweb_url%2Csnippet%2Clead_paragraph&api-key=ba97582bc69cd83e731a2b0260adee46%3A5%3A74617978", true);
  news.send();
  news.addEventListener("readystatechange", processNewsRequest);
}

function processNewsRequest(e){
  if(news.readyState == 4 && news.status == 200){
    response = JSON.parse(news.responseText);
    removeNews();
  }
  for(var i = 0 ; i < 3 ; i++){
    addNews(i);
  }
}

function removeNews(){
  var newsContainer = document.getElementById("news");
  while (newsContainer.firstChild){
  newsContainer.removeChild(newsContainer.firstChild);
  }
}

function addNews(whichStory){
  var newsContainer = document.getElementById("news");
  var newslink = document.createElement("a");
  var newsListItem = document.createElement("li");
  var articleTitle = response.response.docs[whichStory].headline.print_headline;
  var stringBreakdown = response.response.docs[whichStory].snippet.slice(0, 45);
  newslink.setAttribute("href", response.response.docs[whichStory].web_url);
  var linkText = document.createTextNode(articleTitle + ": ");
  var articleText = document.createTextNode(stringBreakdown + "...");
  newslink.appendChild(linkText);
  newsListItem.appendChild(newslink);
  newsListItem.appendChild(articleText);
  newsContainer.appendChild(newsListItem);
}

function displayProfile(e){
  removeAllPosts();
  var whichUser;
  var childUser;
  if( e.target.getAttribute("src")){
    whichUser = e.target.getAttribute("src");
  }
  else{
    whichUser = e.target.firstChild.getAttribute("src");
  }
  var userId;
  for( var i = 0; i < usersArray.length; i++ ){
    if( whichUser == usersArray[i].profilePicture){
      userId=i;
    }
  }
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
  removeFriendLink.setAttribute("id", "remove-friend");
  removeFriendLink.setAttribute("class", userId);
  var removeFriendText = document.createTextNode("Remove this friend.");
  removeFriendLink.appendChild(removeFriendText);
  friendsElement.appendChild(friendsText);
  occupationElement.appendChild(occupationText);
  locationElement.appendChild(locationText);
  profileHeader.appendChild(profileHeaderText);
  textColDiv.appendChild(profileHeader);
  textColDiv.appendChild(locationElement);
  textColDiv.appendChild(occupationElement)
  textColDiv.appendChild(friendsElement);
  textColDiv.appendChild(removeFriendLink);
  colDiv.appendChild(profileImage);
  rowDiv.appendChild(colDiv);
  rowDiv.appendChild(textColDiv);
  panelBody.appendChild(rowDiv);
  outterPanel.appendChild(panelBody);
  container.appendChild(outterPanel);
  usersPictures(userId);
  displayUsersPosts(userId);
  likeButtonListeners();
  scroll(0,0);
  var removeFriendListener = document.getElementById("remove-friend");
  removeFriendListener.addEventListener("click", removeAFriend);
}

function usersPictures(user){
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
  var pictureLocation = document.getElementById("pictures");
  var pictureElement = document.createElement("img");
  pictureElement.setAttribute("class", "img-responsive");
  pictureElement.setAttribute("src", url);
  pictureLocation.appendChild(pictureElement);
}

function profileListeners(){
  var profilePic = document.getElementsByClassName("view-profile");
  for (var i = 0; i < profilePic.length; i++){
    profilePic[i].addEventListener("click", displayProfile);
  }
}

function displayUsersPosts(user){
  for( var i = 0; i < timelineArray.length; i++){
    if(timelineArray[i].userId == user ){
      addAPost(usersArray[user], timelineArray[i]);
    }
  }
}

function showTimeLine(){
  removeAllPosts();
  addAllTimeline(usersArray, timelineArray);
}

function removeAFriend(e){
  var userNumber = e.target.className;
  usersArray[userNumber].isMyfriend = false;
  removeAllFriends();
  addAllFriends(usersArray);
  removeAllPosts();
  addAllTimeline(usersArray, timelineArray);
}

var news;
var response;
newsRequest();
addAllFriends(usersArray);
addAllTimeline(usersArray, timelineArray);
var addToNotFriends = document.getElementById("notYourFriends");
addToNotFriends.addEventListener("click", changeAFriend);
var addToFriends = document.getElementById("yourFriends");
addToFriends.addEventListener("click", displayProfile);
var statusButton = document.getElementById("status-submit");
statusButton.addEventListener("click", updateStatusText);
var likedPosts = document.getElementById("liked-posts");
likedPosts.addEventListener("click", showLikedPost);
var viewTimeline = document.getElementById("timeline");
viewTimeline.addEventListener("click", showTimeLine);
likeButtonListeners();
profileListeners();

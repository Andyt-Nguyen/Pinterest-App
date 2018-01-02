var postData = {
	 author: 'Jimbo',
	 uid: '123456',
	 body: 'I love pizza',
	 title: 'Pizza',
	 starCount: 0,
	 authorPic: 'picture.jpg'
 };


 // Write the new post's data simultaneously in the posts list and the user's post list.
 var updates = {};
 updates['/posts/' + 555] = postData;
 updates['/user-posts/' + 123456 + '/' + 555] = postData;

console.log(updates);

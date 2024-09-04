use("CRUDdb");

db.createCollection("posts");


// INSERT DOCUMENT INTO THE COLLECTION

// db.posts.insertOne({
//   title: "post one",
//   body: "This is the body of post",
// });


//INSERT MANY DOCUMENTS IN COLLECTION

// db.posts.insertMany([
//   {
//     title: "Post 1",
//     body: "This is the body of post 1",
//     tags: ["tag1", "tag2"],
//   },
//   {
//     title: "Post 2",
//     body: "This is the body of post 2",
//     tags: ["tag1", "tag2"],

//   },
//   {
//     title: "Post 3",
//     body: "This is the body of post 3",
//     tags: ["tag1", "tag2"],
//   },
// ]);


//READ / FIND DOCUMENT

// db.posts.find()

// db.posts.find({ title: "Post 1" });

// db.posts.find({tags: {$in:["tag1","tag2"]} })

// db.posts.find({body:{$regex: "1",$options:"i"}})


// Update Document

// db.posts.updateOne(
//   { title: "Post 1" },
//   { $set: { title: "Updated Post" } }
// );


db.posts.deleteMany({ title: "Post 1" });
// Posts Page - static route
// list of posts will be rendered here
//to query the database (already in the server so don't need to create get routes), have a query function/ method with sql query inside

import { db } from "@/utils/dbConnection";

export default async function PostsPage() {
  //todo get the posts data form the database - query it
  //putting in a const as need to wrangle the data here
  const query = await db.query(`SELECT * FROM blogposts`);
  //to be more semantic having postsData, then want rows property in the query so having query.rows
  const postsData = query.rows;

  //todo create a sorting system
  return (
    <>
      <h1>This is the posts page</h1>
      {/* todo: render a list of posts in here */}
      {postsData.map((post) => (
        //having div as need a key
        <div key={post.id}>
          <h1>{post.title}</h1>
        </div>
      ))}
    </>
  );
}

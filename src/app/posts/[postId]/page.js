// Post Id Page - dynamic route
// creating dynamic route called post Id
// where each individual post will be dynamically rendered
//following same steps as static page but adding params here
//querying the database: importing db, destructuring params object - has to be asynch as paramas are a promise

import { db } from "@/utils/dbConnection";

export default async function PostIdPage({ params }) {
  // todo: get the data from the database for each individual post to render them dynamically
  //todo: may want to implement a delete button

  const idParams = await params.postId;
  //query the db - add a sql query to select a specific entry using the id column
  //set up the dynamic route to pick up the id of a post, which is the same column in the database, so conveniently connected, so can query where my db id column is same as ana then have parameters:
  const query = await db.query(`SELECT * FROM blogposts WHERE id = $1`, [
    idParams,
  ]);

  const postData = query.rows;
  return (
    <>
      <h1>This is the individual post page</h1>
      {/* todo: render the individual post's info
  todo: set up a comments form - this could be a separate component if you need (welcome to change structure to whatever think that works here)
  todo: render a list of comments */}
      {postData.map((blogpost) => (
        <div key={blogpost.id}>
          <h2>Title: {blogpost.title}</h2>
          <p>Number: {blogpost.number}</p>
          <p>Year: {blogpost.year}</p>
        </div>
      ))}
    </>
  );
}

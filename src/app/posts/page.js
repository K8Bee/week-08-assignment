// Posts Page - static route "/posts"
// list of posts will be rendered here
//to query the database (already in the server so don't need to create get routes), have a query function/ method with sql query inside

import { db } from "@/utils/dbConnection";
import Link from "next/link";

export default async function PostsPage({ searchParams }) {
  //todo get the posts data form the database - query it
  //putting in a const as need to wrangle the data here
  const query = await db.query(`SELECT * FROM blogposts`);
  //to be more semantic having postsData, then want rows property in the query so having query.rows
  const postsData = query.rows;

  //todo create a sorting system
  //use query strings, filter data, sort by e.g. alphabetically, stay in same location but sorting the data there, e.g. /posts becomes /posts?sort=asc or /posts?sort-desc
  //sql query - order by asc and desc - get data already filtered
  //searchParams is what React calls query strings - using searchParams keyword to access the value of searchParams by destructuring it, they're asynchronous
  const queryString = await searchParams;
  if (queryString.sort === "asc") {
    postsData.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  } else if (queryString.sort === "desc") {
    postsData.sort((a, b) => {
      return b.title.localeCompare(a.title);
    });
  }

  return (
    <>
      <h1>This is the posts page</h1>
      <Link href={"/posts?sort=asc"}>Sort Asc</Link>
      <Link href={"/posts?sort=desc"}>Sort Desc</Link>
      <Link href={"/posts"}>Reset</Link>
      {/* todo: render a list of posts in here - use map() */}
      {postsData.map((post) => (
        //having div as need a key and link for navigation for UX
        <div key={post.id}>
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </>
  );
}

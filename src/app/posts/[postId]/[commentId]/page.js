// Comment Id Page - dynamic route - "/posts/:postid/:commentid"
//
import { db } from "@/utils/dbConnection";
import Link from "next/link";
//

// export default async function CommentPage({ params }) {
//   const slug = await params;
//   console.log(slug); // Output: { id: 1, commentId: 2 }
//   return (
//     <h1>
//       Post Page ID: {slug.id}, Comment ID: {slug.commentId}
//     </h1>
//   ); // Output: Post Page ID: 1, Comment ID: 2
// }

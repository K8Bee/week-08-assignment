//todo set up my db pool and use the connection string
// the rest of my app can import this db Connection
// need to install pg (as not part of Next set up)
import pg from "pg";

export const db = new pg.Pool({
  //need object containing value of env variable (same as server last week)
  connectionString: process.env.NEXT_DB_URL,
});

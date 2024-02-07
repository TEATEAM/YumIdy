import postgres from 'postgres'

const sql = postgres('postgres://postgres:2000@localhost:5432/postgres');
                      //server//user: password:port:db name
export default sql;
import postgres from 'postgres'

const sql = postgres('postgres://postgres:2000@localhost:5432/postgres');
        
export default sql;
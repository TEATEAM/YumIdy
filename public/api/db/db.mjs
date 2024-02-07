import postgres from 'postgres'

const sql = postgres('postgres://postgres:1719@localhost:5432/postgres');

export default sql;
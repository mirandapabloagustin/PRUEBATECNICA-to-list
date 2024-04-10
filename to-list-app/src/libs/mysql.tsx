import { CONNREFUSED } from 'dns'
import mysql from 'serverless-mysql'

const conn =  mysql ({
  config: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'to_do_list'
  }
})

export default conn
import gun from 'gun'

const database = gun(['http://localhost:8765/gun']);

export default database

import gun from 'gun'

const database = gun([
  'https://gun.1998.social/gun'
]);

window.database = database
export default database

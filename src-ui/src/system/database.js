import gun from 'gun'

const database = gun([
  'http://164.92.88.188:8765',
]);

export default database

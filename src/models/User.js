import Realm from 'realm';

class User extends Realm.Object {}
User.schema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: {type: 'string'},
    // auth
    token: {type: 'string'},
  },
};

export default User;

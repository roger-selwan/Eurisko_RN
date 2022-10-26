import Realm from 'realm';

// importing the list of models
import User from './User';

// defineing the database structure
let realm = new Realm({
  schemaVersion: 2,
  schema: [
    User.schema,
  ],
  migration: (oldRealm, newRealm) => {
    // only apply this change if upgrading to schemaVersion 2
    if (oldRealm.schemaVersion < 1) {
    }
  },
});

// displaying the path of the realm file database
console.log('Realm Path: ', realm.path);

export default realm;

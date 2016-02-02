class Seeder {

  constructor(name, collection, options ) {
    if ( !collection || !options ) {
      throw new Error( 'Please supply a collection to seed and options for seeding. Usage: Seed( collectionName, options ).' );
    } else {
      this.name        = name;
      this.collection  = collection;
      this.options     = Object.assign({
        condition: (collection) => {
          return !collection.find().count();
        },
        min: 1,
        max: 20
      }, options);
      this.isDataArray = this.options.data instanceof Array;

      this.seed();
    }
  }

  shouldSeed() {
    let condition = this.options.condition;

    if ( condition  ) {
      return condition(this.collection);
    } else {
      return true;
    }
  }

  seed() {
    let options = this.options,
      data    = options.data;

    if(this.shouldSeed()) {
      console.log('Seeding '  + this.name);
      this.plant(data);

      if ( options.data && options.model ) {
        throw new Error( `Please choose to seed from either a data collection or a model. Cannot do both!` );
      }
    } else {
      console.log('Seed ' + this.name + ' skipped...');
    }
  }

  plant( data ) {
    let loopLength       = this._loopLength(),
      collectionName     = this.collection._name,
      isUsers            = collectionName === 'users';

    for ( let i = 0; i < loopLength; i++ ) {
      let value = this.isDataArray ? data[ i ] : data( i );

      if ( isUsers ) {
        this.createUser( value );
      } else {
        this.collection.insert( value );
      }
    }
  }

  _loopLength() {
    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return this.isDataArray ? data.length : random(this.options.min, this.options.max);
  }

  createUser( user ) {
    let isExistingUser = Meteor.users.findOne( { 'emails.address': user.email } );
    if ( !isExistingUser ) {
      let userId = Accounts.createUser({
        email: user.email,
        password: user.password,
        profile: user.profile || {}
      });

      if ( user.roles && Roles !== 'undefined' ) {
        Roles.addUsersToRoles( userId, user.roles );
      }
    }
  }
}


export default Seed = ( name, collection, options ) => {
  return new Seeder( name, collection, options );
};

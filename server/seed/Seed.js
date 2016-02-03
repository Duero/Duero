class Seed {

  constructor(name, collection, options ) {
    if ( !collection || !options ) {
      throw new Error( 'Please supply a collection to seed and options for seeding. Usage: Seed( collectionName, options ).' );
    } else {
      this.name        = name;
      this.collection  = collection;
      this.options     = options;
      this.isDataArray = this.options.data instanceof Array;
      this.context     = {
        name,
        collection,
        startData: null
      };

      this.seed();
    }
  }

  shouldSeed() {
    let condition = this.options.condition;

    if ( condition  ) {
      return condition.call(this.context);
    } else {
      return true;
    }
  }

  seed() {
    let options = this.options,
      data      = options.data,
      onStart   = options.onStart,
      onFinish  = options.onFinish,
      onSkip    = options.onSkip;

    if(this.shouldSeed()) {
      if(onStart) this.context.startData = onStart.call(this.context);

      this.plant(data);

      if(onFinish) onFinish.call(this.context);
    } else {
      if(onSkip) onSkip.call(this.context);
    }
  }

  plant( data ) {
    let loopLength       = this._loopLength(),
      collectionName     = this.collection._name,
      isUsers            = collectionName === 'users';

    for ( let i = 0; i < loopLength; i++ ) {
      let value = this.isDataArray ? data[ i ] : data.call(this.context, i);

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
    };

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

const Seeder = {
  settings: {
    condition() {
      return this.collection.find().count() == 0;
    },
    min: 1,
    max: 20,
    onStart() {
      console.log('Seeder.Start: ' + this.name)
    },
    onFinish() {
      console.log('Seeder.Finish: ' + this.name)
    },
    onSkip() {
      console.log('Seeder.Skip: ' + this.name)
    }
  },

  config(options) {
    this.settings = Object.assign(this.settings, options);
  },

  seed(name, collection, options) {
    options = Object.assign(this.settings, options);
    return new Seed( name, collection, options );
  }
};

export default Seeder;

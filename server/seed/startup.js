import {Meteor} from 'meteor/meteor';
import {Buildings, Cleaners} from '/lib/collections/index';
// import faker from 'faker/locale/sk';
import Seeder from './Seed.js';

Meteor.startup(function() {

  // faker.locale = "sk";

  Seeder.seed('Buildings init', Buildings, {
    data: [
      {name: 'Letomostie 7', duration: 60},
      {name: 'Letomostie 11', duration: 60},
      {name: 'Letomostie 13', duration: 60},
      {name: 'Letomostie 15', duration: 60},
      {name: 'Novomestská 2', duration: 60},
      {name: 'Novomestská 4', duration: 60},
      {name: 'T.G.Masaryka 30', duration: 60},
      {name: 'T.G.Masaryka 28', duration: 60},
      {name: 'T.G.Masaryka 17', duration: 30},
      {name: 'Podzámska 1', duration: 60},
      {name: 'Podzámska 7', duration: 60},
      {name: 'MAGNUM', duration: 150},
      {name: 'T.G. Masaryka 14', duration: 60},
      {name: 'T.G. Masaryka 16', duration: 60},
      {name: 'T.G. Masaryka 18', duration: 60},
      {name: 'Šafáriková 28', duration: 30},
      {name: 'Šafáriková 26', duration: 30},
      {name: 'Šafáriková 22', duration: 60},
      {name: 'Šafáriková 20', duration: 60},
      {name: 'Šafáriková 2', duration: 30},
      {name: 'Lastovičia 3', duration: 60},
      {name: 'Lastovičia 1', duration: 60},
      {name: 'Nábrežná 7', duration: 60},
      {name: 'Nábrežná 9', duration: 60},
      {name: 'Nábrežná 13', duration: 60},
      {name: 'Andovská 21', duration: 60},
      {name: 'Andovská 23', duration: 60},
      {name: 'S.H. Vajanského 37', duration: 60},
      {name: 'S.H. Vajanského 39', duration: 60},
      {name: 'S.H. Vajanského 41', duration: 60},
      {name: 'T. Vansovej 32', duration: 60},
      {name: 'T. Vansovej 30', duration: 60},
      {name: 'S.H Vajanského 9', duration: 60},
      {name: 'S.H Vajanského 17', duration: 60},
      {name: 'Šoltésová 9', duration: 60},
      {name: 'J.Krála 20', duration: 60},
      {name: 'J.Krála 22', duration: 60},
      {name: 'T. Vansovej 24', duration: 60},
      {name: 'T. Vansovej 22', duration: 60},
      {name: 'T. Vansovej 20', duration: 60},
      {name: 'T. Vansovej 18', duration: 60},
      {name: 'T. Vansovej 16', duration: 60},
      {name: 'T. Vansovej 14', duration: 60},
      {name: 'Gogoľova 1', duration: 30},
      {name: 'Gogoľova 3', duration: 60},
      {name: 'Gogoľova 5', duration: 60},
      {name: 'Krasková 4', duration: 60},
      {name: 'Holého 4', duration: 90},
      {name: 'Hlboká 1', duration: 30},
      {name: 'Nábrežná 99', duration: 90},
      {name: 'Nábrežná 20', duration: 90},
      {name: 'S.H. Vajanského 70', duration: 60},
      {name: 'S.H. Vajanského 72', duration: 60},
      {name: 'Várdayho 13', duration: 30},
      {name: 'Bitúnková 1', duration: 60},
      {name: 'Bitúnková 3', duration: 60},
      {name: 'Bitúnková 5', duration: 60},
      {name: 'Bitúnková 7', duration: 60},
      {name: 'Bitúnková 9', duration: 60},
      {name: 'Bitúnková 11', duration: 60},
      {name: 'L. Štúra 16B', duration: 60},
      {name: 'MAGNUM', duration: 90},
      {name: 'Bajč 197A', duration: 60},
      {name: 'Bajč 197B', duration: 60},
      {name: 'Námestie republiky 2', duration: 90},
      {name: 'Cyrilometódska 28', duration: 60},
      {name: 'Cyrilometódska 30', duration: 60},
      {name: 'Cyrilometódska 32', duration: 60},
      {name: 'SNP 42', duration: 60},
      {name: 'Andovská 15', duration: 60},
      {name: 'Andovská 21', duration: 60},
      {name: 'Andovská 23', duration: 60},
      {name: 'Andovská 25A', duration: 60},
      {name: 'Andovská 25B', duration: 60},
      {name: 'Andovská 25E', duration: 60},
      {name: 'Jazdecká 15', duration: 60},
      {name: 'Jazdecká 17', duration: 60},
      {name: 'Jazdecká 14', duration: 60},
      {name: 'Jazdecká 18', duration: 60},
      {name: 'Komenského 1', duration: 30},
      {name: 'Komenského 2', duration: 30},
      {name: 'Bezručová 8', duration: 30},
      {name: 'Bezručová 10', duration: 30}
    ]
  });

  Seeder.seed('Cleaners init', Cleaners, {
    data: [
      {name: 'Lenka', salary: 2.7},
      {name: 'Janka', salary: 2.5},
      {name: 'Katka', salary: 2.7}
    ]
  });


});

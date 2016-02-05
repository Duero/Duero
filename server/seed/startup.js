import {Meteor} from 'meteor/meteor';
import {Buildings, Cleaners} from '/lib/collections/index';
import Seeder from './Seed.js';

Meteor.startup(function() {
  
  Seeder.seed('Buildings init', Buildings, {
    data: [
      {name: 'Letomostie 7', duration: 60, assigned: false},
      {name: 'Letomostie 11', duration: 60, assigned: false},
      {name: 'Letomostie 13', duration: 60, assigned: false},
      {name: 'Letomostie 15', duration: 60, assigned: false},
      {name: 'Novomestská 2', duration: 60, assigned: false},
      {name: 'Novomestská 4', duration: 60, assigned: false},
      {name: 'T.G.Masaryka 30', duration: 60, assigned: false},
      {name: 'T.G.Masaryka 28', duration: 60, assigned: false},
      {name: 'T.G.Masaryka 17', duration: 30, assigned: false},
      {name: 'Podzámska 1', duration: 60, assigned: false},
      {name: 'Podzámska 7', duration: 60, assigned: false},
      {name: 'MAGNUM', duration: 150, assigned: false},
      {name: 'T.G. Masaryka 14', duration: 60, assigned: false},
      {name: 'T.G. Masaryka 16', duration: 60, assigned: false},
      {name: 'T.G. Masaryka 18', duration: 60, assigned: false},
      {name: 'Šafáriková 28', duration: 30, assigned: false},
      {name: 'Šafáriková 26', duration: 30, assigned: false},
      {name: 'Šafáriková 22', duration: 60, assigned: false},
      {name: 'Šafáriková 20', duration: 60, assigned: false},
      {name: 'Šafáriková 2', duration: 30, assigned: false},
      {name: 'Lastovičia 3', duration: 60, assigned: false},
      {name: 'Lastovičia 1', duration: 60, assigned: false},
      {name: 'Nábrežná 7', duration: 60, assigned: false},
      {name: 'Nábrežná 9', duration: 60, assigned: false},
      {name: 'Nábrežná 13', duration: 60, assigned: false},
      {name: 'Andovská 21', duration: 60, assigned: false},
      {name: 'Andovská 23', duration: 60, assigned: false},
      {name: 'S.H. Vajanského 37', duration: 60, assigned: false},
      {name: 'S.H. Vajanského 39', duration: 60, assigned: false},
      {name: 'S.H. Vajanského 41', duration: 60, assigned: false},
      {name: 'T. Vansovej 32', duration: 60, assigned: false},
      {name: 'T. Vansovej 30', duration: 60, assigned: false},
      {name: 'S.H Vajanského 9', duration: 60, assigned: false},
      {name: 'S.H Vajanského 17', duration: 60, assigned: false},
      {name: 'Šoltésová 9', duration: 60, assigned: false},
      {name: 'J.Krála 20', duration: 60, assigned: false},
      {name: 'J.Krála 22', duration: 60, assigned: false},
      {name: 'T. Vansovej 24', duration: 60, assigned: false},
      {name: 'T. Vansovej 22', duration: 60, assigned: false},
      {name: 'T. Vansovej 20', duration: 60, assigned: false},
      {name: 'T. Vansovej 18', duration: 60, assigned: false},
      {name: 'T. Vansovej 16', duration: 60, assigned: false},
      {name: 'T. Vansovej 14', duration: 60, assigned: false},
      {name: 'Gogoľova 1', duration: 30, assigned: false},
      {name: 'Gogoľova 3', duration: 60, assigned: false},
      {name: 'Gogoľova 5', duration: 60, assigned: false},
      {name: 'Krasková 4', duration: 60, assigned: false},
      {name: 'Holého 4', duration: 90, assigned: false},
      {name: 'Hlboká 1', duration: 30, assigned: false},
      {name: 'Nábrežná 99', duration: 90, assigned: false},
      {name: 'Nábrežná 20', duration: 90, assigned: false},
      {name: 'S.H. Vajanského 70', duration: 60, assigned: false},
      {name: 'S.H. Vajanského 72', duration: 60, assigned: false},
      {name: 'Várdayho 13', duration: 30, assigned: false},
      {name: 'Bitúnková 1', duration: 60, assigned: false},
      {name: 'Bitúnková 3', duration: 60, assigned: false},
      {name: 'Bitúnková 5', duration: 60, assigned: false},
      {name: 'Bitúnková 7', duration: 60, assigned: false},
      {name: 'Bitúnková 9', duration: 60, assigned: false},
      {name: 'Bitúnková 11', duration: 60, assigned: false},
      {name: 'L. Štúra 16B', duration: 60, assigned: false},
      {name: 'MAGNUM', duration: 90, assigned: false},
      {name: 'Bajč 197A', duration: 60, assigned: false},
      {name: 'Bajč 197B', duration: 60, assigned: false},
      {name: 'Námestie republiky 2', duration: 90, assigned: false},
      {name: 'Cyrilometódska 28', duration: 60, assigned: false},
      {name: 'Cyrilometódska 30', duration: 60, assigned: false},
      {name: 'Cyrilometódska 32', duration: 60, assigned: false},
      {name: 'SNP 42', duration: 60, assigned: false},
      {name: 'Andovská 15', duration: 60, assigned: false},
      {name: 'Andovská 21', duration: 60, assigned: false},
      {name: 'Andovská 23', duration: 60, assigned: false},
      {name: 'Andovská 25A', duration: 60, assigned: false},
      {name: 'Andovská 25B', duration: 60, assigned: false},
      {name: 'Andovská 25E', duration: 60, assigned: false},
      {name: 'Jazdecká 15', duration: 60, assigned: false},
      {name: 'Jazdecká 17', duration: 60, assigned: false},
      {name: 'Jazdecká 14', duration: 60, assigned: false},
      {name: 'Jazdecká 18', duration: 60, assigned: false},
      {name: 'Komenského 1', duration: 30, assigned: false},
      {name: 'Komenského 2', duration: 30, assigned: false},
      {name: 'Bezručová 8', duration: 30, assigned: false},
      {name: 'Bezručová 10', duration: 30, assigned: false}
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

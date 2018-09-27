/*
  Hello and welcome to a javascript file!  There are some blank functions
  in this file I'd like to you fill in, and maybe learn a li'l something
  in the process.  They all will relate to the data I've included on my
  collection.  So let's get that ready to work with.
*/

const { collection } = require('./collection')

/*
  The data is set up where each game's title is a property on the collection object.
  For example, if I wanted to access data on Azul, I would do that with the
  following:

  `collection.Azul`

  Each game has the following properties:
  - minplayers: Integer - the minimum number of players this game supports
  - maxplayers: Integer - max # of players etc etc
  - duration: Integer - the duration in minutes this game allegedly takes
  - photo: String - name of jpg this refers to in my actual site
  - comment: String - an hilarious comment about the game
  - dateUpdated: String - a string representing a date in DD MMM YYYY format
*/

/**
 * Ok!  Let's get coding.  How many games do I have in my collection?
 *
 * @param {Object} collection
 * @returns {Integer} the number of games in provided collection
 */
function collectionCount(collection) {
  return 0;
}

/**
 * I get lazy and don't sometimes add a photo each time I add a game to the file.
 * Can you spit out a list of games I haven't added a photo for? (ie, the photo
 * property is an empty string)
 * 
 * @param {Object} collection 
 * @returns {Array} an array of game titles that don't have a corresponding photo
 */
function needsPhoto(collection) {
  return [];
}

/**
 * I clearly have too many games.  Is there even enough time before the heat death
 * of the universe for me to play them all?  Let's find out.  Write me a function
 * that calculates the number of hours I'd need to play each game once. (Pitfall!
 * What unit is each game's duration in?)
 * 
 * @param {Object} collection 
 * @returns {Integer} the number of hours I'd need to play all my games
 */
function howLong(collection) {
  return 0;
}

/**
 * Let's say I want to whittle this collection down to games that support a certain
 * number of players (say, 2).  Write me a function that will return a new
 * collection object that only contains games that support the provided player count
 * (eg. provided playerCount is 3, Lost Cities is a 2 player only game so it won't
 * be in the new object)
 *
 * @param {Object} collection 
 * @param {Integer} playerCount 
 * @returns {Object} games that support player count
 */
function gameByPlayerCount(collection, playerCount) {
  return {};
}

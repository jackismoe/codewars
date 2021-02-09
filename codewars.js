// Can you find the needle in the haystack?
// Write a function findNeedle() that takes an array full of junk but containing one "needle"
// After your function finds the needle it should return a message (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"


function findNeedle(array) {
  console.log(`found the needle at position ${array.indexOf('needle')}`)
  for (let idx = 0; idx < array.length; idx++) {  
    if (array[idx] == 'needle') {
      return `found the needle at position ${idx}`
    }
  }
}
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function howMuchWater(time) {
  return Math.floor(time * .5)
}

console.log(howMuchWater(3))
console.log(howMuchWater(6.7))
console.log(howMuchWater(11.8))
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.
// Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.
// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".
// Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.
// Input
// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters
// Output
// Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.
function songDecoder(song) {
  return song.replace(/(WUB)+/g," ").trim()
}

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
const findNextSquare = (n) => {
  let root = Math.sqrt(n)
  if (root % 1 == 0) {
    let nextRoot = root+1
    return (nextRoot * nextRoot)
  } else {
    return -1
  }
}

console.log(findNextSquare(121))
console.log(findNextSquare(625))
console.log(findNextSquare(114))
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

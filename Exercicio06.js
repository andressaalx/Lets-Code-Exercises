const voters = [{ name: 'Bob', age: 30, voted: true }, 
              { name: 'Jake', age: 32, voted: true }, 
              { name: 'Kate', age: 25, voted: false }, 
              { name: 'Sam', age: 20, voted: false }, 
              { name: 'Phil', age: 21, voted: true }, 
              { name: 'Ed', age: 55, voted: true }, 
              { name: 'Tami', age: 54, voted: true },
              { name: 'Mary', age: 31, voted: false }, 
              { name: 'Becky', age: 43, voted: false }, 
              { name: 'Joey', age: 41, voted: true }, 
              { name: 'Jeff', age: 30, voted: true }, 
              { name: 'Zack', age: 19, voted: false }];
              
function resultVoted (arr){
  const numYoungPeople = arr.filter(person => person.age >= 18 && person.age <= 25);
  const numYoungVotes = numYoungPeople.filter(vote => vote.voted);
  const numMidPeople = arr.filter(person => person.age >= 26 && person.age <= 35);
  const numMidVotes = numMidPeople.filter(vote => vote.voted);
  const numOldPeople = arr.filter(person => person.age >= 36 && person.age <= 55);
  const numOldVotes = numOldPeople.filter(vote => vote.voted);
  let resultVote = {"numYoungPeople" : numYoungPeople.length, "numYoungVotes": numYoungVotes.length, 
                    "numMidPeople" : numMidPeople.length, "numMidVotes": numMidVotes.length, 
                    "numOldPeople" : numOldPeople.length, "numOldVotes": numOldVotes.length};
  console.log(resultVote); 
  return resultVote;
} 
resultVoted(voters);

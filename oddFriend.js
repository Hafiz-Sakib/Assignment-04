const myFriends = ["babu", "cabu", "dabu", "kabul", "fabu", "rahim"];

/* Function For Finding Odd Friend Started */
function oddFriend(friends) {
  let odd = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length % 2 != 0) {
      odd.push(friends[i]);
      break;
    }
  }
  return odd;
}

/* Function For Finding Odd Friend Ended */

let output = oddFriend(myFriends);
console.log(output);

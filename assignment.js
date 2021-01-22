//
function kilometerToMeter(num) {
  if (num <= 0 || typeof num != "number") {
    console.log("Please enter a valid value.");
  } else {
    var meter = num * 1000;
    return meter;
  }
}

function budgetCalculator(watchNum, mobileNum, laptopNum) {
  if (watchNum < 0 || mobileNum < 0 || laptopNum < 0) {
    console.log("Please enter a valid value.");
  } else {
    var watchPrice = watchNum * 50;
    var mobilePrice = mobileNum * 100;
    var laptopPrice = laptopNum * 500;
    var totalBudget = watchPrice + mobilePrice + laptopPrice;
    return totalBudget;
  }
}

function hotelCost(day) {
  var totalCost = 0;
  if (day <= 0 || day % 1 != 0 || typeof day != "number") {
    console.log("Please enter a valid value.");
  } else if (day <= 10) {
    totalCost = day * 100;
  } else if (day <= 20) {
    var firstCost = 10 * 100; // First 10 days cost
    var remainingDay = day - 10;
    var secondCost = remainingDay * 80;
    totalCost = firstCost + secondCost;
  } else {
    var firstCost = 10 * 100; // First 10 days cost
    var secondCost = 10 * 80; // Second 10 days cost
    var remainingDay = day - 20;
    var thirdCost = remainingDay * 50;
    totalCost = firstCost + secondCost + thirdCost;
  }
  return totalCost;
}

function megaFriend(friendsName) {
  if (friendsName.length > 0) {
    var largerName = friendsName[0];
    for (var i = 0; i < friendsName.length; i++) {
      var name = friendsName[i];
      if (name.length > largerName.length) {
        largerName = name;
      }
    }
  } else {
    console.log("erorr");
  }
  return largerName;
}

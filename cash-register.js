
//last version
function checkCashRegister(price, cash, cid) {
  var change = cash - price;

  var result = 
  {status: "",
  change: []};

  var currencies = [
    {name: "PENNY",
    currencyValue: 0.01,
    totalValue: cid[0][1]},
    {name: "NICKEL",
    currencyValue: 0.05,
    totalValue: cid[1][1]},
    {name: "DIME",
    currencyValue: 0.10,
    totalValue: cid[2][1]},
    {name: "QUARTER",
    currencyValue: 0.25,
    totalValue: cid[3][1]},
    {name: "ONE",
    currencyValue: 1,
    totalValue: cid[4][1]},
    {name: "FIVE",
    currencyValue: 5,
    totalValue: cid[5][1]},
    {name: "TEN",
    currencyValue: 10,
    totalValue: cid[6][1]},
    {name: "TWENTY",
    currencyValue: 20,
    totalValue: cid[7][1]},
    {name: "ONE HUNDRED",
    currencyValue: 100,
    totalValue: cid[8][1]},
  ]

  var numToGive, numAvailable, amountGiven;
  var totalGiven = 0;
  for (var i = cid.length-1; i >= 0; i--) {

    if (currencies[i]["currencyValue"] > change){
      continue
    }

    numToGive = Math.floor(change/currencies[i]["currencyValue"]);

    numAvailable = ((currencies[i]["totalValue"] / currencies[i]["currencyValue"]).toPrecision(6));

    if (numAvailable < numToGive) {
      numToGive = numAvailable
    }

    amountGiven = parseFloat((numToGive *  currencies[i]["currencyValue"]).toPrecision(6));

    change = ((change-amountGiven).toPrecision(6));

    amountGiven.toPrecision();

    if (amountGiven > 0) {
    result.change.push([currencies[i]["name"], amountGiven]);
    totalGiven += amountGiven;
    }
  }  

  var drawerTotal = 0;
  for(var i = 0; i < currencies.length; i++) {
    drawerTotal = drawerTotal += currencies[i]["totalValue"]
  }

  console.log("drawerTotal is "+drawerTotal);

  if (change != 0) {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
    console.log(result);
    return result;
  }

  if (change == 0) {
    console.log("change is zero")
    console.log(drawerTotal)
    if (drawerTotal == totalGiven) {
      result.status = "CLOSED";
      result.change = cid;
      console.log(result);
      return result;
    }
    else {
      result.status = "OPEN";
      console.log(result);
      return result;
    }
  }
};


checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

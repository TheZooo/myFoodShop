var d = document;
var myData = {
  "food":[
      {
        "item": "Soft Shell Crab",
        "price": 4.99,
        "desc": "A crunchy crab served with a lemon"
      },
      {
        "item": "Lobster",
        "price": 11.99,
        "desc": "Throughly boiled lobster, along with our own dipping sauce"
      },
      {
        "item": "Sashimi Platter",
        "price": 14.99,
        "desc": "Can have salmon, tuna, ahi, beef, squid, in addition to soy sauce"
      },
      {
        "item": "Shark Fin Soup",
        "price": 10.99,
        "desc": "A traditional chinese soup made from simmering shark fins"
      },
      {
        "item": "Calamari",
        "price": 3.99,
        "desc": "Fried squid, good for a appetizer meal"
      },
      {
        "item": "Grilled Squid",
        "price": 3.99,
        "desc": "Squid grilled, seasoned, and with lemon juices"
      }
    ]
};
var amtBox = d.getElementsByClassName('itemBox');
var i = 0;
var prices = [];

function startA() {
  /*
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { //4 = ready ; 200 = okay
      myData = JSON.parse(this.responseText);
      }
    };
  xmlhttp.open("GET", "sample.json", true);
  xmlhttp.send();
  */
  
  for (i; i < amtBox.length; i++) {
    d.getElementsByClassName('itemDesc')[i].innerHTML = myData.food[i].desc;
    d.getElementsByClassName('itemCost')[i].innerHTML = "$" + myData.food[i].price;
    prices.push(myData.food[i].price);
  }
  
}

function selectOne() {
    
}

function order() {

}

function kOrder() {

}

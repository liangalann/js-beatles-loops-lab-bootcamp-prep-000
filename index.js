
function theBeatlesPlay(musicians, instruments) {
  var array= [];
  for (let i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
    return array;
}

theBeatlesPlay(musicians, instruments)

function johnLennonFacts(facts) {
  facts = []
  var i = 0
  while(i < 4) {
    facts.push("!!!");
    i++;
  }
  return facts
}

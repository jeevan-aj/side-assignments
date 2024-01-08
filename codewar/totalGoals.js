function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    let arr = []
    arr.push(laLigaGoals,copaDelReyGoals,championsLeagueGoals)
    return arr.reduce((acc,cur)=> acc+=cur)
    
  }
  console.log(goals(1,2,3))
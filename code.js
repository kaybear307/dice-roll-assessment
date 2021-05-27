let results = [null, null, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Your Code Here!

//VARIABLES
let rollButton = document.getElementById('roll')
let resultDiv = document.getElementById('result')
let resultGraph = document.getElementById('graph')
let roll1000 = document.getElementById('roll1000')

//EVENT LISTENERS
rollButton.addEventListener('click', clickRollButton)
roll1000.addEventListener('click', clickRoll1000)


//FUNCTIONS
function rollDie(){
    return Math.floor(Math.random()*6)+1
}

function sumOfDice(){
    let a = rollDie() 
    let b = rollDie()
    return a+b
}

function clickRollButton(){
    let roll= sumOfDice()
    resultDiv.innerHTML = `You Rolled a ${roll}!`
    results[roll]+=1
    // console.log(results)
    // 
    resultGraph.innerHTML=""
    for (let i= 2; i<results.length; i++){
        let newDiv = document.createElement('div')
        newDiv.classList.add("box")
        newDiv.innerHTML = `You rolled a ${i}: ${results[i]} times`
        resultGraph.append(newDiv)
    }
}

function clickRoll1000(){
    for (let i=0; i< 10000; i++){
    clickRollButton()
    }
}

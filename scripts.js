const result = document.querySelector('.result')
const humanscore = document.querySelector('#human-score')
const machinescore = document.querySelector('#machine-score')

let humanscoreNumber = 0
let machinescoreNumber = 0


const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {
    const choice = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    console.log(randomNumber)

    return choice[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log('humano: ' + human + ' Maquina: ' + machine)


    if (human === machine) {
        result.innerHTML = 'Deu empate!'
    } else if (
        (human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
        humanscoreNumber++
        humanscore.innerHTML = humanscoreNumber


        result.innerHTML = "Voce Ganhou!"

        
    } else {
        machinescoreNumber++
        machinescore.innerHTML = machinescoreNumber



        result.innerHTML = "Voce perdeu para a maquina!"

    }
}
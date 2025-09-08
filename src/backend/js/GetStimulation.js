let BtnClicker = document.getElementById("StimulationClicker")
let StimulationsEarned = 0 




while (StimulationsEarned == 1) {
    
}

function GetStimulation() {
    StimulationsEarned += 1  
    BtnClicker.innerText = `${StimulationsEarned} stimulations`

    if (StimulationsEarned == 1) {
        document.getElementById("StimulationClicker").style = "display: inline;"
    }
}
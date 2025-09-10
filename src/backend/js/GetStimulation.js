let BtnClicker = document.getElementById("StimulationClicker")
let StimulationsEarned = 0 




while (StimulationsEarned == 1) {
    
}

function GetStimulation() {
    StimulationsEarned += 1  
    BtnClicker.innerText = `${StimulationsEarned} stimulations`

    if (StimulationsEarned == 1) {
        document.getElementById("StimulationClicker").style = "display: inline;"

        document.getElementById("StimulationClicker").animate(
            [
              // keyframes
              { opacity: "0" },
              { opacity: "1" },
            ],
            {
              // timing options
              duration: 200,
              iterations: 1,
            },
          );
    }
}
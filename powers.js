
let allPowers = document.querySelectorAll(".power")


// function allPowerManipulator (yourSection) {
//     yourSection.classList.toggle("disabled")
//     yourSection.classList.toggle("enabled")
// }

let combinedFunction = () => {
    function allPowerManipulator (yourSection) {
        yourSection.classList.toggle("disabled")
        yourSection.classList.toggle("enabled")
    }
    let powerID = event.target.id.split("-")[1]
    let correctButton = document.getElementById(powerID)
    allPowerManipulator(correctButton)
}

function allPowerEnable () {
    allPowers.forEach(power => {
        power.classList.add("enabled")
        power.classList.remove("disabled")
    });
}

function allPowerDisable() {
    allPowers.forEach(power => {
        power.classList.add("disabled")
        power.classList.remove("enabled")
    });
    
    
}

document.querySelector("#activate-flight").addEventListener("click", combinedFunction)

document.querySelector("#activate-mindreading").addEventListener("click", combinedFunction)

document.querySelector("#activate-xray").addEventListener("click", combinedFunction)
document.querySelector("#activate-all").addEventListener("click", allPowerEnable)

document.querySelector("#deactivate-all").addEventListener("click", allPowerDisable)


// function flightHandlerFunction () {
    //     flightSection.classList.toggle("disabled")
    //     flightSection.classList.toggle("enabled")
    
    //   }
    
    // function mindreadingFunction () { 
        //     mindreadingSection.classList.toggle("disabled")
        //     mindreadingSection.classList.toggle("enabled")
        
        // }
        
        // function xrayFunction () { 
            //     xraySection.classList.toggle("disabled")
            //     xraySection.classList.toggle("enabled")
            
            // }

            // let flightSection = document.getElementById("flight")
            
            // let mindreadingSection = document.getElementById("mindreading")
            
            // let xraySection = document.getElementById("xray")
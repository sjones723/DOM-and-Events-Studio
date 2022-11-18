// Write your JavaScript code here.
// Remember to pay attention to page loading!

// Use window load event to ensure all elements have loaded before attaching event handlers.


window.addEventListener('load', () => {
    // "Take off" button is clicked, the following should happen:
    // A window confirm "Confirm that the shuttle is ready for takeoff." 
    
    let rocketPosX = 0
    let rocketPosY = 0
    let altitude = 0

    const takeoffButton = document.getElementById("takeoff")
    const landButton = document.getElementById("landing")
    const abortButton = document.getElementById("missionAbort")
    
    
    const upButton = document.getElementById("up")
    const downButton = document.getElementById("down")
    const leftButton = document.getElementById("left")
    const rightButton = document.getElementById("right")


    const flightStatusParagraph = document.getElementById("flightStatus")
    const flightScreenBackground = document.getElementById("shuttleBackground")
    const shuttleHeight = document.getElementById("spaceShuttleHeight")
    const rocket = document.getElementById("rocket")

    takeoffButton.addEventListener('click',()=>{
        let confirmTakeoffStatus = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if(confirmTakeoffStatus){
        // The flight status should change to "Shuttle in flight."
            flightStatusParagraph.innerHTML = "Shuttle in flight."
        // The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue. 
            flightScreenBackground.style.backgroundColor = "blue"
        // The shuttle height should increase by 10,000 miles.
            shuttleHeight.innerHTML = "10,000" 
        }})

    // When the "Land" button is clicked, the following should happen:
    landButton.addEventListener('click',()=>{
        // A window alert should let the user know "The shuttle is landing. Landing gear engaged."
        let confirmLand = window.confirm("The shuttle is landing. Landing gear engaged.")
        
        if(confirmLand){
        // The flight status should change to "The shuttle has landed."
            flightStatusParagraph.innerHTML = "The shuttle has landed."
        // The background color of the shuttle flight screen should change from blue to green. 
            flightScreenBackground.style.backgroundColor = "green"
        // The shuttle height should go down to 0.
            shuttleHeight.innerHTML = "0" 
        }
    });

    // When the "Abort Mission" button is clicked, the following should happen:
    abortButton.addEventListener('click',()=>{
        // A window confirm should let the user know "Confirm that you want to abort the mission."
        let confirmAbort = window.confirm("Confirm that you want to abort the mission.")
        
        if(confirmAbort){
        // The flight status should change to "Mission aborted."
            flightStatusParagraph.innerHTML = "Mission aborted."
        // The background color of the shuttle flight screen should change from blue to green. 
            flightScreenBackground.style.backgroundColor = "green"
        // The shuttle height should go down to 0.
            shuttleHeight.innerHTML = "0" 
        }
    });

    // When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen
    // upButton.addEventListener('click',()=>{
    //   //The rocket image should move 10 px in the direction of the button that was clicked.
    //   rocket.style.position = "absolute"
    //   rocket.style.bottom = 0
    //   rocket.style.left = "38%"

    //   // "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
    
      //Event delegation

      document.addEventListener("click",(event)=>{
        if(event.target.id === 'left'){
            rocketPosX -=10
            rocket.style.marginLeft = rocketPosX + 'px'
        }
        if(event.target.id === 'right'){
            rocketPosX +=10
            rocket.style.marginLeft = rocketPosX + 'px'
        }
        if(event.target.id === 'up'){
            rocketPosY +=10
            rocket.style.marginBottom = rocketPosY + 'px'
            shuttleHeight.innerHTML = "10,000" 
        }
        if(event.target.id === 'down'){
            rocketPosY -=10
            rocket.style.marginBottom = rocketPosY + 'px'
            shuttleHeight.innerHTML = "0" 
        }
      })
    
});
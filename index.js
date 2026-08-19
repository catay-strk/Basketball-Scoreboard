let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEL = document.getElementById("guest-score")
let leaderEl = document.getElementById("leader")

function updateLeader() {
    if (homeScore == guestScore)
        leaderEl.textContent = "Leader: Tie";
    else if (homeScore < guestScore)    
        leaderEl.textContent = "Leader: Guest is leading";
    else
        leaderEl.textContent = "Leader: Home is leading";
    console.log(leaderEl.textContent)
}

function homeAdd1() {
    homeScore += 1
    console.log("Home score increased to " + homeScore)
    homeScoreEl.textContent = homeScore
    console.log(homeScoreEl.textContent)
    updateLeader()
}

function homeAdd2() {
    homeScore += 2
    console.log("Home score increased to " + homeScore)
    homeScoreEl.textContent = homeScore
    console.log(homeScoreEl.textContent)
    updateLeader()
}

function homeAdd3() {
    homeScore += 3
    console.log("Home score increased to " + homeScore)
    homeScoreEl.textContent = homeScore
    console.log(homeScoreEl.textContent)
    updateLeader()
}

function guestAdd1() {
    guestScore += 1
    console.log("Guest score increased to " + guestScore)
    guestScoreEL.textContent = guestScore
    console.log(guestScoreEL.textContent)
    updateLeader()
}

function guestAdd2() {
    guestScore += 2
    console.log("Guest score increased to " + guestScore)
    guestScoreEL.textContent = guestScore
    console.log(guestScoreEL.textContent)
    updateLeader()
}

function guestAdd3() {
    guestScore += 3
    console.log("Guest score increased to " + guestScore)
    guestScoreEL.textContent = guestScore
    console.log(guestScoreEL.textContent)
    updateLeader()
}

function reset() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEL.textContent = guestScore
    leaderEl.textContent = "Leader: None"
    console.log("Home: " + homeScore + ", Guest: " + guestScore + ", " + leaderEl.textContent)
}
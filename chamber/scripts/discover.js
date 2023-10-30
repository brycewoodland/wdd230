const KEY_LAST_VISIT = "last-visit";
const DAY_IN_MILLIS = 24*60*60*1000

function getDiscoverMessage() {
    let message = "Welcome! Let us know if you have any questions.";
    let lastVisitValue = localStorage.getItem(KEY_LAST_VISIT);
    let today = new Date();
    if (lastVisitValue != null) {
        lastVisit = parseInt(lastVisitValue)
        daysSinceLastVisit = Math.floor((today.getTime() - lastVisit) / DAY_IN_MILLIS);
        if (daysSinceLastVisit == 0) {
            message = "Back so soon! Awesome!";
        }
        else {
            if (daysSinceLastVisit == 1) {
                message = "You last visited 1 day ago.";
            }
            else {
                message = `You last visited ${daysSinceLastVisit} days ago.`;
            }
        }
    }
    localStorage.setItem(KEY_LAST_VISIT, `${today.getTime()}`);
    return message;
}

document.querySelector("#discover-message h3").textContent = getDiscoverMessage();
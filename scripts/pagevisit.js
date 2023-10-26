// Create Key
const VISITS_KEY = 'site-visits';

function getSiteVisits() {
   // Check to see if the key exists in local storage
   let currentValue = localStorage.getItem(VISITS_KEY);
   // If the key doesn't exist, initialize the key to 1
   let siteVisits = 1;
   
   if (currentValue != null) {
      siteVisits = parseInt(currentValue) + 1;
      // If the key does exist, add 1 to the current value
   }
   // Save the new value for current visits
   localStorage.setItem(VISITS_KEY, `${siteVisits}`);
   return siteVisits;
}
// Update the html page with the current visits
document.querySelector('#visitcount').textContent = `${getSiteVisits()}`;
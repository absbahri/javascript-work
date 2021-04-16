

// On window load
document.addEventListener('DOMContentLoaded', function(){
  // Addclass disabled to button
  document.getElementById('field_2_11').querySelectorAll('button')[0].classList.add('disabled')
  // Add pointer-events:none and opacity:.5 css to button in form using ID and then filtering to button (have to get 0 as it returns an array)
  Object.assign(document.getElementById('field_2_11').querySelectorAll('button')[0].style,{pointerEvents:'none', opacity: '.5'})
})
function verifyAge(event, dateString) {
  event.preventDefault();
  // Get todays date
    var today = new Date(),
    // Get Submit Button
        submit = document.getElementById('field_2_11').querySelectorAll('button')[0],
        // Make string from seperate input fields in YYYY/MM/DD Format
        dateString = document.getElementById('input_2_7_3').value + '/' + document.getElementById('input_2_7_1').value + '/' + document.getElementById('input_2_7_2').value,
        // Convert String to date
        birthDate = new Date(dateString),
        // Get Years
        age = today.getFullYear() - birthDate.getFullYear(),
        // Get Months
        m = today.getMonth() - birthDate.getMonth();
        // month is over 0 or month is 0 and date is older than today
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        // Return Negative
        age--;
    }
    // If age is over 18 and all inputs are filled in
    if (age > 17 && document.getElementById('input_2_7_1').value != '' && document.getElementById('input_2_7_2').value != '' && document.getElementById('input_2_7_3').value != '') {
      // Remove Class disabled from previously found button
      submit.classList.remove('disabled');
      // Set css to be clickable and full opacity
      Object.assign(submit.style,{pointerEvents:'all', opacity: '1'});
    } else {
      // Add Disabled Class
      submit.classList.add('disabled');
      // Set non-clickable styles
      Object.assign(submit.style,{pointerEvents:'none', opacity: '.5'});
    }
}
// e is automatically passed into function as is an event listener
function preventKeyClick(e){
  // if Key is Enter disable event default actions
  if(e.key === 'Enter'){
    e.preventDefault();
  }
}
// Grab All Inputs
var inputs = document.getElementById('gform_page_2_1').querySelectorAll('input[type="text"]');

// Loop through all inputs
inputs.forEach(item => {

  // Assign verification function to each input
  item.addEventListener('change', verifyAge);
  // Assign key enter function to each input
  item.addEventListener('keydown', preventKeyClick);
})
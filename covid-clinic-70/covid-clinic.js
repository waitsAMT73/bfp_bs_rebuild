

// to be tested: this was moved here for CSP security. Its purppose is to scroll
// user to top of window once the google form is submitted.
if (document.getElementById("btnContinueToBooking")) {
  document.getElementById("btnContinueToBooking").addEventListener("click", function() {
    return validateForm();
  });
};


function validateForm() { 
        
        var frmInputs = document.getElementsByName("booking_conditions");

        for (var i = 0; i < frmInputs.length; i++) 
        {
            if (frmInputs[i].type == 'checkbox' && frmInputs[i].checked == false) {
                alert("Please tick all of the tickboxes to proceed.");
                return false;
            } 
        }

        function validateMedCon(grpName) {
            var rad = document.getElementsByName(grpName); 
            if (rad[0].checked == false && rad[1].checked == false) 
                return false;
            else
                return true;
        }

        function validateMedConYes(grpName) {
            var rad = document.getElementsByName(grpName); 
            if (rad[0].checked == true) 
                return false;
            else
                return true;
        }

        if (validateMedCon('medical_conditions1') && validateMedCon('medical_conditions2') && validateMedCon('medical_conditions3') && validateMedCon('medical_conditions4') && validateMedCon('medical_conditions5')) {

            if (validateMedConYes('medical_conditions1') && validateMedConYes('medical_conditions2') && validateMedConYes('medical_conditions3') && validateMedConYes('medical_conditions5')) 
                document.getElementById("frmCldly").submit();
             else 
                alert('Based on your answers, you are not eligible for the vaccine at this time.');
        }
            else
                alert('You must answer all of the questions.');
    }
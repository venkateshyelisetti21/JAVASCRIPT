document.addEventListener("DOMContentLoaded", function() {
    let myFormEl = document.getElementById("myForm");

    let formData = {
        name: "",
        email: "",
        status: "Active",
        gender: "Male"
    };

    myFormEl.addEventListener("submit", function(event) {
        event.preventDefault();
        validateFormData(formData);
        submitFormData(formData);
    });

    function validateFormData(formData) {
        let {name, email} = formData;
        if (name === "") {
            nameErrMsgEl.textContent = "Required*";
        }
        if (email === "") {
            emailErrMsgEl.textContent = "Required*";
        }
    }

    function submitFormData(formData) {
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer 00f3f8fde06120db02b587cc372c3d85510896e899b45774068bb750462acd9f"
            },
            body: JSON.stringify(formData)
        };
        let url = "https://gorest.co.in/public-api/users";
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                console.log(jsonData);
            });
    }

    let nameEl = document.getElementById("name");
    let nameErrMsgEl = document.getElementById("nameErrMsg");

    nameEl.addEventListener("change", function(event) {
        if (event.target.value === "") {
            nameErrMsgEl.textContent = "Required*";
        } else {
            nameErrMsgEl.textContent = "";
        }
        formData.name = event.target.value;
    });

    let emailEl = document.getElementById("email");
    let emailErrMsgEl = document.getElementById("emailErrMsg");

    emailEl.addEventListener("change", function(event) {
        if (event.target.value === "") {
            emailErrMsgEl.textContent = "Required*";
        } else {
            emailErrMsgEl.textContent = "";
        }
        formData.email = event.target.value;
    });

    let workingStatusEl = document.getElementById("status");
    workingStatusEl.addEventListener("change", function(event) {
        formData.status = event.target.value;
        // console.log(formData);
    });

    let genderMaleEl = document.getElementById("genderMale");
    genderMaleEl.addEventListener("change", function(event) {
        formData.gender = event.target.value;
    });

    let genderFemaleEl = document.getElementById("genderFemale");
    genderFemaleEl.addEventListener("change", function(event) {
        formData.gender = event.target.value;
    });
});

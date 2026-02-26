document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let dob = document.getElementById("dob").value;
    let country = document.getElementById("country").value;
    let address = document.getElementById("address").value;

    // Radio
    let gender = "";
    let genderOptions = document.getElementsByName("gender");
    for(let i=0; i<genderOptions.length; i++){
        if(genderOptions[i].checked){
            gender = genderOptions[i].value;
        }
    }

    // Checkboxes
    let skills = [];
    let skillOptions = document.getElementsByName("skills");
    for(let i=0; i<skillOptions.length; i++){
        if(skillOptions[i].checked){
            skills.push(skillOptions[i].value);
        }
    }

    // File
    let resume = document.getElementById("resume").files[0];
    let resumeName = resume ? resume.name : "No file uploaded";

    // Print Output
    document.getElementById("output").innerHTML = `
        <h3>Submitted Data:</h3>
        Name: ${name} <br>
        Email: ${email} <br>
        Password: ${password} <br>
        Age: ${age} <br>
        DOB: ${dob} <br>
        Gender: ${gender} <br>
        Skills: ${skills.join(", ")} <br>
        Country: ${country} <br>
        Address: ${address} <br>
        Resume: ${resumeName}
    `;
});
function saveStudentInfo(event) {
    var fullName = "Webiko"; // older way // latest JS dont use this!
    
    
    let city = "Mumbai"; // modern approach // Block scoped // used inside { } //variable can be changed/modified
    city = "Delhi";


    const country = "India" // Constant Value // BlockScoped// Cannot be changed/modified
    //country = "USA"; // This will give error and not work!

    let nam = "Alice"; //String
    let age = 20; // Number (int,float, everything is coverd in same)
    let isStudent = true; // Boolean
    let job = null; //NULL
    let address; // Undefined
    let person = {name: "Bob", age: 30}; // Object
    let scores  =[90, 29, 89]; // Array



    event.preventDefault(); //stop form from submitting normally

    //Get values from our form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    // Store in temporary localstorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("course", course);

    //Redirect to student details html page
    window.location.href = "studentDetails.html";
}
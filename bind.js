const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"ashi",
    lastName: "kumar",
  }
  
  let fullName = person.fullName.bind(member);
  
  document.getElementById("demo").innerHTML = fullName();
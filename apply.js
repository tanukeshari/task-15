const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName:"tanu",
    lastName: "keshari"
  }
  
  document.getElementById("demo2").innerHTML = person.fullName.apply(person1); 
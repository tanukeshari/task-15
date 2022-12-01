const myObject = {
    firstName:"muskan",
    lastName: "kumari",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  document.getElementById("demo1").innerHTML = myObject.fullName();
let identity = {
    name: "Shujon Mahmud",
    age: 36,
    country: "Bangladesh",
    profession: "Teacher",
    fullInfo: function () { // annonymous function
        return "My name is " + this.name + ". I am " + this.age + " years Old. I live in " + this.country + ".";
    }
}

// console.log(identity.name);
// console.log(identity.age);
// console.log(identity.country);
// console.log(identity.profession);
// console.log(identity.fullInfo());

// document.getElementById("result").innerText = identity.fullInfo();
// document.getElementById("result").innerHTML = identity.fullInfo();


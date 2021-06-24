var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",
}
function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}
displayDetails.apply(car, ["Fortuner"]);


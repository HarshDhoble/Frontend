var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(ownerName){
        console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
    }
}
var myCarDetails = car.displayDetails.bind(car, "Fortuner"); // Vivian, this is your car: GA12345 Toyota
myCarDetails();
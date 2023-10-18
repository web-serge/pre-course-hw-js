let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let copyPassportWithAddress = {...passportWithAddress, address: {...passportWithAddress.address}}
copyPassportWithAddress.address.city = 'Bobryisk'

console.log(passportWithAddress.address.city)
console.log(copyPassportWithAddress.address.city)
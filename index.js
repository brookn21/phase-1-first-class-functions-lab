
const returnFirstTwoDrivers = names => [...names].splice(0,2)

const returnLastTwoDrivers = names => [...names].splice(-2)

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    return function multiplier(){
        return num * num
    }
}

function fareDoubler(){
    const doubler = createFareMultiplier(num)
    return doubler
}
// Code your solution in this file!
function distanceFromHqInBlocks(location){
    let a = (Math.abs(location - 42));
    return a;
    }

function distanceFromHqInFeet(location){
    let a = (Math.abs(location - 42));
    return a * 264;
}

function distanceTravelledInFeet(location1, location2) {
    let a = (Math.abs(location1 - location2));
    return a * 264;
}

function calculatesFarePrice(location1, location2) {
    let a = (Math.abs(location1 - location2) * 264);
    if (a <=400){
        return 0;
    } else if (a > 400 && a <=2000){
        return ((0.02) * (a - 400));
    }else if (a > 2000 && a <= 2500){
        return 25;
    }else {
        return ("cannot travel that far");
    }
    
}
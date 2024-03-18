const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    const fuel = mpg * fuelLeft

    return fuel >= distanceToPump
};
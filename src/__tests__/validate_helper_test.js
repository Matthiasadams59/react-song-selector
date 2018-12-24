import validate_helper from "../helpers/validate_helper"

it("returns the correct message for a given array of songs", () => {
    const songs = ["Brighton Rock", "Under Pressure", "Don't Stop Me Now", "Killer Queen"]
    const expectedMessage = "You have selected the following songs:\nBrighton Rock, Under Pressure, Don't Stop Me Now, Killer Queen\n\nNice choice!"

    expect(validate_helper(songs)).toEqual(expectedMessage)
})

it("returns a predefined message for an empty array", () => {
    const expectedMessage = "You haven't selected any song for now! What a shame!"

    expect(validate_helper([])).toEqual(expectedMessage)
})
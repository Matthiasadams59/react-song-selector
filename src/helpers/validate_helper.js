const validate_helper = (songsSelected) => {
    if (songsSelected.length > 0) {
        let message = "You have selected the following songs:\n"
        for (let songIndex in songsSelected) {
            message += `${songsSelected[songIndex]}, `
        }
        message = message.substr(0, message.length - 2)
        message += "\n\nNice choice!"
        alert(message)
    } else {
        alert("You haven't selected any song for now! What a shame!")
    }
}

export default validate_helper
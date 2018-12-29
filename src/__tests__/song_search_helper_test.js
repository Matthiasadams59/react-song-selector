import song_search_helper from "../helpers/song_search_helper"

it("retrieves the right songs for a given search text", () => {
    const expectedSongs = ["God Save the Queen","Killer Queen","The March of the Black Queen","White Queen (As It Began)"]

    song_search_helper("queen", (resultSongs) => {
        expect(resultSongs).toEqual(expectedSongs)
    })
})

it("retrieves an empty list when none of the song titles match the search text", () => {
    song_search_helper("london calling", (resultSongs) => {
        expect(resultSongs).toEqual([])
    })
})

it("return an empty array if you search for an empty string", () => {
    song_search_helper("", (resultSongs) => {
        expect(resultSongs).toEqual([])
    })
})
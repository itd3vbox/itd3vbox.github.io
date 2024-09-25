import SparksData from "./sparks.data"
import GamesData from "./games.data"

export default class Data
{
    data: any = []

    constructor()
    {
        this.load()
    }

    getData(): any
    {
        return this.data
    }

    private load(): void
    {
        this.data = [
            ...this.data,
            ...SparksData,
            ...GamesData,
        ]
    }
}
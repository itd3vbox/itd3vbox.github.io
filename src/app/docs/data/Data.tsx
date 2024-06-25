import WebData from "./web.data"

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
            ...WebData
        ]
    }
}
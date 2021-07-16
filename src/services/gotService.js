
export default class GotService {
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
     getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok){
            throw new Error(`Could not fetch ${this._apiBase}${url}, status: ${res.status}`)
        }
    
       
        return await res.json();
    }
    getAllBooks = async () => {
        const houses = await this.getResource(`/books?page=1&pageSize=9`);
        return houses.map(this._transformBook)
    }
    
    getBook = async (id) => {
        const bookZ = await this.getResource(`/books/${id}`);
        return this._transformBook(bookZ)
    }
    
    getAllCharacters = async () => {
        const chars = await this.getResource(`/characters?page=5&pageSize=9`);
        return chars.map(this._transformCharacter)
    }
    
    getCharacter = async (id) =>{
        const char = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(char)
    }
    
    getAllHouses = async () => {
        const houses = await this.getResource(`/houses?page=1&pageSize=9`);
        return houses.map(this._transformHouse)
    }
    
    getHouse = async (id) => {
        const house = await this.getResource(`/houses/${id}`);
        return this._transformHouse(house);
    }

    _transformCharacter = (char) =>{
        return {
            url: char.url,
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }
    _transformHouse = (house) => {
        return {
            url: house.url,
            coatOfArms: house.coatOfArms,
            name: house.name,
            region: house.region,
            words: house.words,
            title: house.title,
            overlord: house.overlord,
            founded: house.founded,
            died: house.diedOut,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook = (book) => {
        return {
            url: book.url,
            name: book.name,
            numberOfPages : book.numberOfPages,
            publisher: book.publisher,
            released: book.released,
            isbn: book.isbn,
            country: book.country,
        }
    }
}

// const got = new GotService();

// got.getAllCharacters()
//     .then(res=> res.forEach(item => console.log(item.name)));

// got.getCharacter(22)
//     .then(res => console.log(res))
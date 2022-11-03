class Note {
    
    construktor(title, content, pin, color = 'blue'){
        if(isValidColor(color)) {
            throw new Error('invalid color')
        }
        this.title = title;
        this.content = content;
    }
    DataUtworzenia(){
        return this.
    }
}
const a = Data.now()
a.toISOString()
a.dateOBject.toLocaleString()

const ColorNote = {
    'black': 'rgb(0,0,0)'
}

const isValidColor =(color) =>{
    return Object.keys(ColorNote).includes(color)
}

window.localStorage.setItem('note', JSON.stringify(Note));

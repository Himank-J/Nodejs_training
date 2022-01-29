const fs = require("fs")

const addNote = (newNote)=>{
    notes = loadNotes()
    const duplicateNote = notes.find((note)=>{
        return note.title==newNote.title
    })
    if(!duplicateNote){
        notes.push(newNote)
        saveNotes(notes)
        console.log("Note added successfully")
    }
    else{
        console.log("Cannot save duplicate note title")
    }
}

const readNote = (title)=>{
    notes = loadNotes()
    const res = notes.find((note)=>{
        if(title==note.title){
            return note
        }
    })
    if(res)
        console.log(res)
    else
        console.log("Note does not exists")
}

const listNotes = ()=>{
    notes = loadNotes()
    if(notes!=[]){
        console.log("Your notes:")
        notes.forEach((note)=>{
            console.log("Title: "+note.title+", ", "Deadline: "+note.deadline)
        })
    }
    else{
        console.log("You have no notes")
    }
}

const removeNote = (title)=>{
    notes = loadNotes()
    const newNotes = notes.filter((note)=>{
        if(note.title!=title)
            return note
    })
    if(newNotes.length==notes.length)
        console.log("No note deleted")
    else{
        console.log("Note removed")
        saveNotes(newNotes)
    }
}

const saveNotes = (notes)=>{
    fs.writeFileSync("notes.json",JSON.stringify(notes))
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }
    catch(e){
        return []
    }   
}

module.exports = {addNote, readNote, listNotes, removeNote}
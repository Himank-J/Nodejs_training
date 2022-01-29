const yargs = require("yargs")
const notes = require("./notes")

const argv = yargs.argv

const command = argv._[0]
// Add new note
if(command==="add"){
    const title = argv._[1]
    const deadline = argv._[2]
    if(title && deadline){    
        newNote = {title:title, deadline:deadline}
        notes.addNote(newNote)
    }
    else{
        console.log("Please provide a title and a deadline")
    }
}

if(command=='read'){
    const title = argv._[1]
    if(title){
        notes.readNote(title)
    }
    else{
        console.log("Please provide a note title")
    }
}

if(command=='list'){
    notes.listNotes()
}

if(command=='remove'){
    const title = argv._[1]
    if(title){
        notes.removeNote(title)
    }
    else{
        console.log("Please provide a title")
    }
}
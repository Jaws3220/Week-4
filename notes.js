//let is a replacement for var
//const can only be assigned once, for things that will not change through out the code

//arrow functions
// const joseUser = users.find (function(user) {
//    return user.username === 'jose';
//})


function isJose(user){
    return user.username === 'jose'
}

const isJose = (user) => { return user.username === 'jose'}

//get rid of parenthesis around one parameter
const isJose = user => { return user.username === 'jose'}

//if a one line code
const isJose = user => user.username === 'jose'

//Callbacks
function getWorkDone() {
    const papers = ['some', '', 'papers'
    const fullPapers = papers.filter(isNotEmpty)]
}
function isNotEmpty(paper) {
    return paper !== ''
}

//.map does not delete the array it copies the array
//array methods - map
const greetings = names.map (name => 'Hello ' + name)

const emailList = [
    {
        id: 234,
        author: 'Frank',
        to: 'Mike',
        message: 'Wutup',
        read: false,
    },
    {
        id: 234,
        author: 'Frank',
        to: 'Mike',
        message: 'Wutup',
        read: false,
    }, 
    {
        id: 234,
        author: 'Frank',
        to: 'Mike',
        message: 'Wutup',
        read: false,
    },
]
alert(emailList.map (email => email.author + ' -' + email.message))
alert(emailList.map (email => email.author + ' -' + email.message)).join('\n') //to make it clean can also put .join(' and ')

//array methods = filter
const mNames = names.fileter(name => name[0] === 'M')
//mNames would have only the names starting with M

const unreadEmails = emailList.filter(email => !email.read)

//array methods = find
//this method will only return 1 value, it will not check the rest of the array

const emailWithID = emailList.find(message => message.id === 1654)
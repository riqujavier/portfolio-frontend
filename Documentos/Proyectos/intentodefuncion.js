var users = [{ name: 'Erik', email: 'erik@academlo.com' }, { name: 'Georg', email: 'georg@academlo.com' }, { name: 'Andrea', email: 'andrea@gmail.com' }];
    
var email = "erik@academlo.com"
let x = users.length ;
/*
function deleteUsers (usuarios,correos) {
    for (let i = 0 ; i < x;i++){
        if (usuarios[i].email === correos) {
            usuarios.splice (i);
        }
    }return users;
} 


console.log(deleteUsers [users,email]);    Dios sabe porque esta funcion solo da undefined,la reviso todo el mundo. La de abajo es una variante que si funciona     */

function deleteUsers (usersArray, correos) {
    for (let user in usersArray) {
        if (usersArray[user].email === correos) {
            usersArray.splice (user, 1);
        }
    }return usersArray;
} 

console.log("Array sin modificar: "+ JSON.stringify(users,null,2));
users= deleteUsers (users,email) ;
console.log("Array modificado: "+JSON.stringify(users,null,2));

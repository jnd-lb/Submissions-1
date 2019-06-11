
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */

function onDataReceived(text) {
  var textArr = text.trim().split(' ')
  var textStr = text.trim()
  
  if (textArr[0] == 'exit' || textArr[0] == 'quit') {
    quit();
  }
  else if(text === 'help\n'){
    help();
  }
  else if(textArr[0] === 'help'){
    hello(textArr)
  }
  else if(textArr[0] === 'list'){
    tasks(list);
  }
  else if(textStr.slice(0,3) == 'add'){
    add(textStr)
  }
  else if(textStr.slice(0,6) == 'remove'){
    remove(textStr)
  }
  else if(textStr.slice(0,4) == 'edit'){
    edit(textStr)
  }
  else if(text !== `${null}\n`){
    hello(text);
  }
  else{
    unknownCommand(text);
  }
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

/**
 * @param {string} a
 */
function hello(a){
  a.toString.trim()
  console.log(`${a}!`)
}

// The tasks list
var list = ['Do homeWork', 'brush my teeth', 'wakeup early', 'eat fish every wednesday'];

function tasks(list){
  for(var i = 0; i< list.length; i++)
  console.log(`${i+1}- ${list[i]}`)
}

/**
 * Says hello 
 * @param {string} x
 * @returns {void}
 */
function hello(x){
  console.log(`${x.trim()}!`)
}

/**
 * 
 * @param {string} x
 * @returns {void}
 */ 
// The add
function add(x){
  if(x.length > 4)
  {
   list.push(x.substr(4,30))
  }
  else{
    console.log('error')
  }
}

/**
 * remove tasks from the list
 * @param {string} c 
 * @returns {void}
 */
function remove(c){
  pos = Number(c.substr(7, 1));
  if(c == 'remove'){
    list.pop()
  }
  else{
    list.splice(pos-1, 1)
  }
}

/**
 * 
 * @param {string} b
 * @return {void} 
 */
 function edit(b){
  pos = Number(b.substr(5,1))
  if(pos > list.length){
    console.log('does not exits')
  }
  else if(b == 'edit'){
    console.log('error')
  }
  else if(Number(pos)){
    list[pos-1] = b.substr(7,30)
  }
  else{
    list[list.length-1] = b.substr(5,30)
  }
 }
/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}

/**
 *  
 * presents the lists of help that can help you in use the command
 */

function help(){
  console.log('-hello	write any word like (hello) they will rewrite like(hello!).');
  console.log('-lists show the tasks.');
  console.log('-add you can add new tasks from your list');
  console.log('-remove you can remove the last task from the list');
  console.log('-remove x (x) you can choose which task you want to remove by write remove and the nubmer of task');
}

// The following line starts the application
startApp("Rida Fakherden");

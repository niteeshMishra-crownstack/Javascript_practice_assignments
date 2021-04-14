//callbacks Promises Async -Await

//Sync code 

// function print(string) {
//     console.log(string)
// }

// print("Process start")
// print("Processing")
// print("Process end")

//----------------------------------------------------------------------------------
//Async code

// function print(string) {
//     setTimeout(() => //setTimeout take two para 1st function 2nd timeout value in milisecond
//         {
//             console.log(string)
//         }, Math.floor(Math.random() * 100)
//     )
// }
// print("Process start") //the output will come in random order bcz timeout value would in random order
// print("Processing")
// print("Process end")

//so this is a problem bcz i want output in a sequence.
//so to overcome this we have 3 concepts 
//callbacks, promise, Async-await


//*********************************************************************************** */
//callbacks

// function print(string, callback) {
//     setTimeout(() => {
//         console.log(string)
//         callback();

//     }, Math.floor(Math.random() * 100))
// }

// print('process start', () => { print('processing', () => { print('process end', () => {}) }) })

//************************************************************************************** */


/*promises
promise can have one or three states 
Pending(function hasnt completed its execution yet)
Resolve(completed its execution successfully)
Reject (when an error in function) */
function print(string) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(string)
            resolve()
        }, Math.floor(Math.random() * 100))
    })

}

print('process start')
    .then(() => print('processing'))
    .then(() => print('process end'))

//************************************************************************************ */

//Async -Await

function print(string) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(string)
            resolve()
        }, Math.floor(Math.random() * 100))
    })

}

async function printAll() {
    await print('process start')
    await print('processing')
    await print('process end')
}

printAll()
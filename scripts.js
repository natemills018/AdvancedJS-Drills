setName();

function setName() {
    var name = 'Nick';
    console.log(name);
}

console.log('some text');

let keys = myFunc(1,2);

console.log('some text',keys);

function myFunc(avg,result) {
    console.log('some text');
    let answer = (avg + result) / 2;
    return answer;
}


let fruits = ['Pineapple','Bananas','Oranges'];


function nameFunc(){

    let text = 'This is the name function';

    function displayText() {
        alert(text);
    }

    return displayText;
}


let yourFunction = nameFunc();


yourFunction();



function printFruits() {
    let favFruit = fruits[0];
    console.log(fruits[2]);

    function printFavFruit() {
        console.log(favFruit);
        let leastFav = fruits[1];
        console.log(leastFav);
        
    }

    printFavFruit();

    
}



printFruits();


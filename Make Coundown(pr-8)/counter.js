let countValue = 0;

function Display(){
    const counterValue = document.getElementById('countValue').innerHTML =  countValue;
}

function increment() {
    countValue++;
    Display();
}

function decrement() {
    countValue--;
    Display();
}

function reset() {
    countValue = 0;
    Display();
}
const output = document.getElementById('output')

for(let i=1; i<=100; i++){
    let elem = document.createElement('div');
    elem.classList.add('square');

    if(i % 3 === 0 && i % 5 === 0){
        elem.innerText = 'FizzBuzz';
        elem.classList.add('fizz-buzz');
    }
    else if(i % 3 === 0){
        elem.innerText = 'Fizz';
        elem.classList.add('fizz');
    }
    else if(i % 5 === 0){
        elem.innerText = 'Buzz';
        elem.classList.add('buzz');
    }
    else{
        elem.innerText = i;
    }

    output.append(elem);
}
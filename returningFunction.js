// Function returning function

function bless(wish)
{
    return function(greet){
        console.log(`${greet}, ${wish}`);
    };
}

const wishes = bless('I want to be an astronaut');
wishes('Hello');
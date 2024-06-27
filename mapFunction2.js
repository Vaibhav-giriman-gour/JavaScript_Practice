const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];
function createUserObjects(ids,names,images){

// Checking the length of all the arrays is same or not
    if(ids.length == names.length || names.length == images.length) {
    const output = ids.map((id, index) => ({
        id,
        name: names[index],
        image: images[index]
    }));
    return output;
}

}

const result = createUserObjects(ids, names, images);
console.log(result);
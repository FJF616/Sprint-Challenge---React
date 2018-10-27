
/* do not use

const Helper = {
function createNode(element) {
    return document.createElement(element);
},

function append(parent, el) {
  return parent.appendChild(el);
},

const ul = document.getElementById('people');
const url = 'https://swapi.co/api/people'
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let people = data.results;
  return people.map(function(person) {
    let li = createNode('li'),
        img = createNode('img'),
        span = createNode('span');
    // img.src = author.picture.medium;
    span.innerHTML = `${people.name}`;
    // append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(JSON.stringify(error));
});   
}*/
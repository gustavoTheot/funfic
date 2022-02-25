const buttonCreate = document.querySelector('.button-creat')

let arrayStory = []

function handleClick(e){
    e.preventDefault();
    
    let storyValue = createStory();

    // metodo de adicionar os valores da história no array de história
    addStoryinArray(storyValue)

    // verificando como está no console
    console.log(arrayStory)

    // chamando o metodo que cria a lista que será apresentada no navegador
    createList()

    // limpando os campos de input
    clearValues();
}

// adicionando histórias no array de história
function addStoryinArray(storyValue){
    arrayStory.push(storyValue)
}

// criando os elementos da lista
function createList(){
    arrayStory.forEach((item) => {
        let ul = document.querySelector('.ulstory')

        let li = document.createElement('li')
        let divDescription = document.createElement('div')
        divDescription.classList.add('description')

        // inserindo uma div de descrição dentro da lista
        li.appendChild(divDescription)

        // criando tags e elementos
        let auth = document.createElement('p')
        let type = document.createElement('p')
        let title = document.createElement('h3')
        let story = document.createElement('p')

        // inserindo elemento dentro de outros
        ul.appendChild(li)
        divDescription.appendChild(auth)
        divDescription.appendChild(type)
        li.appendChild(title)
        li.appendChild(story)

        // percorrendo o array e inserindo valores
        auth.innerHTML = `Auth: ${item.auth}`
        type.innerHTML = `Type: ${item.type}`
        title.innerText = item.title
        story.innerText = item.story

    })
}

// preenchendo o campos para criar uma história
function createStory(){
    let auth = document.querySelector('.auth').value
    let storyType = document.querySelector('.type-fic').value
    let storyTitle = document.querySelector('.title-fic').value
    let story = document.querySelector('.story').value

    // criando objetos para descrever a história
    let storyValue = {
        auth: auth,
        type: storyType,
        title: storyTitle,
        story: story
    }

    return storyValue
}

// limpando os valores do input assim que for criado uma história
function clearValues(){
    let auth = document.querySelector('.auth').value = ''
    let storyTitle = document.querySelector('.title-fic').value = ''
    let story = document.querySelector('.story').value = ''
}

buttonCreate.addEventListener('click', handleClick)
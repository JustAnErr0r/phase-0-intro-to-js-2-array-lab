
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name)
}

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(name){
    return cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    return cats.shift()
}

const appendCat = name => [...cats, name]

const prependCat = name => [name, ...cats]

const removeLastCat = name => cats.slice(0, 2)

const removeFirstCat = name => cats.slice(1)
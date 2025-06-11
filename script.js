const idades = [17, 26, 57, 65, 38, 52, 30, 71, 7, 25,45, 62, 54, 10, 60, 39, 49, 2, 35, 75,41, 34, 15, 3, 27, 0, 58, 26, 47, 70,8, 64, 11, 20, 73, 24, 78, 37, 42, 50,14, 68, 21, 59, 77, 67, 28, 32, 5, 44,55, 43, 19, 61, 31, 36, 40, 46, 6, 12,4, 1, 76, 13, 29, 33, 56, 16, 22, 18,23, 9, 48, 66, 53, 63, 74, 69, 51, 79,80, 72, 17, 38, 30, 11, 44, 65, 10, 0,35, 60, 7, 2, 49, 25, 3, 52, 71, 58]

let bebes = 0, criancas = 0, adolescentes=0,adultos=0,idosos = 0
idades.forEach(function(idade){
    if (idade < 3 ){
        bebes +=1
    }
    if (idade >= 3 && idade < 12 ){
        criancas +=1
    }
    if (idade >=12 && idade < 18 ){
        adolescentes +=1
    }
    if (idade >= 18 && idade < 65 ){
        adultos +=1
    }
    if (idade >=65 ){
        idosos +=1
    }
})
console.log(`Bebês: ${bebes}`)
console.log(`Crianças: ${criancas}`)
console.log(`Adolescentes: ${adolescentes}`)
console.log(`Adultos: ${adultos}`)
console.log(`Idosos: ${idosos}`)

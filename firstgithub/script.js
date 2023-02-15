// დაწერეთ ერთი ფუნქცია, რომელიც შეგიქმნის მასივს იმ სიგრძისას, რამდენსაც არგუმენტად გადასცემ და მასში ჩაწერს
// მხოლოდ რენდომ კენტ რიცხვებს(10დან 100მდე) ჩაწერს,  დააბრუნებს მას. დაწერეთ მეორე ფუნქცია, რომელიც გამოიძახებს ამ პირველ ფუნქციას 
// და დაბრუნებულ მასივში, იპოვის უდიდეს და უმცირეს ელემენტებს და დააბრუნებს მათ. (ახალ, ცარიელ მასივში ჩასვით და ისე დააბრუნეთ)(40ქ)
// (Sort და Min,Max და სხვა ჩაშენებული, უკვე არსებული ფუნქციები არ გამოიყენოთ!)

function newArray (arrLength){
    let randomNums = new Array(arrLength)
    let counter=0
    while (counter<randomNums.length){
        let randomNum = Math.floor(Math.random()*90)+10
        if (randomNum%2===1){
            randomNums[counter]=randomNum
            counter++
        }

    }
    return randomNums;
}



function getMinAndMax (){
    let randomNums = newArray (15)
    console.log(randomNums);
    
    let min = randomNums[0]
    let max = randomNums[0]
    for(let randNum of randomNums){
        if(randNum>max)max=randNum
        if(randNum<min)min=randNum
    }
    console.log(min);
    console.log(max);
    return {
        min,max
    }
}
getMinAndMax()
console.log(getMinAndMax());


// თქვენი სიტვყვებით ახსენით რა არის ფუნქცია და რაში გვჭირდება ის.(15ქ)
ფუნქცია წარმოადგენს ინსტრუქციების ერთობლიობას, რომლებიც ასრულებენ გარკვეულ მოქმედებას ან ითვლიან გარკვეულ მნიშვნელობას.
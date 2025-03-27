function writeCards(names, event){


    const thankyouMessage = [];

    for(let i = 0;i<names.length; ++i){

        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`

        thankyouMessage.push(message)
    }

    return thankyouMessage
}

function countDown(start){


    while (start >-1 ){

        console.log(start);

        start --
    }
}

countDown(10)
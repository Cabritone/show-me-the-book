


const expandMarkets = () => {
    const expandButton = document.querySelector('.tabs-navigation__actions .tabs-navigation__actions__button')
    expandButton.click()
}

const getOdds = () => {

    const markets = document.querySelectorAll('.markets .markets__market');
    console.log("Show Me The Book - Markets: ",markets.length)

    for (var i = 0; i < markets.length; i++) {
        //Get Market
        const market_title = markets[i].querySelector('.markets__market__header__title')

        //Get all selection odds
        const selections = markets[i].querySelectorAll('.selections .selections__selection')

        const odds = []
        selections.forEach( (currentValue, currentIndex, listObj) => {
            const odd = currentValue.querySelector('.selections__selection__odd')
            if(odd){
                odds.push(odd.textContent.trim().replace("-","") || 1)
            }
        })

        //Calculate Book
        let book = calculateBook(odds)
        book = `${(book*100).toFixed(2)}%`
        //Update Market title with Book percentage
        market_title.textContent += ` - ${book}`

        // console.log("> ",market_title.textContent.trim(), book, odds.join(" - "))
    }
}

const calculateBook = (odds) => {

    return odds
        .map( odd => 1 / parseFloat(odd))
        .reduce( (total, curr) => total + curr, 0)
}

//Expand all markets
setTimeout(()=>{
    expandMarkets()
    setTimeout(getOdds, 3000)
}, 5000 )
/////////

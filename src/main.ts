const btnPrevious = document.querySelector('.js-previous')
const btnNext = document.querySelector('.js-next')
const btnReset = document.querySelector('.js-reset')
const btnSent = document.querySelector('.js-sent')
let turnNumberEl = document.querySelector('.js-turn-number')

btnPrevious?.addEventListener('click', () =>  changeTurnToPrevious())
btnReset?.addEventListener('click', () => resetTurn())
btnNext?.addEventListener('click', () => changeTurnToNext())
btnSent?.addEventListener('click', () => sendTurn())

function changeTurnToPrevious(): void{
    let currentTurn = getCurrentTurn()
    let previousValue : string = String(--currentTurn).padStart(2, '0')
    if(currentTurn < 0)return
    checkElementAndPrintTurn(previousValue)
}

function changeTurnToNext(): void{
    let currentTurn = getCurrentTurn()
    if(currentTurn === 9999)return
    let nextValue : string = String(++currentTurn).padStart(2, '0')
    checkElementAndPrintTurn(nextValue)
}   

function resetTurn(): void{
    checkElementAndPrintTurn('00')
}

function sendTurn(): void{
    const input = document.querySelector('.js-input')
    if(input instanceof HTMLInputElement){
        let value : string = input.value
        if(parseInt(value) > 9999){
            value='9999'
        }
        else if(parseInt(value) < 1 || value === ""){
            value='00'
        }

        value = String(Math.round(parseFloat(value))).padStart(2, '0')
        input.value = ""
        checkElementAndPrintTurn(value)
    }
}

function getCurrentTurn(): number {
    return parseInt(turnNumberEl?.textContent ?? '00')
}

function checkElementAndPrintTurn(value: string) : void{
    if(turnNumberEl !== null && turnNumberEl !== undefined)turnNumberEl.innerHTML = value;
}



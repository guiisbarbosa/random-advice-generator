function randomAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then((response) => {
            return response.json()
        }).then((data) => {
            const adviceId = document.getElementById('adviceId')
            const advice = document.getElementById('advice')
            adviceId.innerHTML = `Advice #${data.slip.id}`
            advice.innerHTML = data.slip.advice
        })
}

randomAdvice()
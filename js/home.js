
//on click of buttons, POST request will be called on specified API endpoints
const handleSubmit = async (key, num, innerhtml) => {
    var postUrl = {
        'number1' : 'https://val_number1',
        'number2' : 'https://val_number2'
    }
    postUrl = postUrl[key]
    const data = {}
    data[key] = num
    const response = await fetch(postUrl, {
        method: 'POST',
        body: JSON.stringify(data), 
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response)=>{
        if (response.ok) {
            handleResponse(innerhtml, response.text())
          } else {
            throw new Error('Something went wrong');
        }})
    .then((responseJson)=>{
        console.log(responseJson)
    }).catch((error)=> {
        handleResponse(innerhtml, "Something went wrong.")
    });
}


// handle response/error to print it in a response box
const handleResponse = (innerhtml, res) => {
    var para = document.createElement("P");
    var t = document.createTextNode(res);
    para.appendChild(t);
    innerhtml.appendChild(para);
}




//update counters in textboxes
window.onload = function () {
    var totalView = document.getElementById('number1');
    var seconds = 0

    var number2Text = document.getElementById('number2');
    var number2Value = 0

    setTimeout(function run() {
        seconds += 1;
        totalView.value = seconds.toFixed(2);
        
        number2Value += 0.6;
        number2Text.value = number2Value.toFixed(2);
        setTimeout(run, 0);
    }, 0);

    // function incrementSeconds() {
    //     seconds += 1;
    //     totalView.value = seconds.toFixed(2);
    // }

    // var setTimeNumber1 = setInterval(incrementSeconds, 900);

    

    // function incrementNumber2() {
    //     number2Value += 0.6;
    //     number2Text.value = number2Value.toFixed(2);
    // }

    // var setTimeNumber2 = setInterval(incrementNumber2, 800);

};

 let time = 0;          
 let timer = null;      

        function startTimer() {
            if (timer === null) {  
                timer = setInterval(function() {
                    time++;
                    document.getElementById("display").innerText = time;
                }, 1000);
            }
        }

        function stopTimer() {
            clearInterval(timer);
            timer = null;  }
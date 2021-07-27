const startBtn = document.querySelector('#btnStart');

startBtn.addEventListener("click", () => {

    let platform = document.querySelector('#platform');

    platform.style.display = 'flex'
    
    startBtn.style.display = 'none';

    document.querySelector('#try').style.display = 'block';
  
    const aimBot = document.createElement('div');
  
    aimBot.classList.add('aimBotStyles');
  
    let msgBox = document.querySelector('#msgBox');
  
    platform.appendChild(aimBot);
  
    let index = -1;
  
    let Time = [];

    const setPosition = function() {
   
        let time = new Date().getTime();
       
        Time.push(time);
       
        const height = window.getComputedStyle(platform).height.toString().replace(/px/g, '');
       
        const width = window.getComputedStyle(platform).width.toString().replace(/px/g, '');
       
        const x = Math.floor(Math.random() * width);
       
        const y = Math.floor(Math.random() * height);
        
        aimBot.style.top = y + 'px';
       
        aimBot.style.left = x + 'px';
       
        index += 1;
       
        document.getElementById('tries').innerHTML = 10 - index;
       
        if (index === 10) {
         
          sendMsg();
         
        }

    }

    const sendMsg = function() {
    
        document.querySelector('#try').style.display = 'none';

        aimBot.style.display = 'none';

        platform.style.display = 'none'
       
        let calc = ((Time[Time.length - 1] - Time[0]) / 10).toFixed(3);
        
        document.querySelector('#timeMsg').innerHTML = calc;
       
        msgBox.style.display = 'flex';
       
    };

    document.querySelector('#btnMsg').addEventListener('click', () => {
        startBtn.style.display = '';
        msgBox.style.display = 'none';
        platform.style.display = 'none';
    });
      
    setPosition();
      
    aimBot.addEventListener('click', setPosition);

});
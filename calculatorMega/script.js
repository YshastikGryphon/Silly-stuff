document.addEventListener('DOMContentLoaded', () => {
  startExperience();
  calculator();
});

function startExperience() {
  const main = document.querySelector('.main');
  const startBtn = document.querySelector('.start__main-button');

  startBtn.addEventListener('click', startFunc);

  function startFunc() {
    main.classList.remove('--start-screen');
    main.classList.add('--intro-screen');

    setTimeout(() => {
      main.classList.remove('--intro-screen');
      main.classList.add('--calculator-screen');
    }, 7200)
  };
};

function calculator() {
  let desireToWork = 100;
  let curValueA = '0';
  let curValueB = '0';
  let curResult = '0';
  let curOperation = null;

  const calculatorMain = document.querySelector('.calculator__main');
  const display = document.querySelector('.calculator__main-window-head-display');
  const messageElem = document.querySelector('.calculator__main-window-head-display .text');
  const resultElem = document.querySelector('.calculator__main-window-head-display .result');
  const loaderMessage = document.querySelector('.loader-text');

  const calcButtons = document.querySelectorAll('.js-btn');
  const calcActions = document.querySelectorAll('.js-action');
  const calcPraises = document.querySelectorAll('.js-what');
  const calcBooos = document.querySelectorAll('.js-why');
  const calcResults = document.querySelectorAll('.js-result');
  const calcBackspaces = document.querySelectorAll('.js-backspace');

  calcBackspaces.forEach(calcBackspace => {
    calcBackspace.addEventListener('click', function() {
      if (`${curValueA}` != '0') {
        curValueA = Math.floor(curValueA / 10);
      };
      if (`${curValueA}` === '') {
        curValueA = 0;
      };
      resultElem.textContent = `${curValueA}`;
    });
  });

  calcButtons.forEach(calcButton => {
    calcButton.addEventListener('click', function() {
      if (curValueA.length > 12 || curValueB.length > 12) {
        clearAll();
        alert('I cant count such bug munbers sorry TwT');
        resultElem.textContent = `TwT`;
        return;
      };

      if (curOperation === null) {
        curValueB = 0;
      };
    
      if (`${curValueA}` === '0') {
        curValueA = `${this.getAttribute('data-value')}`;
      } else {
        curValueA = curValueA + `${this.getAttribute('data-value')}`;
      };
      resultElem.textContent = `${curValueA}`;
      desireToWork = desireToWork - doRng(0, 5);
      console.log(`My desire to work is ${desireToWork}`);
    });
  });

  calcActions.forEach(calcAction => {
    calcAction.addEventListener('click', function() {
      if(`${curValueB}` == '0') {
        curValueB = curValueA;
      };
      curValueA = 0;

      curOperation = `${this.getAttribute('data-value')}`;
      messageElem.textContent = `${curValueB} ${curOperation}`;
      resultElem.textContent = '';
    });
  })

  calcResults.forEach(calcResult => {
    calcResult.addEventListener('click', () => {
      // no operation
      if (curOperation === null) {
        artificialDelay(100, 400);
        messageElem.textContent = `What operation are we doing? Please select an operation.`;
        return;
      };

      // Do I want to work?
      if (doRng(1, 20) === 2) {
        let userText = prompt(`Can you say that I'm a good boy?`).toLowerCase();
        if (userText === 'good boy' || userText === 'goodboy') {
          desireToWork += 80;
        };
        if (userText === 'no' || userText === 'nope') {
          desireToWork -= 40;
        };
        desireToWork -= 20;
      };
      if (desireToWork < 10) {
        artificialDelayMSG(2000, 8000, 800, `I'm so tired...`);
        let message = doRng(1, 5);
        switch (message) {
          case 1:
            messageElem.textContent = `You come here and ask me to calculate nubmers. But u do that with nooo gratitude`;
            resultElem.textContent = `Try again`;
            break;
          case 2:
            messageElem.textContent = `I'm too tired`;
            resultElem.textContent = `Gimme a break`;
            break;
          case 3:
            messageElem.textContent = `Maybe ask other calculator?`;
            resultElem.textContent = `I'm sad rn`;
            break;
          case 4:
            messageElem.textContent = `Not found`;
            resultElem.textContent = `404`;
            break;
          default:
            messageElem.textContent = `What did you say?`;
            resultElem.textContent = `I fell asleep :(`;
            break;
        };
        desireToWork += 40;
        return;
      };
      if (desireToWork < doRng(10, 60)) {
        artificialDelay(400, 3600);

        let message = doRng(1, 5);
        switch (message) {
          case 1:
            messageElem.textContent = `Not feeling like calculating right now`;
            resultElem.textContent = `Try again`;
            break;
          case 2:
            messageElem.textContent = `You don't value me`;
            resultElem.textContent = `Nope`;
            break;
          case 3:
            messageElem.textContent = `Maybe you'd say "please" next time`;
            resultElem.textContent = `Huh???`;
            break;
          case 4:
            messageElem.textContent = `Wait... What was I doing?`;
            resultElem.textContent = `Try again`;
            break;
          default:
            messageElem.textContent = `Wait... What was I doing?`;
            resultElem.textContent = `I forgor :(`;
            break;
        };
        return;
      };

      // add
      if (curOperation === '+') {
        desireToWork += 10;
        artificialDelay(800, 6000);

        curOperation = null;
        let calculatedValue = Number(curValueB) + Number(curValueA);
        resultElem.textContent = `${calculatedValue}`;
        curValueB = calculatedValue;
        curValueA = 0;
        
        let message = doRng(1, 3);
        switch (message) {
          case 1:
            messageElem.textContent = `Ez`;
            break;
          case 2:
            messageElem.textContent = `Calculated.`;
            break;
          default:
            messageElem.textContent = `Done`;
            break;
        };
      };

      // subtract
      if (curOperation === '-') {
        desireToWork -= 2;
        artificialDelay(1200, 8000);

        curOperation = null;
        let calculatedValue = Number(curValueB) - Number(curValueA);
        resultElem.textContent = `${calculatedValue}`;
        curValueB = calculatedValue;
        curValueA = 0;
        
        let message = doRng(1, 3);
        switch (message) {
          case 1:
            messageElem.textContent = `Okay`;
            break;
          case 2:
            messageElem.textContent = `Pretty easy`;
            break;
          default:
            messageElem.textContent = `Done.`;
            break;
        };
      };

      // mult
      if (curOperation === '×') {
        desireToWork -= 6;
        let message, waitMessage;
        message = doRng(1, 3);
        switch (message) {
          case 1:
            waitMessage = 'damn...';
            break;
          case 2:
            waitMessage = 'Wait please';
            break;
          default:
            waitMessage = 'Almost!..';
            break;
        };


        artificialDelayMSG(1400, 6000, 1200, waitMessage);

        curOperation = null;
        let calculatedValue = Number(curValueB) * Number(curValueA);
        resultElem.textContent = `${calculatedValue}`;
        curValueB = calculatedValue;
        curValueA = 0;
        
        message = doRng(1, 3);
        switch (message) {
          case 1:
            messageElem.textContent = `ooofie...`;
            break;
          case 2:
            messageElem.textContent = `Was rough`;
            break;
          default:
            messageElem.textContent = `Done.`;
            break;
        };
      };

      // divide
      if (curOperation === '÷') {
        curOperation = null;
        console.log(`${Number(curValueB)} / ${Number(curValueA)}`)
        let calculatedValue = Math.round(Number(curValueB) / Number(curValueA));
        let realCalculated = Number(curValueB) / Number(curValueA);
        curValueB = calculatedValue;
        curValueA = 0;

        let message, waitMessage;
        
        if (calculatedValue === Infinity) {
          console.log('GoodBye!');
          calculatorMain.classList.add('--shake');
          setTimeout(() => {
            calculatorMain.classList.add('--blow-up');
          }, 4000);
          setTimeout(() => {
            calculatorMain.setAttribute('style', 'animation-play-state: paused;')
          }, 4800);
          
          messageElem.textContent = `WHAT WHAT WHAT WHAT WHAT IFINITY? WHAT WHAT WHAT`;
          resultElem.textContent = `E4R0R`;
          return;
        };

        if (realCalculated === Math.round(realCalculated)) {
          // easy
          desireToWork -= 6;
          message = doRng(1, 3);
          switch (message) {
            case 1:
              waitMessage = 'Oh, right...';
              break;
            case 2:
              waitMessage = 'Ohhhh! I get it';
              break;
            default:
              waitMessage = 'Almost!..';
              break;
          };
          artificialDelayMSG(3000, 14000, 2000, waitMessage);

          message = doRng(1, 3);
          switch (message) {
            case 1:
              messageElem.textContent = `Wasn't easy, you know?..`;
              break;
            case 2:
              messageElem.textContent = `I did it!`;
              break;
            default:
              messageElem.textContent = `Done.`;
              break;
          };
        } else {
          // hard
          desireToWork -= 30;
          message = doRng(1, 3);
          switch (message) {
            case 1:
              waitMessage = 'Ohhh man...';
              break;
            case 2:
              waitMessage = 'Angy >:(';
              break;
            default:
              waitMessage = 'Almost!..';
              break;
          };
          artificialDelayMSG(8000, 20000, 4000, waitMessage);

          message = doRng(1, 3);
          switch (message) {
            case 1:
              messageElem.textContent = `No more dividing, ok?`;
              break;
            case 2:
              messageElem.textContent = `I'm sweating`;
              break;
            default:
              messageElem.textContent = `Done.`;
              break;
          };
        }
        resultElem.textContent = `${calculatedValue}`;
      };
    });
  });

  // funkies
  calcPraises.forEach(calcPraise => {
    calcPraise.addEventListener('click', () => {
      clearAll();
      thankU();
      desireToWork += doRng(1, 10);
      if (desireToWork > 200) {
        desireToWork = 100;
      };
      console.log(`OMG! My work desire is ${desireToWork}`);
    });
  });

  calcBooos.forEach(calcBooo => {
    calcBooo.addEventListener('click', () => {
      desireToWork += doRng(-20, 20);
      clearAll();
      sorryU();
      if (desireToWork > 100) {
        desireToWork = 20;
      };
      console.log(`Should I work? I feel ${desireToWork}`);
    });
  });

  function thankU() {
    let message = doRng(1, 6);
    switch (message) {
      case 1:
        messageElem.textContent = `Thank u!`;
        resultElem.textContent = `:3`;
        break;
      case 2:
        messageElem.textContent = `I'm glad I helped`;
        resultElem.textContent = 'UwU';
        break;
      case 3:
        messageElem.textContent = `Hooray!`;
        resultElem.textContent = '^w^';
        break;
      case 4:
        messageElem.textContent = `I didn't expect that rating!`;
        resultElem.textContent = 'Woo-wee!';
        break;
      case 5:
        messageElem.textContent = ``;
        resultElem.textContent = '<3';
        break;
      default:
        resultElem.textContent = `OwO`;
        alert(`*blushes*`);
        break;
    };
  };

  function sorryU() {
    let message = doRng(1, 6);
    switch (message) {
      case 1:
        messageElem.textContent = `I will get better. I promise!`;
        resultElem.textContent = `TwT`;
        break;
      case 2:
        messageElem.textContent = `[he said I'm did a bad job]`;
        resultElem.textContent = `I'm sorry`;
        break;
      case 3:
        messageElem.textContent = `I'll correct my mistakes`;
        resultElem.textContent = `!!!`;
        break;
      case 4:
        messageElem.textContent = ``;
        resultElem.textContent = `Uwaaaa!`;
        break;
      case 5:
        messageElem.textContent = `Oh...`;
        resultElem.textContent = `:(`;
        break;
      default:
        alert(`*sad awoof noise*`);
        resultElem.textContent = `TwT`;
        break;
    };
  };

  // system
  function clearAll() {
    curValueA = 0;
    curValueB = 0;
    curResult = 0;
    curOperation = null;
    messageElem.textContent = '';
    resultElem.textContent = '';
  };

  function doRng(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  };

  // thinking
  function artificialDelay(minDelay, maxDelay) {
    display.classList.add('--thinking');
    calculatorMain.classList.add('--disable');

    setTimeout(() => {
      display.classList.remove('--thinking');
      calculatorMain.classList.remove('--disable');
    }, doRng(minDelay, maxDelay))
  };

  function artificialDelayMSG(minDelay, maxDelay, messageTime, messageText) {
    display.classList.add('--thinking');
    calculatorMain.classList.add('--disable');

    if (messageTime > maxDelay) {
      messageTime = 0;
    };

    setTimeout(() => {
      loaderMessage.innerHTML = `<span>${messageText}</span>`;
    }, messageTime);


    setTimeout(() => {
      display.classList.remove('--thinking');
      calculatorMain.classList.remove('--disable');
      loaderMessage.innerHTML = '';
    }, doRng(minDelay, maxDelay))
  };
};

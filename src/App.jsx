import { useState } from 'react';
import './App.css';

function App() {
  let [image, setImage] = useState('');
  let [userImage, setUsurImage] = useState('');
  let [countPc, setCountPc] = useState(0);
  let [countUser, setCountUser] = useState(0);
  const [result, setResult] = useState('');

  const images = [
    `./images/paper.svg`,
    `./images/qaychi.svg`,
    `./images/quduq.svg`,
  ];

  function handleButtons(e) {
    const choice = e.target.innerText;
    const random = Math.floor(Math.random() * 3);
    let selectedImage = images[random];

    setImage(selectedImage);
    if (choice === 'ROCK') {
      setUsurImage('./images/quduq.svg');
    } else if (choice === 'PAPER') {
      setUsurImage('./images/paper.svg');
    } else {
      setUsurImage('./images/qaychi.svg');
    }

    if (choice === 'ROCK' && selectedImage === images[1]) {
      setCountUser(countUser + 1);
      setResult('YOU WON !🎉');
    } else if (choice === 'PAPER' && selectedImage === images[2]) {
      setCountUser(countUser + 1);
      setResult('YOU WON !🎉');
    } else if (choice === 'SCISSORS' && selectedImage === images[0]) {
      setCountUser(countUser + 1);
      setResult('YOU WON !🎉');
    } else if (
      (choice === 'ROCK' && selectedImage === images[2]) ||
      (choice === 'PAPER' && selectedImage === images[0]) ||
      (choice === 'SCISSORS' && selectedImage === images[1])
    ) {
      setResult('DRAW!🙏');
    } else {
      setCountPc(countPc + 1);
      setResult('COMPUTER WON !🎉');
    }
  }

  return (
    <div class="game">
      <div class="game_nav">
        <header>
          <ul class="header_ul">
            <h1>Rock Paper Scissors with Compose</h1>
            <img src="images/light_mode_FILL0_wght400_GRAD0_opsz48 1.svg" />
          </ul>
          <h1 class="game_nav_h1">RESET THE TOUR</h1>
        </header>
        <div class="game_role">
          <div class="game_role_nav">
            <h2 id="userScore">PLAY SCORE:{countUser}</h2>
            <h2 id="pcScore">COMPUTER SCORE:{countPc}</h2>
          </div>
        </div>
        <div class="result-box">
          <h1 id="result">{result}</h1>
        </div>
        <div id="results_images" class="results_images">
          <div id="results_user">
            <img id="randomImageA" src={userImage}></img>
          </div>
          <h1>vs</h1>
          <div id="results_pc">
            <img src={image} />
          </div>
        </div>
        <p class="p">Choose your move, rock paper or scissors?</p>
        <div class="buttons">
          <button onClick={handleButtons}>ROCK</button>
          <button onClick={handleButtons}>PAPER</button>
          <button onClick={handleButtons}>SCISSORS</button>
        </div>
      </div>
    </div>
  );
}

export default App;

import rockURL from './icons/icons8-hand-rock-100.png'
import paperURL from './icons/icons8-hand-100.png'
import scissorsURL from './icons/icons8-hand-scissors-100.png'

export default function Roshambo() {

  onload = () => {
    let userScore = 0;
    let computerScore = 0;
    const userScore_span = document.getElementById("user-score"); // HTML variables that store dom elements
    const computerScore_span = document.getElementById("computer-score"); // indicated with "_span" because it's in the HTML under a <span> tag
    const scoreBoard_div = document.querySelector(".score-board");
    const result_p = document.querySelector(".result > p");
    const rock_div = document.getElementById("r");
    const paper_div = document.getElementById("p");
    const scissors_div = document.getElementById("s");
    // Now, we have "cached the dom" (Saved reference to the domain. Saves us computation time b/c we don't need to fetch references to these elements each time we use them.)


    function getComputerChoice() {
      const choices = ['r', 'p', 's'];
      return choices[Math.floor(Math.random() * 3)];
    }

    function getWinningEmoji() {
      const winEmojis = ["🥂", "😄", "🤙", "🥇", "Big 🧠", "🌟", "🏆", "👌", "💪", "🤗"]
      return winEmojis[Math.floor(Math.random() * winEmojis.length)]
    }

    function getLosingEmoji() {
      const winEmojis = ["😈", "🖕", "👎", "💀", "💩", "💥", "😥", "🤦", "🤬", "🤮"]
      return winEmojis[Math.floor(Math.random() * winEmojis.length)]
    }

    function getWord(letter) {
      switch (letter) {
        case ('r'): return "Rock";
        case ('p'): return "Paper";
        case ('s'): return "Scissors";
      }
    }

    function win(userChoice, computerChoice) {
      userScore++;
      userScore_span.innerHTML = userScore;
      const smallUserWord = "user".fontsize(3).sub();
      const smallCompWord = "comp".fontsize(3).sub();
      result_p.innerHTML = (getWord(userChoice) + smallUserWord + " beats "
        + getWord(computerChoice) + smallCompWord + ". You win! " + getWinningEmoji())
      // document.getElementById(userChoice).classList.add('green-glow');
      // setTimeout(function () { document.getElementById(userChoice).classList.remove('green-glow)') }, 300);
    }

    function lose(userChoice, computerChoice) {
      computerScore++;
      computerScore_span.innerHTML = computerScore;
      const smallUserWord = "user".fontsize(3).sub();
      const smallCompWord = "comp".fontsize(3).sub();
      result_p.innerHTML = (getWord(userChoice) + smallUserWord + " loses to "
        + getWord(computerChoice) + smallCompWord + ". You lose! " + getLosingEmoji());
      // document.getElementById(userChoice).classList.add('red-glow');
    }

    function draw(userChoice, computerChoice) {
      const smallUserWord = "user".fontsize(3).sub();
      const smallCompWord = "comp".fontsize(3).sub();
      result_p.innerHTML = (getWord(userChoice) + smallUserWord + " ties "
        + getWord(computerChoice) + smallCompWord + ". Draw! 🤜🤛");
      // document.getElementById(userChoice).classList.add('grey-glow');
    }

    function game(userChoice) {
      const computerChoice = getComputerChoice();
      switch ("" + userChoice + computerChoice) {
        case ("rs"):
        case ("pr"):
        case ("sp"):
          win(userChoice, computerChoice);
          break;
        case ("rr"):
        case ("ss"):
        case ("pp"):
          draw(userChoice, computerChoice);
          break;
        default:
          lose(userChoice, computerChoice);
          break;
      }
    }

    function main() {

      rock_div.addEventListener('click', function () {
        game('r');
      })

      paper_div.addEventListener('click', function () {
        game('p');
      })

      scissors_div.addEventListener('click', function () {
        game('s');
      })

    }

    main();
  }

  return (<>
    <header>
      <h1>Rock Paper Scissors</h1>
    </header>

    <div class="score-board">
      <div id="user-label" class="badge">user</div>
      <div id="computer-label" class="badge">comp</div>
      <span id="user-score">0</span>:<span id="computer-score">0</span>
    </div>

    <div class="result">
      <p>Who will be champion? Dare to find out!</p>
    </div>

    <div class="choices">
      <div class="choice" id="r">
        <img src={rockURL} alt="hand-rock" />
      </div>
      <div class="choice" id="p">
        <img src={paperURL} alt="hand" />
      </div>
      <div class="choice" id="s">
        <img src={scissorsURL} alt="hand-scissors" />
      </div>
    </div>

    <p id="action-message">Make your move.</p>
  </>)
}

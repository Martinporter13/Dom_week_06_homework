document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');


const form = document.querySelector('#form');
form.addEventListener('submit', handleFormSubmit);

const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleFormSubmit = function(event){
  event.preventDefault();

  const footballPlayerItem = createFootballPlayerItem(event.target);
  const footballPlayer = document.querySelector('#football-player');
  footballPlayer.appendChild(footballPlayerItem);


 };

 const createFootballPlayerItem = function (form) {
   const footballPlayerItem = document.createElement('div');
   footballPlayerItem.classList.add('football-player-item');

   const first = document.createElement('h2');
   first.textContent = form.first_name.value;
   footballPlayerItem.appendChild(first);

   const last = document.createElement('h3');
   last.textContent = form.last_name.value;
   footballPlayerItem.appendChild(last);

   const team = document.createElement('p');
   team.textContent = form.football_team.value;
   footballPlayerItem.appendChild(team);

   return footballPlayerItem

 }



const handleDeleteAllClick = function (event) {
  const footballPlayer = document.querySelector('#football-player');
  footballPlayer.innerHTML = '';
}

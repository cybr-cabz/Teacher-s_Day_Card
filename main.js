function showFlowersPage() {
  var name = document.getElementById('user-name').value.trim();
  if(name === "") {
    alert("Please enter your name!");
    return;
  }
  document.getElementById('intro-page').style.display = 'none';
  document.getElementById('flowers-page').style.display = '';
  document.getElementById('greeting-message').innerHTML =
    "Happy Teachers' Day Sir/Ma'am, " + name + "!<br>" +
    "<span style='font-size:3.2vmin; color:#fff; font-family:Segoe Script, cursive;'>Thank you for inspiring minds, touching hearts, and shaping the future for us. Your kindness, wisdom, and dedication make the world bloom brighter. You are truly appreciated and loved!</span>";
}

document.getElementById('start-btn').onclick = showFlowersPage;

document.getElementById('user-name').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    showFlowersPage();
  }
});
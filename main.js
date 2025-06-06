
document.getElementById('loginScreen').style.display = 'flex';

function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if (username && password) {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('desktop').style.display = 'block';
    const bg = localStorage.getItem('anhell_bg');
    if (bg) document.body.style.backgroundImage = `url('${bg}')`;
  } else {
    alert('Introduce usuario y contraseña');
  }
}

function openWindow(id) {
  const win = document.getElementById(id);
  win.style.display = 'flex';
}

function closeWindow(id) {
  document.getElementById(id).style.display = 'none';
}

function loadURL() {
  const url = document.getElementById('url').value;
  document.getElementById('iframe').src = url;
}

function sendChat() {
  const input = document.getElementById('chatInput');
  const chatlog = document.getElementById('chatlog');
  const msg = input.value;
  if (msg) {
    chatlog.innerHTML += `<div><b>Tú:</b> ${msg}</div>`;
    input.value = '';
  }
}

function changeBackground() {
  const url = document.getElementById('bgUrl').value;
  document.body.style.backgroundImage = `url('${url}')`;
  localStorage.setItem('anhell_bg', url);
}

function checkAdmin() {
  const pass = document.getElementById('adminPass').value;
  if (pass === 'admin123') {
    document.getElementById('adminPanel').style.display = 'block';
  } else {
    alert('Clave incorrecta');
  }
}

function talkToAssistant() {
  const input = document.getElementById('assistantInput');
  const out = document.getElementById('assistantOutput');
  const msg = input.value;
  if (msg) {
    out.innerHTML += `<div><b>Tú:</b> ${msg}</div>`;
    out.innerHTML += `<div><b>Anhell:</b> Estoy pensando... 🤔</div>`;
    input.value = '';
  }
}

// Hacer ventanas arrastrables
document.querySelectorAll('.window').forEach(win => {
  const title = win.querySelector('.titlebar');
  let isDown = false;
  let offset = [0, 0];

  title.addEventListener('mousedown', (e) => {
    isDown = true;
    offset = [e.clientX - win.offsetLeft, e.clientY - win.offsetTop];
  });

  document.addEventListener('mouseup', () => isDown = false);
  document.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    win.style.left = (e.clientX - offset[0]) + 'px';
    win.style.top = (e.clientY - offset[1]) + 'px';
  });
});

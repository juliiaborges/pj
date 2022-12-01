var btn = document.querySelector('button');

btn.onclick = function() {
  if (document.querySelector('#nav-list').classList.contains('active')) {
    document.querySelector('#nav-list').classList.remove('active')
    document.querySelector('#nav-list').classList.add('tira')
  } else {
    document.querySelector('#nav-list').classList.remove('tira')
    document.querySelector('#nav-list').classList.add('active')
  }
}

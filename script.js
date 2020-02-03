function removeBlack(event) {
  if(event.target.className[0]=='r'&&event.target.className[1]=='e'&&event.target.className[2]=='c'){
  	event.target.remove();
  }

}

document.addEventListener("click", removeBlack);


const displayAddMessage = (addForm, message, popUp) => {
  const span = document.createElement('span');
  span.textContent = message;
  span.className = popUp;
  addForm.appendChild(span);
  setTimeout(() => span.remove(), 2000);
};

export default displayAddMessage;
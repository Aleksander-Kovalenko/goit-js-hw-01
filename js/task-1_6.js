let total = 0;
while (true) {
  let inputUser = Number(prompt('Enter your number'));

  if (!inputUser) {
    console.log('User closed window');
    break;
  }
  total += inputUser;
}
alert(`Total amount ${total}`);

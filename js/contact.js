const name = document.querySelector('#name');
const email = document.querySelector('#email');
const textBox = document.querySelector('#query');

//when button is click
//get input values
//alert user
const submitQuery = () => {
  const UserName = name.value;
  const UserEmail = email.value;
  const UserQuery = textBox.value;
  alert(`
    Thank you ${UserName}

    We will get in touch soon
  `);
};

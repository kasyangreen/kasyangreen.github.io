function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";

  //a prompt box to allow users to enter their name
  user_name = window.prompt(a, b);

  message = "<h1> Hello, Welcome to my webpage, "+ user_name + "!</h1>"
  return message
}

//document.write(welcome());

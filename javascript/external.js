var webmaps =
  [
    [
      "Instagram's Food Capitals",
      "https://www.cewe.co.uk/instagram-food-capitals.html",
      "The primary purpose of this web map is to show people locations to visit for particular food items. This data is generated using food tags that are uploaded to Instagram. For example, the top city for bacon is New York."
    ],
    [
      "Manhattan Population Explorer",
      "https://manpopex.us",
      "The primary purpose of this map is to display a time series map of Manhattan population throughout the week. Through the user interface, users can adjust the time and day and specific regions they want to view. The data was collected using turnstiles from the subway. "
    ]
  ];

function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";

  //a prompt box to allow users to enter their name
  user_name = window.prompt(a, b);

  message = "<h1> Hello, Welcome to my webpage, "+ user_name + "!</h1>"
  return message
}

function webmap_table()
{
  document.write("<table width=100%>");
  for (var row=0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    for (var column=0; column < webmaps[0].length; column++)
    {
      document.write("<td>" + webmaps[row][column] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
}

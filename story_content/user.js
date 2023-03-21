function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6REaNS9BBYe":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwyrmjlc3wux-VEvU8bCmevcK0eY4Y2jqc7lUpAOOQTIKhwbcGzFaMWGlo-oKeVxutZ/exec"


var player=GetPlayer()


fetch(url,{

	method:"POST",

	mode: 'no-cors',

	cache:'no-cache',

	headers: {'Content-Type': 'application/json'},

	redirect:'follow',

	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect"),q2attempts:player.GetVar("q2attempts"),q2answeredcorrect:player.GetVar("q2answeredcorrect"),q3attempts:player.GetVar("q3attempts"),q3answeredcorrect:player.GetVar("q3answeredcorrect"),q4attempts:player.GetVar("q4attempts"),q4answeredcorrect:player.GetVar("q4answeredcorrect")
}


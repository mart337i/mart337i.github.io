const welcomeMessage = "Welcome to my site fellow humans and bots.\nType help to view a list of available commands.\n";

function TextColor(message,color,background ) {
  return `[[g;${color};${background}]` + message + "]";
}

async function getReadMe(Repo){ //use for getting github readme's [WIP]

    const url = `https://raw.githubusercontent.com/mart337i/${Repo}/main/README.md`;
    const resp =  await fetch(url);
    const resualt = await resp.text();

    return resualt;

}

const commands = {
      help: function () {
          for (const [key] of Object.entries(commands)) {
            for (const [key2, value2] of Object.entries(commandDescription)){
                if (key === key2){
                    this.echo(`${TextColor(key, "lime") + " \n     -" + value2} \n`)
                }
            }
          }
      },
    
      about: async function () {

          var resualt = await getReadMe("mart337i");

          document.getElementById("terminalOutput").innerHTML = "";

         var temp =  document.getElementById("about").content;
         var tempCopy = document.importNode(temp,true);

         tempCopy.querySelector(".InnerHtmlAbout").innerHTML = resualt;

         document.getElementById("terminalOutput").appendChild(tempCopy)

      },
    
      projects: async function () {
        const url ="https://api.github.com/users/mart337i/repos";
        const resp =  await fetch(url);
        const resualt = await resp.json();

        document.getElementById("terminalOutput").innerHTML = "";


          resualt.forEach(element => {
              var tempstring = element.name.split("-")
              var type = tempstring[1]
              var name = tempstring[2]


              var temp =  document.getElementById("Projects").content;
              var tempCopy = document.importNode(temp,true);

              switch(type) {
                  case "API":
                      tempCopy.querySelector(".TypeOfProject").src = "img/API.png"
                      break;
                  case "Video":
                      tempCopy.querySelector(".TypeOfProject").src = "img/Record.svg"
                      break;
                  case "GUI":
                      tempCopy.querySelector(".TypeOfProject").src = "img/design.svg"
                      break;
                  case "Report":
                      tempCopy.querySelector(".TypeOfProject").src = "img/Report.svg"
                      break;
                  case "NN":
                      tempCopy.querySelector(".TypeOfProject").src = "img/NN.svg"
                      break;
                  case "Bot":
                      tempCopy.querySelector(".TypeOfProject").src = "img/Robot.svg"
                      break;
                  case "Math":
                      tempCopy.querySelector(".TypeOfProject").src = "img/Calulator.svg"
                      break;
                  case "Practise":
                      tempCopy.querySelector(".TypeOfProject").src = "img/Learn.svg"
                      break;


                  default:
                  tempCopy.querySelector(".TypeOfProject").src = "img/Default.svg"
              }

              if (element.name == "mart337i.github.io"){
                  tempCopy.querySelector(".TypeOfProject").src = "img/Terminal.svg"
                  tempCopy.querySelector(".ProjectName").textContent = "This Website: \r\n" + element.name;

              }else{
                  tempCopy.querySelector(".ProjectName").textContent = name;
              }

              tempCopy.querySelector(".Link").href = element.html_url;
              document.getElementById("terminalOutput").appendChild(tempCopy);
        });
      },

      contact: function () {

          document.getElementById("terminalOutput").innerHTML = "";

          var temp =  document.getElementById("Contact").content;
          var tempCopy = document.importNode(temp,true);

          document.getElementById("terminalOutput").appendChild(tempCopy)
      },
    
      credits: function () {

      },
      cls: function(){
        window.location.reload();
      } 
    }


const commandDescription = {

  help: `help: This command is used to show all commands.`,
  about:`A bit about me :) `,
  projects:"All my projects",
  contact:"WIP",
  credits:"WIP",
  cls:"Reload document"
}

function fnBrowserDetect(){
                 
  let userAgent = navigator.userAgent;
  let browserName;
  
  if(userAgent.match(/chrome|chromium|crios/i)){
      browserName = "chrome";
    }else if(userAgent.match(/firefox|fxios/i)){
      browserName = "firefox";
    }  else if(userAgent.match(/safari/i)){
      browserName = "safari";
    }else if(userAgent.match(/opr\//i)){
      browserName = "opera";
    } else if(userAgent.match(/edg/i)){
      browserName = "edge";
    }else{
      browserName="unknown";
    }
  
   return browserName;       
}

  $("#TerminalInput").terminal(commands, {
      greetings: false,
      prompt: `Root@(${fnBrowserDetect() + "-UserAgent"})> `,

    onInit: function () {
        this.echo(welcomeMessage);
    },

});


//doc - fStrings
//Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, 
//for string interpolation with embedded expressions, 
//and for special constructs called tagged templates.







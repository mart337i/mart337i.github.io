const welcomeMessage = `Welcome to my site fellow humans and bots.\nType "help" to view a list of available commands.\n`;

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
        const url = "https://api.github.com/users/mart337i/repos";
        const response = await fetch(url);
        const result = await response.json();

        clearTerminalOutput();

        result.forEach(element => {
            if (!element.name){
              continue;
            }

            const [_, type, name] = element.name.split("-");

            const projectTemplate = document.getElementById("Projects").content;
            const projectNode = document.importNode(projectTemplate, true);

            const imageMap = {
                "API": "img/API.png",
                "Video": "img/Record.svg",
                "GUI": "img/design.svg",
                "Report": "img/Report.svg",
                "NN": "img/NN.svg",
                "Bot": "img/Robot.svg",
                "Math": "img/Calulator.svg",
                "Practise": "img/Learn.svg"
            };

            const imageSrc = imageMap[type] || "img/Default.svg";
            projectNode.querySelector(".TypeOfProject").src = imageSrc;

            if (element.name === "mart337i.github.io") {
                projectNode.querySelector(".TypeOfProject").src = "img/Terminal.svg";
                projectNode.querySelector(".ProjectName").textContent = "This Website: \r\n" + element.name;
            } else {
                projectNode.querySelector(".ProjectName").textContent = name;
            }

            projectNode.querySelector(".Link").href = element.html_url;
            document.getElementById("terminalOutput").appendChild(projectNode);
        });
      },

      contact: function () {

          document.getElementById("terminalOutput").innerHTML = "";

          var temp =  document.getElementById("Contact").content;
          var tempCopy = document.importNode(temp,true);

          document.getElementById("terminalOutput").appendChild(tempCopy)
      },
    
      credits: function () {
          document.getElementById("terminalOutput").innerHTML = "";

          var temp =  document.getElementById("Credits").content;
          var tempCopy = document.importNode(temp,true);

          document.getElementById("terminalOutput").appendChild(tempCopy)
      },
      clear : function(){
        window.location.reload();
      } 
    }
  


const commandDescription = {

  help: `help: This command is used to show all commands.`,
  about:`A bit about me :) `,
  projects:"All my projects",
  clear:"Reload document"
}

function clearTerminalOutput() {
  document.getElementById("terminalOutput").innerHTML = "";
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


//TODO
// Add Email system for "contact form"
//




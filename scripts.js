const welcomeMessage = "Welcome to my site fellow humans and bots.\nType help to view a list of available commands.\n";

function TextColor(message,color,background ) {
  return `[[g;${color};${background}]` + message + "]";
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
    
      repo: function () {
        this.echo(UserInputCommand.repo);
      },
    
      about: async function () {

          const url ="https://raw.githubusercontent.com/mart337i/mart337i/main/README.md";
          const resp =  await fetch(url);
          const resualt = await resp.text();

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
          //this.echo(`${TextColor(element.name, "lime") + " \n     -" + element.html_url} \n`); // prints left side

          var temp =  document.getElementById("Projects").content;
          var tempCopy = document.importNode(temp,true);

          tempCopy.querySelector(".ProjectName").textContent = element.name;
          tempCopy.querySelector(".Link").textContent = element.html_url;


          document.getElementById("terminalOutput").appendChild(tempCopy);


        });
      },
    
      skills: function () {
        this.echo(UserInputCommand.skills);
      },
    
      contact: function () {
        this.echo(UserInputCommand.contact);
      },
    
      credits: function () {
        this.echo(UserInputCommand.credits);
      },
      cls: function(){
        window.location.reload();
      } 
    }

const UserInputCommand = {
  repo: "https://github.com/mart337i",
  skills:"WIP",
  contact:"WIP",
  credits:"WIP",
}

const commandDescription = {

  help: "Lists all commands",
  repo: "Serve's github link",
  about:`A bit about me :) `,
  projects:"All my projects",
  skills:"WIP",
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
      browserName="";
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







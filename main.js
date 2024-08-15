// Example  ====>   index.html?videoId=1x2_04keuXj0Mt2aPDB2zjJNuMbtKBr4l
// PERSPECTIVE  ====>   index.html?networkName=perspective&videoId=1x2_04keuXj0Mt2aPDB2zjJNuMbtKBr4l
// LOVE SOCIAL  ====>   index.html?networkName=lovesocial&videoId=1x2_04keuXj0Mt2aPDB2zjJNuMbtKBr4l
// SOCIAL NETWORK  ====>   index.html?networkName=socialnetwork&videoId=1x2_04keuXj0Mt2aPDB2zjJNuMbtKBr4l

let tasksName; 
const tasksName_perspective = [
    "Se cadastre na Perspective",
    "Altere sua foto de perfil",
    "Adicione um amigo",
    "Volte para a página principal",
    "Publique a mensagem abaixo em seu mural, completando com a descrição de sua atividade favorita",
    "Adicione uma foto ao seu álbum de fotos na Perspective",
    "Visualize as informações do usuário 'Doguito'",
    "Publique uma mensagem no mural de Doguito",
    "Envie a seguinte mensagem para Doguito",
    "Curta uma publicação de um usuário de Manaus",
    "Cheque suas mensagens",
    "Adicione Patrick Jane como amigo e veja o perfil e o mural dele.",
    "Altere suas informações do seu perfil",
    "Adicione Doguito como seu amigo.",
    "Exclua todos os seus amigos",
    "Altere a publicação feita em seu mural na tarefa 5",
    "Faça logout da Perspective"
];
const tasksName_loveSocial = [
    "Se cadastre na Love Social",
    "Altere sua foto de perfil",
    "Siga 2 usuários",
    "Volte para a página principal",
    "Publique a mensagem abaixo em seu mural, completando com a descrição de sua atividade favorita",
    "Adicione uma foto ao seu mural",
    "Visualize as informações do usuário 'Duke'",
    "Comente um post de algum usuário",
    "Altere suas informações do seu perfil",
    "Veja os perfis que você segue",
    "Faça logout da Love Social"
];
const tasksName_socialNetwork = [
    "Se cadastre na Social Network e faça login",
    "Altere sua foto de perfil",
    "Siga um amigo",
    "Volte para a página principal",
    "Publique em seu mural uma imagem com a mensagem abaixo, completando com a descrição de sua atividade favorita",
    "Poste outra foto em seu perfil",
    "Visualize o perfil do usuário 'Dogui'",
    "Comente uma publicação de Dogui",
    "Envie a seguinte mensagem para Dogui",
    "Curta uma publicação de um usuário brasileiro",
    "Cheque suas mensagens",
    "Siga mais 2 amigos, um deles deve ser o Patrick Jane",
    "Altere suas informações do seu perfil",
    "Deixe de seguir um dos perfis que você segue neste momento",
    "Altere a publicação feita em seu perfil na tarefa 5",
    "Faça logout da Social-Network"
];
const tasksName_example = [
    "Sign up on the Social Network",
    "Change your profile picture",
    "Follow 2 users",
    "Return to the main page",
    "Post a message in your profile",
    "Update your profile information",
    "See the profiles you follow",
    "Log out of Love Social"
];


const issues = [
  { 
    label: 'Tempo inicial', 
    type: 'time', 
    width: '150px',
    description: "O tempo de inicio da tarefa, de acordo com o tempo do vídeo."
  },
  { 
    label: 'Tarefa trabalhosa', 
    type: 'checkbox', 
    width: '150px',
    description: "Ocorre quando a execução da tarefa demanda a execução de um grande número de ações, e muito tempo, diminuindo a produtividade e engajamento."
  },
  { 
    label: 'Tarefa cíclica', 
    type: 'checkbox', 
    width: '150px',
    description: "Ocorre quando a tarefa exige execução de muitas ações repetitivas, e é um indicador de que a tarefa pode ser chata e cansativa."
  },
  { 
    label: 'Muitas camadas', 
    type: 'checkbox', 
    width: '150px',
    description: "Ocorre quando para a execução de uma tarefa, os usuários necessitam percorrer muitas páginas. Esta demanda pode afetar o desempenho do usuário."
  },
  { 
    label: 'Elemento não descritivo', 
    type: 'time', 
    width: '150px',
    description: "Ocorre quando muitos usuários tentam obter uma dica sobre um determinado elemento da página. Pode indicar que o elemento não é auto-descritivo o suficiente."
  },
  { 
    label: 'Feedback (de ação) ausente', 
    type: 'time', 
    width: '150px',
    description: "Ocorre quando uma ação é constantemente repetida. Pode indicar que o sistema não está oferecendo feedback para a ação."
  },
  { 
    label: 'Feedback (de tarefa) ausente', 
    type: 'checkbox', 
    width: '150px',
    description: "Ocorre quando uma tarefa é repetida para as mesmas entradas. Pode indicar que o sistema não está oferecendo feedback para a tarefa."
  },
  { 
    label: 'Alta dist. de interação', 
    type: 'checkbox', 
    width: '150px',
    description: "Ocorre quando conteúdos relacionados são dispostos muito longe um do outro, e cuja exibição ou interação é crucial para a execução de algumas tarefas."
  },
  { 
    label: 'Ação desnecessária', 
    type: 'time', 
    width: '150px',
    description: "Ocorre quando uma página contém apenas uma ação. Pode indicar que o passo poderia ser retirado do fluxograma da tarefa."
  },
  { 
    label: 'Repetição em textos', 
    type: 'checkbox', 
    width: '150px',
    description: "Ocorre quando em uma tarefa o mesmo texto é inserido várias vezes. Pode indicar que a tarefas pede informações duplicadas."
  },
  { 
    label: 'Ação enganosa', 
    type: 'time', 
    width: '150px',
    description: "Ocorre quando o usuário clica em um elemento que muda de página, mas retorna rapidamente para a página anterior. Pode indicar que o elemento é enganoso e causa dúvida no usuário."
  },
  { 
    label: 'Validação tardia', 
    type: 'checkbox', 
    width: '150px',
    description: "Ocorre quando os erros de input só são verificados após a submissão da tarefa. Pode indicar validação tardia dos campos, o que pode desmotivar o usuário."
  },
  { 
    label: 'Tarefa concluída', 
    type: 'checkbox', 
    width: '170px',
    description: "Marque esta opção somente se o usuário conseguiu concluir a tarefa com sucesso."
  }
];


const issues_eng = [
  { 
    label: 'Initial time', 
    type: 'time', 
    width: '150px',
    description: "The task's start time, according to the video's time."
  },
  { 
    label: 'Laborious Task', 
    type: 'checkbox', 
    width: '150px',
    description: "Occurs when completing a task requires a large number of actions and takes an excessive amount of time, leading to decreased productivity and user engagement."
  },
  { 
    label: 'Cyclic Task', 
    type: 'checkbox', 
    width: '150px',
    description: "Occurs when a task involves performing many repetitive actions, making the task tedious and potentially tiring for the user."
  },
  { 
    label: 'Too Many Layers', 
    type: 'checkbox', 
    width: '150px',
    description: "Occurs when users must navigate through numerous pages to complete a task. This can negatively affect user performance by increasing complexity and time."
  },
  { 
    label: 'Undescriptive Element', 
    type: 'time', 
    width: '150px',
    description: "Occurs when users frequently try to hint at a particular element on the page, suggesting that the element is not adequately self-explanatory."
  },
  { 
    label: 'Missing Action Feedback', 
    type: 'time', 
    width: '150px',
    description: " Occurs when an action is repeatedly performed. It may indicate that the system is not providing feedback for the action."
  },
  { 
    label: 'Missing Task Feedback', 
    type: 'checkbox', 
    width: '150px',
    description: "Occurs when a task is repeated for the same inputs, suggesting that the system is not providing adequate feedback to the user."
  },
  { 
    label: 'High Interaction Distance', 
    type: 'checkbox', 
    width: '150px',
    description: "Occurs when related content is placed too far apart and whose display or interaction is crucial for performing tasks."
  },
  { 
    label: 'Unnecessary Action', 
    type: 'time', 
    width: '150px',
    description: "Occurs when a page contains only one action, which may indicate that the step could be streamlined or eliminated from the task flow to improve efficiency."
  },
  { 
    label: 'Repetition in Text Fields', 
    type: 'checkbox', 
    width: '150px',
    description: "Occurs when the same text is entered multiple times in a task, indicating that the task is asking for duplicate information, which can be redundant and frustrating."
  },
  { 
    label: 'Misleading Action', 
    type: 'time', 
    width: '150px',
    description: "Occurs when the user clicks on an element that switches pages but quickly returns to the previous page. It may indicate that the element is misleading and causes doubt in the user."
  },
  { 
    label: 'Late Validation', 
    type: 'checkbox', 
    width: '150px',
    description: "Occurs when errors in input are only detected after the task is submitted, indicating late validation. This can demotivate users."
  },
  { 
    label: 'Task completed', 
    type: 'checkbox', 
    width: '170px',
    description: "Check this option only if the user was able to complete the task."
  }
];

var videoOpened = true;

function toggleVideo(){
    if(videoOpened){
        document.getElementById('videoContainer').style.display = 'none';
        videoOpened = false;
    }
    else{
        document.getElementById('videoContainer').style.display = 'block';
        videoOpened = true;
    }
}

function saveDataOnTheFly() {
    const data = {
        username: document.getElementById('username').value,
        date: document.getElementById('date').value,
        code: document.getElementById('code').value,
        tasks: []
    };

    for (let i = 0; i < tasksName.length; i++) {
        const taskData = {
            issues: {},
        };

        issues.forEach(issue => {
            if (issue.type === 'checkbox') {
                taskData.issues[issue.label] = document.querySelector(`input[data-task="${i+1}"][data-issue="${issue.label}"]`).checked ? 'X' : '';
            } else if (issue.type === 'time') {
                let timeValues = [];
                let timeInputs = document.querySelectorAll(`input[data-task="${i+1}"][data-issue="${issue.label}"]`);
                timeInputs.forEach(input => {
                    validateTimeInput(input);
                    timeValues.push(input.value);
                });
                taskData.issues[issue.label] = timeValues;
            }

        });

        data.tasks.push(taskData);
    }

    localStorage.setItem('annotationData', JSON.stringify(data));

}

function populateData() {
    const data = JSON.parse(localStorage.getItem('annotationData'));
    if (!data) return;

    document.getElementById('username').value = data.username;
    document.getElementById('date').value = data.date;
    document.getElementById('code').value = data.code;

    data.tasks.forEach((task, index) => {
        issues.forEach(issue => {
            
            if (issue.type === 'checkbox') {
                const input = document.querySelector(`input[data-task="${index+1}"][data-issue="${issue.label}"]`);
                input.checked = task.issues[issue.label] === 'X';
            } else if (issue.type === 'time') {

                // Get the array of saved times
                let timeValues = task.issues[issue.label];

                // Create additional time inputs
                for (var i = 1; i < timeValues.length; i++) {
                    document.querySelector(`button[data-task="${index+1}"][data-issue="${issue.label}"]`).click();
                }

                // Iterate over input elements and populate values from the array
                const inputElems = document.querySelectorAll(`input[data-task="${index+1}"][data-issue="${issue.label}"]`);
                inputElems.forEach((input, i) => {
                    input.value = timeValues[i] || '';  // The '|| ""' is to handle cases where there might be more inputs than saved values
                    validateTimeInput(input);
                });
            }
        });
    });
}

function downloadData() {
    // Retrieving values from the fields
    let username = document.getElementById('username').value;
    let date = document.getElementById('date').value;
    let code = document.getElementById('code').value;

    // Check if any of them are empty
    if (!username || !date || !code) {
        alert('Preencha todos os campos iniciais: Anotador, data, e código do usuário.');
        return false; 
    }

    // Check if the time inputs are unformatted and if the initial times are empty
    if (!validateAllInputs()){
        alert('Corriga os campos em vermelho.');
        return false;
    }

    const data = localStorage.getItem('annotationData');
    if (!data) {
        alert('No data to download');
        return;
    }
    const blob = new Blob([data], { type: 'text/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'annotationData.json';
    a.click();
}


function isValidTimeFormat(timeString) {
    const isFormatOk = /^(([0-2][0-9]):)?([0-5][0-9]):([0-5][0-9])$/.test(timeString);

    if(isFormatOk){
        if (timeString.length > 5) {
            const parts = timeString.split(":");
            const hour = parseInt(parts[0], 10);
            const minutes = parseInt(parts[1], 10);
            const seconds = parseInt(parts[2], 10);
            return (hour >= 0 && hour < 24) && (minutes >= 0 && minutes < 60) && (seconds >= 0 && seconds < 60)
            
        }
        else if (timeString.length > 2) {
            const parts = timeString.split(":");
            const minutes = parseInt(parts[0], 10);
            const seconds = parseInt(parts[1], 10);
            return (minutes >= 0 && minutes < 60) && (seconds >= 0 && seconds < 60);
        }
    }
    return false;
}

function validateTimeInput(input, issueLabel = ""){
    if(issueLabel === "Tempo inicial" && input.value.length == 0){
        input.style.borderColor = '#dc3545';
        return false;
    }
    if(!isValidTimeFormat(input.value) && input.value.length > 0){
        input.style.borderColor = '#dc3545';
        return false;
    }
    else{
        input.style.borderColor = '#ced4da';
        return true;
    }
}

function validateAllInputs(){
    let isValid = true;
    for (let i = 0; i < tasksName.length; i++) {
        issues.forEach(issue => {
            if(issue.type === 'time') {
                let timeInputs = document.querySelectorAll(`input[data-task="${i+1}"][data-issue="${issue.label}"]`);
                timeInputs.forEach(input => {
                    if(!validateTimeInput(input, issue.label)){
                        isValid = false;
                    }
                });
            }
        });
    }
    return isValid;
}


function clearStorage() {
    const confirmed = confirm("Are you sure you want to clear the local storage? This action cannot be undone.");
    if (confirmed && window.localStorage) {
        localStorage.clear();
        window.location.reload();
    }
}

function populateTodaysDate() {
    // 1. Get the current date.
    const today = new Date();

    // 2. Extract the day, month, and year.
    const day = String(today.getDate()).padStart(2, '0'); // Ensure it's two digits. For example, '01' instead of '1'.
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed in JavaScript.
    const year = today.getFullYear();

    // 3. Format these values.
    const formattedDate = `${year}-${month}-${day}`;

    // 4. Set this formatted value to the date input.
    document.getElementById('date').value = formattedDate;
}


function initialize(tasksName){
    tasksName.forEach((taskName, index) => {
        const taskRow = document.createElement('div');
        taskRow.className = 'row my-2';

        const taskCard = document.createElement('div');
        taskCard.className = 'card col';

        const taskTitle = document.createElement('div');
        taskTitle.className = 'task-title';
        taskTitle.textContent = `Tarefa ${index + 1} - ${taskName}`;
        taskCard.appendChild(taskTitle);

        const issuesTable = document.createElement('table');
        issuesTable.className = 'table';

        // Create table header with issue names
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        issues.forEach(issue => {
            const th = document.createElement('th');
            th.className = 'text-center';
            th.scope = 'col';
            th.textContent = issue.label;   
            if(issue.label == "Tempo inicial"){
                th.textContent += '*';
            }
             
            th.setAttribute('data-toggle', 'tooltip');
            th.setAttribute('data-placement', 'top');
            th.setAttribute('title', issue.description);

            th.style.maxWidth = issue.width;
            th.style.minWidth = issue.width; 
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        issuesTable.appendChild(thead);

        // Create table body with inputs
        const tbody = document.createElement('tbody');
        const inputRow = document.createElement('tr');
        inputRow.className = 'text-center';  // Add this line for alignment

        issues.forEach((issue, idx) => {
            const td = document.createElement('td');
            td.className = 'text-center';  // Add this line for alignment
            if (issue.type === 'checkbox') {
                const input = document.createElement('input');
                input.type = 'checkbox';
                input.setAttribute('data-task', index + 1);
                input.setAttribute('data-issue', issue.label);

                input.addEventListener('change', saveDataOnTheFly);
                td.appendChild(input);
            } 
            else {
                const timeInputContainer = document.createElement('div');
                timeInputContainer.className = 'time-input-container d-flex flex-column align-items-center';

                const input = document.createElement('input');
                input.type = 'text';
                input.placeholder = 'mm:ss';
                input.className = 'form-control time-input';
                input.setAttribute('data-task', index + 1);
                input.setAttribute('data-issue', issue.label);
                input.addEventListener("input", function () {
                    const value = this.value.replace(/[^0-9]/g, "");
                    if (value.length > 4) {
                        this.value = value.slice(0, 2) + ":" + value.slice(2, 4) + ":" + value.slice(4);
                    }
                    else if (value.length > 2) {
                        this.value = value.slice(0, 2) + ":" + value.slice(2);
                    }
                });
                input.addEventListener('change', saveDataOnTheFly);

                timeInputContainer.appendChild(input);

                // Button to add another timestamp field
                if ([3, 4, 7, 9].includes(idx - 1)) {  // The index of issues 4, 5, 8, 10 (0-based indexing)
                    const addTimeButton = document.createElement('button');
                    addTimeButton.className = "btn btn-sm btn-secondary"
                    addTimeButton.textContent = "+";
                    addTimeButton.setAttribute('data-task', index + 1);
                    addTimeButton.setAttribute('data-issue', issue.label);
                    addTimeButton.onclick = function() {
                        const newTimeInput = document.createElement('input');
                        newTimeInput.type = 'text';
                        newTimeInput.placeholder = 'mm:ss';
                        newTimeInput.className = 'form-control time-input';
                        newTimeInput.setAttribute('data-task', index + 1);
                        newTimeInput.setAttribute('data-issue', issue.label);
                        newTimeInput.addEventListener('change', saveDataOnTheFly);
                        newTimeInput.addEventListener("input", function () {
                            const value = this.value.replace(/[^0-9]/g, "");
                            if (value.length > 4) {
                                this.value = value.slice(0, 2) + ":" + value.slice(2, 4) + ":" + value.slice(4);
                            }
                            else if (value.length > 2) {
                                this.value = value.slice(0, 2) + ":" + value.slice(2);
                            }
                        });

                        timeInputContainer.appendChild(newTimeInput);
                    }
                    timeInputContainer.appendChild(addTimeButton);
                }

                td.appendChild(timeInputContainer);
            }

            inputRow.appendChild(td);
        });

        tbody.appendChild(inputRow);
        issuesTable.appendChild(tbody);

        taskCard.appendChild(issuesTable);
        taskRow.appendChild(taskCard);
        tasksContainer.appendChild(taskRow);
    });
}


document.addEventListener("DOMContentLoaded", function() {
    // Parse the URL to get video ID
    const urlParams = new URLSearchParams(window.location.search);
    
    const networkName = urlParams.get('networkName');
    if (networkName) {
        if (networkName === "perspective") { // Use strict equality for comparison
            tasksName = tasksName_perspective;
        } else if (networkName === "lovesocial") { // Use strict equality for comparison
            tasksName = tasksName_loveSocial;
        } else if (networkName === "socialnetwork") { // Use strict equality for comparison
            tasksName = tasksName_socialNetwork;
        } else {
            tasksName = tasksName_example;
        }
    } else {
        tasksName = tasksName_example;
    }
    initialize(tasksName);

    const issueFlag = urlParams.get('issueFlag'); // New parameter for selecting issues
    // Select the appropriate issues array based on the URL parameter
    if (issueFlag != "PT") {
        issues = issues_eng;  // Use the default issues array
    }

    
    const videoId = urlParams.get('videoId');
    const videoContainer = document.getElementById('videoContainer');

    // This initializes all tooltips on the page
    $('[data-toggle="tooltip"]').tooltip();

    populateTodaysDate();

    // Populate the data from localStorage
    populateData();

    
    if (videoId) {
        // Create the iframe
        const iframe = document.createElement('iframe');
        iframe.src = `https://drive.google.com/file/d/${videoId}/preview`;
        // iframe.width = '1024';
        // iframe.height = '600';
        iframe.allowFullscreen = true;
        iframe.frameborder = '0';
        
        // Append the iframe to our video container
        videoContainer.appendChild(iframe);
    }
    else{
        videoContainer.innerHTML = "<p class='text-danger'>Video id was not specified.</p>";
        videoContainer.style.position = 'static';
        videoContainer.style.paddingTop = '0px';
    }
});

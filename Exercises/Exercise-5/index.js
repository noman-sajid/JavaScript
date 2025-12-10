const startButton = document.getElementById('startButton');
const terminalOutput = document.getElementById('terminalOutput');

const hackActions = [
    { text: "Initializing secure connection...", delay: 500, typeDelay: 30 },
    { text: "Target IP: 104.26.15.192 (CDN Cache)", delay: 800, typeDelay: 50 },
    { text: "Port 22, SSH detected. Starting brute force attack...", delay: 1000, typeDelay: 40 },
    { text: ".......", delay: 1500, typeDelay: 200 },
    { text: "[SUCCESS] Password found: 'DragonFire7'", delay: 50, typeDelay: 0 },
    { text: "Establishing secure tunnel (TLS 1.3)...", delay: 600, typeDelay: 30 },
    { text: "Uploading rootkit.exe...", delay: 2000, typeDelay: 10 },
    { text: "[ERROR] File system locked. Retrying with Sudo bypass...", delay: 1200, typeDelay: 40 },
    { text: "[100%] Access to core kernel granted.", delay: 50, typeDelay: 0 },
    { text: "--- HACKING COMPLETE ---", delay: 500, typeDelay: 80 },
    { text: "Session terminated. Files cleaned. Exit.", delay: 1000, typeDelay: 30 }
];

startButton.addEventListener('click', startHack);

function startHack() {
    startButton.disabled = true;
    startButton.textContent = "Running...";
    terminalOutput.innerHTML = '';
    runSequence(0);
}

async function runSequence(index) {
    if (index >= hackActions.length) {
        startButton.textContent = "Start Over";
        startButton.disabled = false;
        return;
    }

    const action = hackActions[index];

    await new Promise(resolve => setTimeout(resolve, action.delay));

    const newLine = document.createElement('div');
    newLine.classList.add('line');
    terminalOutput.appendChild(newLine);

    let charIndex = 0;

    function typeChar() {
        if (charIndex < action.text.length) {
            newLine.textContent += action.text.charAt(charIndex);
            charIndex++;
            setTimeout(typeChar, action.typeDelay);
        } else {
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
            runSequence(index + 1);
        }
    }

    if (action.typeDelay === 0) {
        newLine.textContent = action.text;
        runSequence(index + 1);
    } else {
        typeChar();
    }
}

const headerList = ['序號', '班級', '學號', '姓名', 'GitHub', '作業一', '作業二', '作業三', '作業四', '作業五', '作業六', '作業七', '作業八',	'作業九',	'作業十'];
const classListOptions = ['資工系', '資工所', '電資AI', '電資資安', '創新AI'];
const idFirstPartOptions = ["111", "112"];
const idSecondPartOptions = ["590", "598", "C52", "C53", "C71"];
const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function generateRandomClass() {
  return classListOptions[Math.floor(Math.random() * classListOptions.length)];
}

function generateRandomId() {
  const firstPart = idFirstPartOptions[Math.floor(Math.random() * idFirstPartOptions.length)];
  const secondPart = idSecondPartOptions[Math.floor(Math.random() * idSecondPartOptions.length)];
  const thirdPart = (Math.floor(Math.random() * 999) + 1).toString().padStart(3, '0');
  
  return firstPart + secondPart + thirdPart;
}

function generateRandomGithubId() {
    let result = '';

    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

function generateRandomScoreList() {
  const scoreList = [];

  for (let i = 0; i < 10; i++) {
    scoreList.push(Math.floor(Math.random() * 10));
  }

  return scoreList;
}

function generateDummyCsvTable() {
  let divElement = document.getElementById("dummy-csv-table");
  let table = document.createElement("table");

  let header = table.createTHead();
  let headerRow = header.insertRow();

  for (let i = 0; i < headerList.length; i++) {
    headerRow.insertCell().innerHTML = headerList[i];
  }

  for (let index = 1; index <= 120; index++) {
    let row = table.insertRow();
    let className = generateRandomClass();
    let studentId = generateRandomId();
    let studentName = "我是誰";
    let githubId = generateRandomGithubId();
    let scoreList = generateRandomScoreList();

    let rowItems = [index, className, studentId, studentName, githubId];

    for (let j = 0; j < rowItems.length; j++) {
      var cell = row.insertCell();
      cell.innerHTML = rowItems[j];
    }
    for (let j = 0; j < scoreList.length; j++) {
      var cell = row.insertCell();
      cell.innerHTML = scoreList[j];
    }
  } 

  divElement.appendChild(table);
}

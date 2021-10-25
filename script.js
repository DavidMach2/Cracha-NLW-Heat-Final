// DOM = Document object model
// Documento que o navegador cria para mapear todos os elementos do HTML

//objeto e  constante global
const socialMediaLinks = {
  github: "DavidMach2",
  youtube: "jakelinygracielly",
  facebook: "David.machado777",
  instagram: "davidmachado314",
  linkedin: "in/david-machado-it"
}

//troca o nome de usuario do id userName
function replaceSocialMediaLinks() {
  //document.getElementById("userName").textContent = 'Olivia'
  //modo simplificado:
  //userName.textContent = "Olivia"

  //children vai pegar os filhos de ul, os li's
  for (let elementLi of socialLinksList.children) {
    const social = elementLi.getAttribute('class')
    // `` = template string para colocar uma variavel no meio de uma string
    elementLi.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
    //alert(elementLi.children[0].href)
  }
}

replaceSocialMediaLinks()

//função para coletar as informações no Github e trazer para o HTML para
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`;
  // "fetch": solicita e coleta a resposta de uma api
  // neste caso deverá coletar um json da api do github
  // "promisse" = "then()" Se der certo (fetch), então(then) 
  // "=>" = arrow function = deixa de ser necessário o nome da função, passa direto
  // o argumento
  fetch(url)
  .then(response => response.json())
  .then(data => {
    // "userName" = id do HTML
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login
  }) // var data armazeza a resp da api direto em json
  // obs: "response" é só o nome da variavel, onde será guardado o retorno do fetch
  // utilizando função: then(nomeDaFuncao(response)) contraindo a função fica assim:
  // then(response => )

  // response.json() = vai transformar o retorno em um arquivo json
}

getGitHubProfileInfos();


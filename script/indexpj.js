//Declaramos una variable con la información del proyecto
const simplify = {
        title: "Simplify",
        body: "Simplify is lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat faucibus sem, id vulputate justo ornare non. Nullam et vehicula sem. Pellentesque bibendum massa non nisl posuere cursus. Aliquam ac eros pretium neque consequat facilisis. Ut sit amet justo varius ex ultrices fringilla. Sed vel turpis fringilla ante gravida vestibulum. Etiam a sollicitudin leo. Nunc metus lectus, lacinia ut arcu quis, pretium congue lacus.<br><br>Aliquam blandit varius metus, in mattis orci convallis sit amet. Fusce et sem ac velit placerat ultrices in id dolor. Sed eget auctor metus. Sed suscipit fringilla lectus, a maximus justo bibendum a. Donec et pellentesque nisl, vitae tempus lorem. Sed efficitur cursus rhoncus. Duis placerat nisi quis mi tincidunt, sit amet tincidunt urna convallis. Nam et sagittis felis. Pellentesque placerat orci sodales nisi convallis ultrices. Nunc posuere neque eu mi imperdiet ullamcorper. Praesent tempor convallis rutrum. Vestibulum dignissim pellentesque eros in placerat. Etiam at nisi quis quam sollicitudin vehicula sit amet vel mi.",
        userId: "UI Design & App Development",
}
//función fetch
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    //pasamos los dato a formato Json
    body: JSON.stringify(simplify), 
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
})
    //convertimos la respuesta para poder interpretarla
    .then((res) => res.json())
    //mostramos la información por pantalla en los sitios correspondientes
    .then((data) => {
      document.querySelector("#projectTitle").innerHTML += data.title;
      document.querySelector("#projectbody").innerHTML += data.body;
      document.querySelector("#projectSubtitle").innerHTML += data.userId;
    })
    .catch((error) => console.log(error));
  
  
  
  
  
  
  
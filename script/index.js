const getExternalAPiInfo = () => {
    // Part 1 - Llamamos al recurso
    fetch("https://jsonplaceholder.typicode.com/posts/")
        
        .then((response) => response.json())
        .then((data) => {
            document.querySelector("#simplify").innerHTML += data[0].title.slice(1,5);
            document.querySelector("#simplifySub").innerHTML += data[0].body.slice(0,20);

            document.querySelector("#dashcoin").innerHTML += data[1].title.slice(1,5);
            document.querySelector("#dashcoinSub").innerHTML += data[1].body.slice(0,20);

            document.querySelector("#vectorify").innerHTML += data[2].title.slice(1,5);
            document.querySelector("#vectorifySub").innerHTML += data[2].body.slice(0,20);
          })
          .catch((error) => console.log(error));;
}

getExternalAPiInfo();


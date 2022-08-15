async function fetchMoviesJSON() {
  const response = await fetch('https://api.ipify.org?format=json');
  const ips = await response.json();  return ip;
}

fetchMoviesJSON().then(
    (ips)=>{
        console.log(ips);
    }
);

//////////////////////////////////////////////////////////////////////////////////////////////////////////

fetch("https://ipinfo.io/json").then((response) => response.json()).then(
(jsonResponse) =>{
    console.log(jsonResponse.city, jsonResponse.country)    
  }
)

/////////////////////////////////////////////////////////////////////////////////////////////////////////
async function fetchMoviesJSON() {
  const response = await fetch('https://api.ipify.org?format=json');
  const ips = await response.json();  return ip;
}

var ip__ = await fetchMoviesJSON().then(
    (ips)=>{
        return (ips.ip);
    });
console.log(ip__);



$.get("https://ipinfo.io", function(response) {
    console.log(response.city, response.country);
}, "jsonp");

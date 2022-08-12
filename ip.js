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

async function fetchMoviesJSON() {
  const response = await fetch('https://api.ipify.org?format=json');
  const ips = await response.json();  return ip;
}

var ip__ = await fetchMoviesJSON().then(
    (ips)=>{
        return (ips.ip);
    });
console.log(ip__);

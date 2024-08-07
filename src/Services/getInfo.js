async function getIp(){
    const response = await fetch('https://api.ipify.org?format=json');
    return (await response.json()).ip;
}

export async function getInfo(){
    const ip = await getIp();
    const response = await fetch(`http://ipwhois.app/json/${ip}`);
    return await response.json();
}
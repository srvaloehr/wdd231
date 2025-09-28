const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<p><strong> ${myInfo.get('first')} ${myInfo.get('last')} </strong>- ${myInfo.get('title')}</p>
<p><strong> Business name:</strong> ${myInfo.get('organization')}</p>
<p><strong> Your phone: </strong>${myInfo.get('phone')}</p>  
<p><strong> Your email: </strong>${myInfo.get('email')}</p> 
<p></p> 
<p>${myInfo.get('formTimestamp')}</p> 
` 
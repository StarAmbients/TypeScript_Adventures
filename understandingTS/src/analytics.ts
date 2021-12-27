let logged;

function sendAnalytics(data: string) { // see noImplicityAny, set it to false
    console.log(data);
    logged = true;
}

sendAnalytics('The data');

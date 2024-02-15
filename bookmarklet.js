javascript:(function() {
    const today = new Date();
    const formattedDate = today.toISOString().substring(0, 10);
    fetch(`https://footy-fixtures-backend.onrender.com/fixtures/${formattedDate}`)
        .then(response => response.json())
        .then(data => {
         const fixtures = data.fixtures;
         if (fixtures) {
            alert (`Today's fixtures are:\n${fixtures.join("\n")}`);
         } else {
            alert ('No fixtures found for today!')
         }
        })
    })();
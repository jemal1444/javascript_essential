document.addEventListener('DOMContentLoaded', () => {
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const recommendationsDiv = document.getElementById('recommendations');
            data.recommendations.forEach(recommendation => {
                const recommendationDiv = document.createElement('div');
                recommendationDiv.className = 'recommendation';
                
                const title = document.createElement('h2');
                title.textContent = recommendation.destination;
                
                const description = document.createElement('p');
                description.textContent = recommendation.description;
                
                const image = document.createElement('img');
                image.src = recommendation.image;
                image.alt = recommendation.destination;
                
                recommendationDiv.append

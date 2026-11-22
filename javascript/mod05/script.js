"use strict"

const form = document.querySelector('#search-form');
const results = document.querySelector('#results');

form.addEventListener('submit', async function(event) {
  event.preventDefault();

  // hae hakuarvo
const value = document.querySelector('#query').value;

results.innerHTML = '';


try {

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(value)}`
    );

    const tvShows = await response.json();

    console.log(tvShows);

    tvShows.forEach(tvShow => {
        
        const article = document.createElement('article');

        const name = document.createElement('h2');
        name.textContent = tvShow.show.name;

        const link = document.createElement('a');
        link.href = tvShow.show.url;
        link.target = '_blank';
        link.textContent = 'View details';

        const image = document.createElement('img');
        image.src = tvShow.show.image?.medium || '';
        image.alt = tvShow.show.name;

        const summary = document.createElement('div');
        summary.innerHTML = tvShow.show.summary || 'No summary available.';

        // Add elements to article
        article.appendChild(name);
        article.appendChild(link);

        if (tvShow.show.image?.medium) {
        article.appendChild(image);
        }

        article.appendChild(summary);

        // Add article to results
        results.appendChild(article);
        });

      } catch (error) {
        console.error('Error fetching TV shows:', error);
        results.textContent = 'Something went wrong. Please try again.';
      }
    });
import axios from "axios";
import { articles } from "../mocks/data";

const Card = (article) => {
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const image = document.createElement('img');
  const authorName = document.createElement('span');

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author')
  imgContainer.classList.add('img-container')

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(image);
  author.appendChild(authorName);

  console.log(article)
  headline.textContent = article.headline;
  image.src = article['authorPhoto'];
  authorName.textContent = article.authorName;
  
// console.log(article.javascript);
card.addEventListener("click" , () => {
  console.log(headline);
})

return card;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  axios.get('http://localhost:5001/api/articles')
  .then(res => {
    // console.log('data', res.data.articles); // put loop here
    Object.keys(res.data.articles).forEach(article => {
      console.log(res.data.articles[article]);
      for (let i = 0; i < res.data.articles[article].length; i++) {
        document.querySelector(selector).appendChild(Card(res.data.articles[article][i]));
      }
      // document.querySelector(selector).appendChild(Card(res.data.article))
    });
     // make this part of loop
  })
  .catch(err => {
    console.log(err);
  })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }

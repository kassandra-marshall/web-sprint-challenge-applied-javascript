const Header = (title, date, temp) => {
  const date = document.createElement('span');
  const title = document.createElement('h1');
  const temp = document.createElement('span');
  const header = document.createElement('div');

  date.classList.add('date');
  temp.classList.add('temp');
  header.classList.add('header');

  title.textContent = title;
  date.textContent = date;
  temp.textContent = temp;

  return header;
  
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {
  
  // header.appendChild(date);
  // header.appendChild(title);
  // header.appendChild(temp);
  // headerContainer.appendChild(header);
  
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }

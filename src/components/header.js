const Header = (title, date, temp) => {
  const pageDate = document.createElement('span');
  const pageTitle = document.createElement('h1');
  const pageTemp = document.createElement('span');
  const pageHeader = document.createElement('div');

  pageDate.classList.add('date');
  pageTemp.classList.add('temp');
  pageHeader.classList.add('header');

  pageTitle.textContent = title;
  pageDate.textContent = date;
  pageTemp.textContent = temp;

  return pageHeader;
  
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

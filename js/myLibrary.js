
const blogSection = document.getElementById('blog-container');

const blogArticle = () => {
  //get saved data from session storage
  arr = JSON.parse(sessionStorage.getItem('savedBlogs'));
  arr.forEach((item) => {
    let { id, title, image, description, date } = item;
    //create all essential elements
    const articleEle = document.createElement('article');
    const imgEle = document.createElement('img');
    const divEle = document.createElement('div');
    const h4Ele = document.createElement('h4');
    const pEle = document.createElement('p');

    //set attributes i.e class and dataset
    articleEle.dataset.id = id;
    articleEle.classList.add('blog-post');
    divEle.classList.add('info');
    pEle.classList.add('description');

    //append each element to it corresponding parent
    blogSection.appendChild(articleEle);
    articleEle.appendChild(imgEle);
    articleEle.appendChild(divEle);
    divEle.appendChild(h4Ele);
    divEle.appendChild(pEle);

    //set max length of a paragraphs to ensure consistency
    if (description.length > 90) {
      description = description.substr(0, 90) + '...';
    }

    //dynamically add content using storage session data
    imgEle.src = image;
    h4Ele.textContent = title;
    pEle.textContent = description;
  });
};
blogArticle();

class BlogPost {
  constructor(id, title, image, description, date) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.description = description;
    this.data = date;
  }
}

//new instance for each blog article using the blog post constructor
const yoga = new BlogPost(
  0,
  'Is Yoga Competitive?',
  '../assets/images/jared-rice-NTyBbu66_SI-unsplash.jpg',
  'Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control and still the mind, recognizing a detached witness-consciousness untouched by the mind and mundane suffering.',
  'October 18, 2021'
);
const diet = new BlogPost(
  1,
  'Food for Fitness',
  '../assets/images/eiliv-aceron-w0JzqJZYX_E-unsplash.jpg',
  'No single food or food group can provide everything we need to be healthy. Eating a variety of different foods from each of the food groups can help us get the full range of nutrients our bodies need.',
  'November 24, 2021'
);
const kettlebell = new BlogPost(
  2,
  '52 Kettlebell Exercises',
  '../assets/images/jan-gunnar-nygard-10FlDY7YBWo-unsplash.jpg',
  '52 Kettlebell Exercises There are lots of different kettlebell exercises that you can perform, some are more challenging than others.',
  'December 28, 2021'
);
const competition = new BlogPost(
  3,
  'Weightlifting Competition Planning and Preparation',
  '../assets/images/alora-griffiths-E3wehabi_B4-unsplash.jpg',
  'A lot of weightlifting coaches will get into weightlifting competitions with their athletes and not have any plan. The athletes are coming in blindfolded with coaches saying, “Just trust me, I’ve got everything figured out.',
  'January 1, 2022'
);
const calisthenics = new BlogPost(
  4,
  'Best Calisthenics Programs And Apps',
  '../assets/images/nikola-vu-Whb9HZuzCt4-unsplash.jpg',
  'In this post I provide you with my unbiased review of the most popular calisthenics programs and apps to help you decide which one is best for you.',
  'February 12, 2022'
);
const fasting = new BlogPost(
  5,
  'What is intermittent fasting?',
  '../assets/images/fasting.jpg',
  'Can intermittent fasting improve your health? Losing weight and being physically active help lower your risk of obesity-related diseases, such as diabetes, sleep apnea and some types of cancer.'
);
const etiquette = new BlogPost(
  6,
  'Gym Etiquette 101',
  '../assets/images/luis-reyes-mTorQ9gFfOg-unsplashlow.jpg',
  'Besides the grunting and the weights dropping, there is a secret code of conduct that is totally foreign to any newcomer on what to do and not to do.'
);

//input blog post instance into an array
const blogs = [
  yoga,
  diet,
  kettlebell,
  competition,
  calisthenics,
  fasting,
  etiquette,
];
//turn data to a string and save to online sessions storage
sessionStorage.setItem('blogArticle', JSON.stringify(blogs));

const blogSection = document.getElementById('blog-container');

const blogArticle = () => {
  //retrieve session storage data with the key of blog article
  arr = JSON.parse(sessionStorage.getItem('blogArticle'));
  arr.forEach((item) => {
    let { id, title, image, description, date } = item;
    //create all essential elements
    const articleEle = document.createElement('article');
    const spanEle = document.createElement('span');
    const icon = document.createElement('span');
    const heartIcon = document.createElement('img');
    const imgEle = document.createElement('img');
    const divEle = document.createElement('div');
    const h4Ele = document.createElement('h4');
    const pEle = document.createElement('p');

    //set attributes i.e class and dataset
    articleEle.dataset.id = id;
    articleEle.classList.add('blog-post');
    spanEle.classList.add('save-btn');
    divEle.classList.add('info');
    pEle.classList.add('description');
    icon.classList.add('likes');

    //append each element to it corresponding parent
    blogSection.appendChild(articleEle);
    articleEle.appendChild(spanEle);
    articleEle.appendChild(icon);
    icon.appendChild(heartIcon);
    articleEle.appendChild(imgEle);
    articleEle.appendChild(divEle);
    divEle.appendChild(h4Ele);
    divEle.appendChild(pEle);

    //set max length of a paragraphs to ensure consistency
    if (description.length > 90) {
      description = description.substr(0, 90) + '...';
    }

    //dynamically add content using storage session data
    spanEle.textContent = 'Save for later';
    imgEle.src = image;
    heartIcon.src = '../assets/icons/heart-regular.svg';
    h4Ele.textContent = title;
    pEle.textContent = description;
  });
};
blogArticle();

const saveBtn = document.querySelectorAll('.save-btn');
const bookmark = document.getElementById('saved-item');
//arrow function that takes in an element/array
//for each element add event listener click
//if the button is clicked and the text content is true
//change text content to save and add a class
//run add item function to push item into the saved array
//update save item span to alert user how many item has been saved
//store data in session storage
let saveArticle = (ele) => {
  let savePost = [];
  ele.forEach((span) => {
    span.addEventListener('click', (e) => {
      let button = e.target;
      let articleElementId = Number(e.target.parentElement.dataset.id);
      if (button.textContent === 'Save for later') {
        button.textContent = 'Saved';
        button.classList.add = 'Saved';

        addItem(blogs, savePost, articleElementId);
        //alert the user how many item has been saved
        bookmark.textContent = savePost.length;
        sessionStorage.setItem('savedBlogs', JSON.stringify(savePost));
      }
    });
  });
};
saveArticle(saveBtn);

//arrow function that has 3 parameters 2 array and a id
//for each item in array 1
//if the item id matches that of the argument id
//push the item into array 2
const addItem = (arr1, arr2, id) => {
  arr1.forEach((item) => {
    if (item.id === id) {
      arr2.push(item);
    }
  });
};

const likeIcon = document.querySelectorAll('.likes');
// for each element
//add an event listener for click
//change the element image source
const likes = (ele) => {
  ele.forEach((element) => {
    element.addEventListener('click', (e) => {
      let target = e.target;
      target.src = '../assets/icons/heart-solid.svg';
    });
  });
};

likes(likeIcon);

//section functions

const comments = document.getElementById('comments');
const submitComments = document.querySelector('input[type = "submit"]');
// add click event listener to element
// prevent default so user can not submit
//if the value of the input is not empty
//log the value
//alert user
//change value to empty string
//else if the input value empty alert user to enter a value
const handleComments = (ele) => {
  ele.addEventListener('click', (e) => {
    e.preventDefault();
    if (comments.value !== '') {
      console.log(comments.value);
      alert('Thank you for your comments');
      comments.value = '';
    } else {
      alert('Please enter a value');
    }
  });
};
handleComments(submitComments);

// https://www.calisthenics-101.co.uk/blog
//https://kettlebellsworkouts.com/blog/
//https://www.nerdfitness.com/blog/
//https://www.google.com/search?q=intimate+fasting&client=firefox-b-d&sxsrf=AJOqlzVmzUJQpZtiIYRxHD2_P-cMTTCE6A:1673302555174&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjYn5zjwbv8AhVXQkEAHfvqDysQ_AUoAXoECAEQAw&biw=1920&bih=927&dpr=1#imgrc=3KoPK1jDVD_efM&imgdii=OcHaKHThIX-3dM

//  sessionStorage.clear()

# To-do-list App by Hanbing



<h2>App functions:</h2>
- Signup/login with modals in homepage.
- Access to one's own to-do list with authentication.
- Click on "+" sign to add one's own to-do list.
- Complete/Edit/Delete function for each to-do list item.
- Search page that allows user to browse items with keyword.
- Click on logo pic at topleft corner to jump to homepage.


<h2>Deployment: </h2>
Now the online deployment of the project is available at: 
https://mern-todolist-hanbing.web.app/

(Backend Deployment: https://aqueous-springs-29674.herokuapp.com)


<h2>Getting Started with files</h2>

To get started you can simply clone the repo and install the dependencies in the root `folder`

| Steps   | with [NPM](https://www.npmjs.com/) |
| ------- | ---------------------------------- |
| Install | `npm install`                      |
| Run     | `npm run dev`                      |

<h2>Techs</h2>
<ul>
  <li>MongoDB - document database</li>
   <li> Express(.js) - Node.js web framework</li>
  <li> React(.js) - a client-side JavaScript framework</li>
  <li> Node(.js) - the premier JavaScript web server</li>
</ul>
    
<h2>App Sketch</h2>

<img src = "https://tva1.sinaimg.cn/large/0081Kckwgy1gjzrb1v628j31kw0twq8o.jpg" />
<img src = "https://tva1.sinaimg.cn/large/0081Kckwgy1gjzrb0y1t3j31kw0twq93.jpg" />
<img src = "https://tva1.sinaimg.cn/large/0081Kckwgy1gjzrb0igogj31kw0twtej.jpg" />
<img src = "https://tva1.sinaimg.cn/large/0081Kckwgy1gjzrb05h75j31kw0u0afi.jpg" />
<img src = "https://tva1.sinaimg.cn/large/0081Kckwgy1gjzrazr6t0j31k80tygrv.jpg" />
<img src = "https://tva1.sinaimg.cn/large/0081Kckwgy1gjzraz3k0zj31k60c2jve.jpg" />



<h3>File tree</h3>


├── Backend
│   ├── app.js
│   ├── controllers
│   │   ├── items-controllers.js
│   │   └── users-controllers.js
│   ├── middleware
│   │   └── check-auth.js
│   ├── models
│   │   ├── http-error.js
│   │   ├── item.js
│   │   ├── tag.js
│   │   └── user.js
│   └── routes
│       ├── items-routes.js
│       └── users-routes.js
└── Frontend
    ├── .DS_Store
    ├── public
    │   ├── favicon.ico
    │   ├── index.html
    │   ├── logo192.png
    │   ├── logo512.png
    │   ├── manifest.json
    │   └── robots.txt
    └── src
        ├── .DS_Store
        ├── App.css
        ├── App.js
        ├── App.test.js
        ├── components
        │   ├── .DS_Store
        │   ├── images
        │   │   └── logo2.png
        │   ├── mainPage
        │   │   ├── List
        │   │   │   ├── List.css
        │   │   │   ├── List.js
        │   │   │   ├── ListItem.css
        │   │   │   └── ListItem.js
        │   │   ├── MainPage.css
        │   │   ├── MainPage.js
        │   │   ├── SearchResult.js
        │   │   └── TagBar
        │   │       ├── TagBar.css
        │   │       ├── TagBar.js
        │   │       ├── TagItem.css
        │   │       └── TagItem.js
        │   ├── modals
        │   │   ├── AddItemModal.css
        │   │   ├── AddItemModal.js
        │   │   ├── AddTagModal.css
        │   │   ├── AddTagModal.js
        │   │   ├── Backdrop.css
        │   │   ├── Backdrop.js
        │   │   ├── EditItemModal.css
        │   │   ├── EditItemModal.js
        │   │   ├── LoginModal.css
        │   │   ├── LoginModal.js
        │   │   ├── RegisterModal.css
        │   │   ├── RegisterModal.js
        │   │   └── modalButtons
        │   │       ├── AddItemButtons.css
        │   │       └── AddItemButtons.js
        │   └── navBar
        │       ├── AddItem.js
        │       ├── LoginButton.js
        │       ├── NavBar.css
        │       ├── NavBar.js
        │       ├── RegisterButton.js
        │       ├── SearchBar.css
        │       └── SearchBar.js
        ├── context
        │   ├── AuthContext.js
        │   └── SearchContext.js
        ├── hooks
        │   ├── auth-hook.js
        │   └── http-hook.js
        ├── index.css
        ├── index.html
        ├── index.js
        ├── logo.png
        ├── serviceWorker.js
        └── setupTests.js

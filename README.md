<h1> 🐥 Ahiru Shop 🐥 </h1>
Extremely simple web application

**Focuses on:**

- Animation and best practices for HTML/CSS
- Best practices for authentication/authorization in backend and frontend
- Hosted on Docker locally for easy cleanup and configuration

<h3>⚙️ Setup / 設定</h3>
1. inside `/server` use command `docker compose up`
2. on `/server/.env`, use `MONGO_URL` string on MongoDB Compass on Connection String
   - uploaded .env since it is for practice
3. json data to mongo: [farm](server/src/data/farm.json), [users](server/src/data/users.json)
4. 

<h3> ⚠️ Warning / 警告 </h3>

- change `.env` variables if changing ports 

- **Making changes on `models`**: to make sure mongo container receives the changes, rebuild docker and rerun the server app


<h3>TODO Notes / やることリスト</h3>


- Custom Hooks

- reduce `fetch` by caching 

- use react-hook-form 
  - [otherwise](https://www.freecodecamp.org/news/how-to-build-forms-in-react/)

- [dropdown](https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/)

- reviews/comments



<h3>References / 参考文献</h3>
- icons from [icons8](icons8.com)

- photos from [pexels](https://www.pexels.com/)

- [img looping](https://www.youtube.com/watch?v=x4bom6Udk_4)

- [scrollbar](https://www.youtube.com/watch?v=lvKK2fs6h4I)

- [carousel logic reference](https://react.dev/learn/manipulating-the-dom-with-refs#challenges)

- [translation guide](https://medium.com/@iamusamasattar/how-to-add-language-translation-in-mern-application-d55a246178c8)

<h1> 🐥 Ahiru Shop 🐥 </h1>
Extremely simple web application

**Focuses on:**


- Animation and best practices for HTML/CSS
- Best practices for authentication/authorization in backend and frontend
- Hosted on Docker locally for easy cleanup and configuration

<h3>⚙️ Setup / 設定</h3>
1. docker-compose.yaml `docker-compose up
2. data to mongo: [farm](server/data/farm.json), [users](server/data/users.json)

<h3> ⚠️ Warning / 警告 </h3>

- change `.env` variables if changing ports 


<h3>TODO Notes / やることリスト</h3>

- TODO

  - Custom Hooks

  - reduce `fetch` by caching 

- use react-hook-form 
  - [otherwise](https://www.freecodecamp.org/news/how-to-build-forms-in-react/)

- 

<h3> MongoDB notes </h3>

- authenticate towards the admin`MONGO_URL='mongodb://root:example@localhost:27000/farm?authSource=admin'`

- Don't forget to create a user for a specific db before connecting to it:

    ```
        use admin
        db.createUser({
        user: "ahiru",
        pwd: "ducky",
        roles: [{ role: "readWrite", db: "farm" }]
        })
    ```
    
- or grant admin access to it:
    ```
      mongosh 'mongodb://adminUsername:adminPassword@localhost:27000/admin'
      use farm
      db.grantRolesToUser("adminUsername", [{ role: "readWrite", db: "farm" }])
    ```



<h3>References / 参考文献</h3>
- icons from [icons8](icons8.com)

- photos from [pexels](https://www.pexels.com/)

- [img looping](https://www.youtube.com/watch?v=x4bom6Udk_4)

- [scrollbar](https://www.youtube.com/watch?v=lvKK2fs6h4I)

- [carousel logic reference](https://react.dev/learn/manipulating-the-dom-with-refs#challenges)

- [translation guide](https://medium.com/@iamusamasattar/how-to-add-language-translation-in-mern-application-d55a246178c8)

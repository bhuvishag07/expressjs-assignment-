# Express.js Basics Assignment

## Student Information

**Name:** Bhuvisha Gohil

**Roll Number:** 150096725190

**Course:** B.Tech CSE

**Subject:** Backend Development

**Technology:** Node.js, Express.js

---

## Project Title

**Express.js Basics — Routes and Parameters**

---

## Project Description

This assignment demonstrates the basic concepts of routing in Express.js, including basic routes, route parameters, multiple route parameters, query parameters, and handling request information.

---

## Project Structure

```text
expressjs-basic assignments/
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Requirements

* Node.js
* Express.js
* Thunder Client
* Web Browser
* VS Code

---

## Steps to Run the Server

### 1. Initialize the Node.js Project

```bash
npm init -y
```

### 2. Install Express.js

```bash
npm install express
```

### 3. Start the Server

```bash
node server.js
```

The server runs on:

```text
http://localhost:3000
```

---

# Task 1: Basic Routes

Three basic GET routes are created.

### Home Route

**URL:**

```text
GET /
```

**Response:**

```text
Welcome to Home Page
```

### About Route

**URL:**

```text
GET /about
```

**Response:**

```text
This is About Page
```

### Contact Route

**URL:**

```text
GET /contact
```

**Response:**

```text
This is Contact Page
```

### Screenshot


<img width="912" height="863" alt="847444DF-71C5-47DF-8FD1-920139B3D407_1_105_c" src="https://github.com/user-attachments/assets/9e0a4e2e-f603-47d9-942f-ac90e2de7fa1" />

<img width="2142" height="1596" alt="8CED145A-F476-4688-9FC8-AA6AA4DF82B3" src="https://github.com/user-attachments/assets/d2b1999d-bfb7-4f68-bf11-60f2ba278c44" />

<img width="1000" height="786" alt="A03777A4-8E0E-44CA-B697-A3246C76895B_1_105_c" src="https://github.com/user-attachments/assets/19837b19-54fc-45a0-8340-34a6499385e5" />

> Screenshot of Home, About, and Contact routes in Thunder Client / Browser.

<br><br><br><br><br><br>

---

# Task 2: Route Parameter (Dynamic Route)

A dynamic route parameter is used to accept a name from the URL.

**Route:**

```text
GET /user/:name
```

**Example:**

```text
http://localhost:3000/user/john
```

**Response:**

```text
Hello john
```

The parameter is accessed using:

```js
req.params.name
```

### Screenshot


<img width="1778" height="1598" alt="B44803CD-8D1C-4BD3-B41F-DAB4A2F40630" src="https://github.com/user-attachments/assets/88a2526d-7547-4fa9-a070-968a0a1719a0" />


> Screenshot showing `/user/john` and the response `Hello john`.

<br><br><br><br><br><br>

---

# Task 3: Multiple Route Parameters

Two dynamic parameters are accepted in the URL: product ID and category.

**Route:**

```text
GET /product/:id/:category
```

**Example:**

```text
http://localhost:3000/product/101/electronics
```

**Response:**

```text
Product ID: 101, Category: electronics
```

The parameters are accessed using:

```js
req.params.id
req.params.category
```

### Screenshot


<img width="1566" height="1522" alt="A762D6B1-82AF-4077-B9C8-E944A4DE23E9" src="https://github.com/user-attachments/assets/7dbbc500-e48b-4c73-b2b8-f265a28b491b" />


> Screenshot showing `/product/101/electronics` and the response.

<br><br><br><br><br><br>

---

# Task 4: Query Parameters

Query parameters are used to send data through the URL after the `?` symbol.

**Route:**

```text
GET /search
```

**Example:**

```text
http://localhost:3000/search?name=john&role=developer
```

**Response:**

```text
Name: john, Role: developer
```

The values are accessed using:

```js
req.query.name
req.query.role
```

### Screenshot


<img width="1618" height="1572" alt="70965DFD-0195-40E1-8DC5-2DE0B0AED9AA" src="https://github.com/user-attachments/assets/3beb82c0-04f8-4bfe-aff9-362ee2070403" />

> Screenshot showing the query parameters and the response.

<br><br><br><br><br><br>

---

# Task 5: Request–Response Understanding

For every route, the request method and URL are printed in the terminal using:

```js
console.log(req.method, req.url)
```

### Sample Terminal Output

```text
GET /about
GET /user/john
GET /product/101/electronics
GET /search?name=john&role=developer
```

### Screenshot


<img width="1668" height="1574" alt="5196E628-A176-43E6-8992-96C55A4FAA51" src="https://github.com/user-attachments/assets/d39037c9-562e-40df-8ffc-bf61b5d5882c" />
<img width="1620" height="1642" alt="F6DADD10-2A94-4FCF-8263-02860E2990D8" src="https://github.com/user-attachments/assets/4006feec-2b27-43a8-97a4-ade371f92147" />
<img width="1552" height="1596" alt="88B86D8A-FA3B-41AD-B098-C548D985908D" src="https://github.com/user-attachments/assets/17bc1a77-b2be-4c1d-90b8-a545b7477012" />
<img width="1716" height="1628" alt="7F6B814F-75B4-4388-9D77-84E8C4B06907" src="https://github.com/user-attachments/assets/28fa8cce-94e1-423c-a518-ad356539e737" />

> Screenshot of the Terminal showing the GET requests and URLs.

<br><br><br><br><br><br>

---

# Sample Outputs

| Route                              | Expected Output                        |
| ---------------------------------- | -------------------------------------- |
| `/`                                | Welcome to Home Page                   |
| `/about`                           | This is About Page                     |
| `/contact`                         | This is Contact Page                   |
| `/user/john`                       | Hello john                             |
| `/product/101/electronics`         | Product ID: 101, Category: electronics |
| `/search?name=john&role=developer` | Name: john, Role: developer            |

---

# Conclusion

This assignment demonstrates the fundamentals of Express.js routing. It covers basic routes, dynamic route parameters, multiple route parameters, query parameters, and request information logging. These concepts form the foundation for building web servers and REST APIs using Node.js and Express.js.

# 🛒 E-Commerce Website

An **E-Commerce Web Application** built with modern React ecosystem.  
This project demonstrates **state management with Redux Toolkit**, product fetching via **API (Redux Thunk)**, and smooth UI using **Tailwind CSS**.  

🌍 **Live Website (Hosted on AWS):** [http://my-public-bucket-457.s3-website.ap-south-1.amazonaws.com/]

---

## 🚀 Features

✅ Browse products fetched from API  
✅ Add to Cart 🛒  
✅ Remove from Cart ❌  
✅ Increase & Decrease Product Quantity ➕➖  
✅ Add to Wishlist ❤️  
✅ Remove from Wishlist 💔  
✅ Global State Management with **Redux Toolkit + React Redux**  
✅ Modern UI with **TailwindCSS**  
✅ Navigation with **React Router DOM**  

---

## 🛠️ Tech Stack

* ⚛️ **React**
* 🧭 **React Router DOM**
* 🎨 **Tailwind CSS**
* 🎯 **Redux Toolkit + React Redux**
* 🔄 **Redux Thunk** (for API calls)
* 🎭 **React Icons**
* ☁️ **AWS (Hosting & Deployment)**

---

## 📂 Folder Structure

```

📦 e-commerce-website
┣ 📂 src
┃ ┣ 📂 components      # Reusable UI components
┃ ┣ 📂 pages           # All pages (Home, Cart, Wishlist etc.)
┃ ┣ 📂 redux           # Redux slices and store
┃ ┣ 📂 assets          # Images / Icons
┃ ┣ 📜 App.js
┃ ┗ 📜 index.js
┣ 📜 package.json
┣ 📜 README.md
┗ 📜 tailwind.config.js

````

---

## ⚡ Installation & Setup (Local Development)

1. Clone the repository

```bash
git clone https://github.com/your-username/e-commerce-website.git
````

2. Navigate into the project folder

```bash
cd e-commerce-website
```

3. Install dependencies

```bash
npm install
```

4. Run the project

```bash
npm start
```

---

## ☁️ Deployment on AWS

This project is hosted on **AWS** using the following steps:

1. Build the project:

```bash
npm run build
```

2. Upload the `build/` folder to **AWS S3 bucket** (for static hosting)
   or deploy via **AWS Amplify / EC2 / CloudFront** depending on your setup.

3. Configure **CloudFront / Amplify** for CDN & HTTPS.

4. Access the website at:
   👉 [http://my-public-bucket-457.s3-website.ap-south-1.amazonaws.com/]

---

## 🤝 Contributing

Contributions are welcome!
If you’d like to improve this project, feel free to fork it and create a pull request.

---

## 👨‍💻 Author

**Mohammad Owais**

* GitHub: [https://github.com/iamowais123]
* LinkedIn: [https://www.linkedin.com/in/mohammad-owais-975784301]

---

✨ Made with ❤️ using React + Redux Toolkit
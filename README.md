
# Installment Plan Web Application 
#### Currently working on this project
This is a full-stack web application that allows users to browse products, view details, and select installment plans for purchases. The project uses Django REST Framework for the backend and Vue.js for the frontend, with user authentication and a token-based system for secure access.

## Frontend (Vue.js)
This full-stack web application combines Vue.js and Django REST Framework (DRF) to provide a seamless user experience. It features user authentication with token storage for secure login, dynamic product listings fetched from the backend and displayed in a responsive grid, and category filtering with a search functionality. Built with Tailwind CSS, the app ensures a clean and responsive UI across devices. Additionally, users can view detailed installment plans for products, making it ideal for flexible payment options.

## Backend (Django REST Framework)
This web application leverages JWT authentication for secure login with access and refresh tokens, offering robust APIs for efficient management and interaction. It includes a Categories API for organizing products, a Product API for retrieving listings, details, and installment plans, and an Installment API to manage installment details for purchases. Custom pagination enhances performance by streamlining API responses, while integration with Cloudinary ensures seamless serving of product images, providing a comprehensive and scalable solution for e-commerce platforms.

## Backend Setup
## Step 1:
Install [uv](https://github.com/astral-sh/uv) here iam using UV for package managing. 

```bash
  pip install uv
```
## Step 2:
Install dependencicies, Within backend api directory 

```bash
  uv sync
```
Note: You don't need to create a virtual environment; [uv](https://github.com/astral-sh/uv) is here to help you set it up.

## Step 3:
Configure environment variables for serving media files in vue.js. For this you need to create account on [cloudinary](https://cloudinary.com/), and then Create a .env file in the backend api directory with the following keys:

```bash
cloud_name=<your cloud_name>
api_key=<your api_key>
api_secret=<your api_secret>

```

## Step 4:
Apply migrations

```bash
uv run python manage.py migrate

```

## Step 5:
Run Development server using uv run (this command activate virtual environment for you)

```bash
  uv run python manage.py runserver
```

## Frontend Setup
## Step 1:
Navigate to the frontend directory

```bash
  cd frontend
```
## Step 2:
Install dependencies:

```bash
  npm install
```
## Step 3
Configure API URL: In frontend/src/config.js, set the BASE_URL to your backend server URL (e.g., http://127.0.0.1:8000).

## Step 4:
Run the development server:

```bash
  npm run serve
```


## Contact
If you have any questions or feedback, feel free to reach out:
<p align="left">
<a href="https://wa.me/+923431285354" target="blank"><img align="center" src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp" height="30" width="40" /></a>
<a href="https://www.hackerrank.com/sohail_ahmad342" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="sohail_ahmad342" height="30" width="40" /></a>
<a href="https://www.linkedin.com/in/sohailahmad3428041928/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="sohail-ahmad342" height="30" width="40" /></a>
<a href="https://instagram.com/sohail_ahmed113" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="sohail_ahmed113" height="30" width="40" /></a>
<a href="mailto:sohailahmed34280@gmail.com" target="blank"><img align="center" src="https://img.icons8.com/ios-filled/50/000000/email-open.png" alt="Email" height="30" width="40" /></a>
</p>



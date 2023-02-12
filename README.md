# Customer Care Center

This project consists of customer service management where you can choose the right one personal who will solve your main problem. After select one, you have to fill 2 gaps with your personal information to receive an E-mail with all data of the user you have chosen.

## API Reference
In this case i decided to use an API to get all information about the users

Here is the API --> [JSONPLACEHOLDER](https://jsonplaceholder.typicode.com/users)

## Routes:

#### Get all Users

```http
  GET /
```

#### Get a particular User

```http
  GET /${id}
```

#### Send an E-mail 

```http
  POST /${id}
```

## SendGrid

This is the platform i have used to send emails to a particular email box

![Logo](https://kinsta.com/es/wp-content/uploads/sites/8/2019/04/sendgrid-wordpress.png)

## Download the Project:

>Here i will show how to clone it and add your own styles
   
- Go to the beginning of this same repository and look for a green button that says "CODE"


- Copy the URL that appears, if you can't find it, I'll leave it here: https://github.com/NicoSki/Customer_Care_Center.git


- Create a new folder on your PC choose whatever name you want (don't forget where you created the folder!)


- In that folder you will have to open the CMD


- Once open, copy the following code: git clone https://github.com/NicoSki/Customer_Care_Center.git

 ### Ta... Taaan. You got it!🎉
 
 ## Environment Variables

Do not forget to create your own variables in the .env file, because SendGrid will give you a particular key that will allow you to send E-mails. In my case:

`SEND_GRID`

## Deployment: https://gold-harsh-chungkingosaurus.glitch.me
Take a look to the package.json before start the server, if you do not, your console will filled with errors

To deploy this project run

```bash
  npm run dev
```

## Author

- [@NicoSki 🐉](https://github.com/NicoSki/NicoSki)

# Overview
Hobby Hub is a clone of Meet Up where you can make groups based off of hobbies. This app also allows you to create posts to share tips/tricks or your experiences with your hobbies.

# Application Architecture
Hobby Hub is built with a React frontend, Flask backend, and PostgreSQL as a database.

# Technologies Used

## Frontend
* React
* Redux
* HTML
* CSS

## Backend
* Python
* Flask
* PostgreSQL
* SQLalchemy

# Hobby Hub Setup

1. Clone this repository

   ```bash
   git clone https://github.com/huyennguuyen/HobbyHub
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the **.env,example** with proper settings for your
   development environment.
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. In the app folder, run **pipenv shell**, migrate the database, seed the database, and run the flask app with the following commands.

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

# Features

## Groups
Users can view groups that they have created and all groups that have been made. All groups are shown by clicking on the Hobby Hub icon or the "All Groups" link in the navigation bar. Groups the users have created can be seen by clicking the "My Created Groups" link in the navigation bar. The "my created groups" page allows users to edit and delete their groups. Users can edit or delete their groups by doing into the "my created groups" page and hovering over the ellipsis menu icon. 

<img width="1376" alt="Screen Shot 2022-05-21 at 7 30 25 PM" src="https://user-images.githubusercontent.com/92718001/169675718-202c5e5e-7c53-41a6-ab25-20bea7485540.png">

<img width="1375" alt="Screen Shot 2022-05-21 at 7 30 54 PM" src="https://user-images.githubusercontent.com/92718001/169675728-56703c26-21be-428f-be38-f3870359a0d1.png">

<img width="1376" alt="Screen Shot 2022-05-21 at 7 31 28 PM" src="https://user-images.githubusercontent.com/92718001/169675732-f8e1e3c6-6d55-4039-b249-bd4a4374e242.png">


## Posts
Users can make posts to share their experiences with their hobbies or things they have learned. Then, by hovering over the ellipsis icon, users can edit or delete their notes through a pop up modal. 

<img width="1319" alt="Screen Shot 2022-05-21 at 4 15 56 PM" src="https://user-images.githubusercontent.com/92718001/169671892-7f0e70ae-2115-411f-a8ab-a0ede8d9e556.png">

<img width="1325" alt="Screen Shot 2022-05-21 at 4 15 34 PM" src="https://user-images.githubusercontent.com/92718001/169671880-80f18152-9a7f-4db8-858d-0edafb57aaeb.png">

<img width="1317" alt="Screen Shot 2022-05-21 at 4 19 31 PM" src="https://user-images.githubusercontent.com/92718001/169671968-87928c5e-0e55-4280-8e9a-cc247c5c1035.png">










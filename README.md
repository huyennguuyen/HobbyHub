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

<img width="1319" alt="Screen Shot 2022-05-21 at 4 10 55 PM" src="https://user-images.githubusercontent.com/92718001/169671770-86ca3c0b-ee51-4e0a-b1a1-4947c360c6db.png">

<img width="1318" alt="Screen Shot 2022-05-21 at 4 23 06 PM" src="https://user-images.githubusercontent.com/92718001/169672050-ca7ae57c-ab9a-4dab-8e88-ef2fe0d56204.png">

<img width="1318" alt="Screen Shot 2022-05-21 at 4 21 41 PM" src="https://user-images.githubusercontent.com/92718001/169672019-fd2f17ef-c1d9-4f96-819b-e7ec00b4f32a.png">

## Posts
Users can make posts to share their experiences with their hobbies or things they have learned. Then, by hovering over the ellipsis icon, users can edit or delete their notes through a pop up modal. 

<img width="1319" alt="Screen Shot 2022-05-21 at 4 15 56 PM" src="https://user-images.githubusercontent.com/92718001/169671892-7f0e70ae-2115-411f-a8ab-a0ede8d9e556.png">

<img width="1325" alt="Screen Shot 2022-05-21 at 4 15 34 PM" src="https://user-images.githubusercontent.com/92718001/169671880-80f18152-9a7f-4db8-858d-0edafb57aaeb.png">

<img width="1317" alt="Screen Shot 2022-05-21 at 4 19 31 PM" src="https://user-images.githubusercontent.com/92718001/169671968-87928c5e-0e55-4280-8e9a-cc247c5c1035.png">










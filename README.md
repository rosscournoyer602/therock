Description: A Knowledge Base site that that allows users to read/create/delete two types of content: a process guide and a video walkthrough. Each type of content will belong to a specific business unit of a company. The data models are defined using Contentful, and content will be managed using Contentful's API.

By default the app will connect to a public test space. You can try it out and see how it works. With a little config, you can set up your own contentful back-end.

How to set up your own:

1. Need to get on contentful.com, create a free account, and create an new space.
2. Go to space settings and get space ID under Space Settings > General Settings

<a href="http://s1114.photobucket.com/user/KidPresentable602/media/getSpaceID.png.html" target="_blank"><img src="http://i1114.photobucket.com/albums/k532/KidPresentable602/getSpaceID.png" border="0" alt=" photo getSpaceID.png"/></a>

3. Generate a management-api token and a content delivery token under Space Settings > API Keys

<a href="http://s1114.photobucket.com/user/KidPresentable602/media/apiTokens.png.html" target="_blank"><img src="http://i1114.photobucket.com/albums/k532/KidPresentable602/apiTokens.png" border="0" alt="kbapikey photo apiTokens.png"/></a>

4. Clone into the repo and run npm install in the directory
5. Install contentful cli tools
    npm install -g contentful-cli
6. Add the your spaceid and managment token to spaceconfig.json, replacing the square brackets.
7. Run the command:
    contentful-import --config spaceconfig.json
8. You're almost done. Now go into the .env file in the main app directory and change the credentials to match yours. Now you're ready to rock!


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).



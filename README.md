Description: A Knowledge Base site that that allows users to read/create/delete two types of content: a process guide and a video walkthrough. Each type of content will belong to a specific business unit of a company. The data models are defined using Contentful, and content will be managed using Contentful's API.

By default this app will use a public contentful space shared with anyone who clones into it. This will allow people to see the functionality of the app and check out a generic version of it. There is some work needed to set up your own, described below.

By default the app will connect to a public test space. You can try it out and see how it works. With a little config, you can set up your own contentful back-end.

How to set up your own:

1. Need to get on contentful.com, create a free account, and create an new space.
    [photo]
2. Go to space settings and get space ID
    [photo]
3. Generate a management-api token and a content delivery token
    [photo]
4. Clone into the repo
5. Install contentful cli
    npm install -g contentful-cli
6. Add the your spaceid and managment token to spaceconfig.json, replacing the square brackets.
7. Run the command:
    contentful-import --config spaceconfig.json
8. You're almost done. Now go into the .env file in the main app directory and change the credentials to match yours.


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


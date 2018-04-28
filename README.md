Description: A Knowledge Base site that that allows users to read/create/delete two types of content: a process guide and a video walkthrough. Each type of content will belong to a specific business unit of a company. The data models are defined using Contentful, and content will be managed using Contentful's API.

How to set up your own:

1. Need to get on contentful.com, create a free account, and create an empty space.
2. Go to space settings and get space ID 35aq0q165npg
    [photo]
2. Generate a management-api token CFPAT-ff7613e4c5e071c9e6ee0d859adb80fe774d76c4c5bc370d7bc1b580fdf08600
    [photo]
3. Clone the repo
4. Install contentful cli
    npm install -g contentful-cli
4. Add the your spaceid and managment token to spaceconfig.json, replacing the square brackets.
5. Run the command:
    contentful-import --config spaceconfig.json


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


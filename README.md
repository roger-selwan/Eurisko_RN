# Eurisko Exercise
Installation of the project
- yarn
- cd ios
- pod install
- cd ..
- yarn ios (to run ios simulator)
- yarn android (to run android simulator --- most prefarably to open the android simulator first from android studio)


Packages used
- axios: to post and get the apis
- dayjs: to format the date
- react-native-keyboard-aware-scroll-view: used for the keyboard to be under the input.
- react-native-modal: used for customized style for the pop up alert
- wix react native navigation: used for the navigation
- react-native-snap-carousel: used for to show a slider of the multimedia array from the payload if the multimedia array is not empty
- realm: used to store the access token locally in case the user closed the app after login so he won't go through the login process again and will redirected to the home page.
- Redux, react-redux, redux-thunk: to be able to use the reducer and actions in the project.


# Explanation of the process

Login
- The user logs in using the username and password
- The button will turn from grey to blue and enabled once both fields were filled.
- Error handling in case of wrong credentials is handled from the 'axios.config' file using the axios interceptors and will show the pop up modal alert with the error message got from the payload.
- Once the user is successfully logged in, he will redirected to the home page.


Article Page (home page)
- Logout button is on the top right of the topbar, it will delete the access token from the local storage and redirect the user to login screen.
- Once the page loads, all the articles from page 0 will load first.
- The refresh control will reload the articles from the api with page = 0 since if any new articles are added from the api, i figured they will be in page 0.
- Once the user reach the end of the flatlish, an api call will be called with the page is incremented by 1 to get the data from the second page, the added data will be pushed to the old data.
- If the user search for an article, by clicking on the search icon, it will see if the word is included in the headline or the abstract since im only showing these 2 variables in the shared component of the article.
- If no data is shown, it will show a component that isnt any data.
- If the user remove the text from the search, it recall the api with page = 0.
- Each article will show, the headline, the abstract, the swiper which includes the images in the multimedia array (if the multimedia array is not empty from the payload).
- Since each object have a lead paragraph, and may have it as a big paragraph, i created an extra page which includes a bit of details of the selected article.



Article Detail Page
- To access the detail article page, we just click on any article item shown in the list of the homepage.
- The article detail page includes the headline, abstract, lead paragraph, source, date created and the swiper which includes the images in the multimedia array (if the multimedia array is not empty from the payload).

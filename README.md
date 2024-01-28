
# Wasserstoff Frontend Assignment

An assignment related to mostly frontend with data visualization and integration in map, chart and bubbles.

<img width="959" alt="wasser" src="https://user-images.githubusercontent.com/108893444/222056706-f3a2ae90-f1eb-4686-bcfe-26e857dd8fb1.png">





## Tech Stack

Used React.js, Module css, d3, and d3-hexbin to build.

## Steps to run build

To initiate the project run
```
npx create-react-app
```

Go to the project directory

```
  cd my-project
```

To run the project

```
npm start
```

To build the project

```
npm run build
```
## Video Explanation 

https://drive.google.com/file/d/1DaYJSHvIMGI9CHBGEHK3qnNsZhY-kOJZ/view?usp=share_link

## Deployment

Deployed on vercel and here is the deployed link

https://wasserstoff-assignment-azure.vercel.app


## Understanding the Approach

I started with the smaller task first which has high reusability like the navbar and footer UI. After this, I completed the third page with bubble data visualization statically after that I convert it to dynamically integrated UI with all timeline as well as the zoom in and zoomout features.

And, for the map I tried first with normal map svg and succed in that but the issue was it was not built with the hexagons which was the main task so then I come to know about the h3-js, I explored but didn't come to result then I got to find that the image data can be used in canvas in a way that whenever we hover any part of the image then I got data related to that part only which I think will be useful.

So, I tried a library d3.js which is actually a data driven visualization, I research a lot but not able to fully incorporate what I thought,which was mapping the data image and converting pixelated form into hexagon.

During the assignment I learned a lot of libraries that I never explore before and the data visualization through d3.js which is very vast.

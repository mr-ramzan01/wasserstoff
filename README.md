# Wasserstoff Frontend Assignment

An assignment related to mostly frontend with data visualization and integration in map, chart and bubbles.

<img width="959" alt="wasserstoffbanner" src="https://github.com/mr-ramzan01/Cointab_Assign/assets/108893444/67936ba3-f1ac-449c-a408-e892cf9c57a2">

## Tech Stack

Used React.js, axios, Module css, d3, and d3-hexbin to build.

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

https://drive.google.com/file/d/1NGsJJx3h1wwFhxM-Azbag3IJ2XCekvp4/view?usp=sharing

## Deployment

Deployed on vercel and here is the deployed link

https://wasserstoff-ivory.vercel.app

## Understanding the Approach

I first started with the smaller tasks with high reusability like the navbar and footer UI. After this, I went for the map which was built by hexagons, I researched it and came up with many libraries. I explored every library like h3-js and more but it didn't work very well. So I tried a library d3.js which is actually a data-driven visualization, I researched a lot and then finally I got to know how I did this.

So I have created the data for the hexagon map, for creating each hexagon I need to add the coordinates with this d3-hexbin generator which generates all the hexagons using the path of SVG so this is how I build the map also I have fetched the data for the population of the world and showing through the tooltip and distinguish with the color.

After that, I completed the bubble data visualization statically and converted it to a dynamically integrated UI with all timelines as well as the zoom-in and zoom-out features.

During the assignment, I learned a lot of libraries that I had never explored before and data visualization through d3.js which is very vast.

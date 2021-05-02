# Dependency-Free Carousel

This is a carousel React component built without any additional carousel library.\
It supports swipe motion(mouse, touch), responsive images, indicator dots, navigation buttons and color customization.

### Goal 1. Render slides with data size handling
- It maps out each element from the data object into a slides roll, and it shows one slide at a time in the viewport. 
- It requires you to set minimum and maximum number of slides to render the carousel with `MIN_DATA_SIZE`, `MAX_DATA_SIZE`.

### Goal 2. Support swipe motion to navigate in any device
- There are swipe handling functions to track the swipe motion cycle, `handleSwipeStart`, `handleSwipeMove`, `handleSwipeEnd`.
These handlers take care of the mouse events and also the touch events on mobile devices.

- When the dragged distance from swiping is meaningful(`DRAG_THRESHOLD`), it triggers the slides roll to move to the next, or the previous slide to show.

### Goal 3. Optional Customization
- You can choose whether you show indicator dots or not by setting `indicatorDots` prop.
- You can choose whether you show navigation buttons or not by setting `navigationButtons` prop.
- You can set the color of navigation arrows and marked dot by setting  `color` prop to any color.


## Available Scripts
In the project directory, run:  `yarn start`. it runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

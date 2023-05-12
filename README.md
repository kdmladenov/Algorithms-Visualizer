# Algorithms Visualizer App

**Table of Contents**

- [Algorithms Visualizer App](#algorithms-visualizer-app)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Usage](#usage)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage-1)
  - [License](#license)

## Introduction

The Algorithms Visualizer App is a web application that allows users to visualize the Dijkstra, DFS, and A-star algorithms. The app provides a visual representation of the algorithm's outcome, including the shortest path. Additionally, it offers various features such as resizing the grid, creating a maze, adding or clearing walls, and adjusting the weight of the edges.

A deployed version of the site can be accessed [here](https://algo-visualizer-5dadd.web.app/).
You can view my other projects at [my portfolio website](https://portfolio-site-61599.web.app/) or my [LinkedIn page](https://www.linkedin.com/in/kmladenov/).

## Features

- **Dijkstra Algorithm Visualization:** Users can visualize the Dijkstra algorithm, a popular graph search algorithm used to find the shortest path between two nodes in a graph.
- **DFS Algorithm Visualization:** Users can visualize the Depth-First Search (DFS) algorithm, another graph traversal algorithm that explores as far as possible along each branch before backtracking.
- **A-star Algorithm Visualization:** Users can visualize the A-star algorithm, a heuristic-based search algorithm commonly used for pathfinding. It combines the advantages of both Dijkstra's algorithm and greedy best-first search.
- **Shortest Path Visualization:** The app highlights the shortest path found by the algorithms, allowing users to observe the optimal route from the starting node to the target node.
- **Grid Resizing:** Users can resize the grid to adjust the size of the graph according to their needs.
- **Maze Creation:** The app provides an option to generate mazes automatically, which can be useful for testing the algorithms' performance on complex structures.
- **Wall Manipulation:** Users can add or clear walls on the grid, allowing them to create obstacles that affect the pathfinding algorithms.
- **Edge Weight Adjustment:** The weight of the edges can be adjusted, allowing users to simulate different scenarios where some paths may be more or less desirable.

## Usage

To use the Algorithms Visualizer App, follow these steps:

1. Open the web application in a supported web browser.
2. Set the desired options, such as grid size, weight adjustment, and any walls.
3. Select the algorithm you want to visualize (Dijkstra, DFS, or A-star).
4. Specify the starting and target nodes.
5. Initiate the visualization process.
6. Observe the algorithm's progress as it traverses the graph and finds the shortest path.
7. Analyze the resulting shortest path and any other relevant information.
8. Adjust the options or start a new visualization as needed.

## Technologies Used

The Algorithms Visualizer App is built using the following technologies:

- **React:** Utilized to create the user interface based on components.
- **JavaScript:** Implements the logic and functionality of the visualizations and user interactions.
- **HTML:** Provides the structure and layout of the web application.
- **CSS:** Handles the styling and appearance of the app, ensuring an intuitive and visually appealing interface.

## Installation

1. Clone the repository: `git clone https://github.com/kdmladenov/Algorithms-Visualizer.git`
2. Install dependencies in the frontend folder: `npm i;`

## Usage

1. Start the development server in the frontend folder: `npm start`
2. Access the site in your browser at `http://localhost:3000`

## License

This project is a restricted personal project of Krasimir Mladenov. All rights reserved. Unauthorized copying, reproduction, or distribution of this repository, either in its entirety or any part of it, is strictly prohibited. Modification or commercial use of the source code or any associated materials without explicit permission from Krasimir Mladenov is not allowed.

Please note that this license only applies to the specific project owned by Krasimir Mladenov and may not be applicable to any other projects or repositories.
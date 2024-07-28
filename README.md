# Pixabay Image Search API

This project is a simple Node.js application that uses the Pixabay API to search for images based on a query string and return the image URLs and alt tags.

## Features

- Search images from Pixabay using a query string
- Return image URLs and alt tags in JSON format
- Error handling for missing query string and failed API requests

## Prerequisites

- Node.js installed
- A Pixabay API key

## Getting Started

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/tushar-glitch/TechGeekers.git
    cd TechGeekers
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root of the project and add your Pixabay API key:
    ```env
    PIXABAY_KEY=your_pixabay_api_key
    ```

### Running the Application

1. Start the server:
    ```bash
    node index.js
    ```

2. The server will run on port `3333`. You can access the API at:
    ```
    http://localhost:3333/api/v1/getimage?q=your_query
    ```


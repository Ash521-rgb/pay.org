* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
}

header {
    background-color: #333;
    color: #fff;
    padding: 1rem;
    margin-bottom: 1rem;
}

h1 {
    margin-bottom: 1rem;
}

nav {
    display: flex;
    gap: 1rem;
}

.nav-btn {
    background-color: transparent;
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
}

.nav-btn.active {
    background-color: #555;
}

main section {
    display: none;
    background-color: #fff;
    padding: 1rem;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

main section.active {
    display: block;
}

h2 {
    margin-bottom: 1rem;
}

.dashboard-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
}

.card {
    background-color: #f9f9f9;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
}

th, td {
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

form {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

input, button {
    padding: 0.5rem;
}

button {
    cursor: pointer;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 3px;
}

button:hover {
    background-color: #555;
}

canvas {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    display: block;
}


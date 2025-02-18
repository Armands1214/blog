body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #b3e0ff, #e6f7ff);
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
}

header {
    text-align: center;
    padding: 40px 20px;
    background: rgba(255, 255, 255, 0.95);
    width: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    border-bottom: 4px solid #4a90e2;
}

.branding {
    font-size: 2em;
    font-weight: bold;
    color: #2a4d69;
    letter-spacing: 1px;
}

.intro {
    font-size: 1.2em;
    color: #555;
    max-width: 800px;
    text-align: center;
    font-style: italic;
    margin-top: 5px;
}

nav {
    margin-top: 15px;
}

nav a {
    text-decoration: none;
    color: #2a4d69;
    font-weight: bold;
    margin: 0 15px;
    font-size: 1.1em;
    transition: color 0.3s;
}

nav a:hover {
    color: #4a90e2;
}

#about, main {
    max-width: 900px;
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin: 20px;
    text-align: center;
}

.gallery {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
}

.gallery img {
    max-width: 30%;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#posts article {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

footer {
    text-align: center;
    padding: 20px;
    background: rgba(255, 255, 255, 0.9);
    width: 100%;
    box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
}

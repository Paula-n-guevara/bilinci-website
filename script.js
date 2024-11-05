<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bilinci - Real-Time Classroom Translation</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Header Section with Navigation -->
    <header>
        <nav>
            <img src="Bilinci_logo.jpg" alt="Bilinci Logo" class="logo">
            <ul>
                <li><a href="#problem">Problem</a></li>
                <li><a href="#solution">Solution</a></li>
                <li><a href="#waitlist">Waitlist</a></li>
                <li><a href="about.html">About Bilinci</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section with Interactive Translation -->
    <section class="hero">
        <h1>Bilinci: Bridging Language Gaps in Real-Time for K-12 Education</h1>
        <p>Empowering <span class="translatable" data-translation="estudiantes">students</span> through innovative <span class="translatable" data-translation="tecnología">technology</span> that translates <span class="translatable" data-translation="lecciones">lessons</span> in real-time.</p>
        <a href="#waitlist" class="cta-button">Join the Waitlist</a>
    </section>

    <!-- Problem Section with Animated Counters -->
    <section id="problem" class="section problem-section">
        <h2>The Problem</h2>
        <div class="stats-container">
            <div class="stat">
                <img src="A_professional_icon_of_students,_illustrating_a_gr.png" alt="Students Icon">
                <div class="counter" data-target="5">0</div>
                <p>Million ESL students struggle daily</p>
            </div>
            <div class="stat">
                <img src="A_minimalist_icon_of_teachers,_representing_a_grou.png" alt="Teachers Icon">
                <div class="counter" data-target="70">0</div>
                <p>% of teachers feel unprepared for ESL instruction</p>
            </div>
            <div class="stat">
                <img src="A_professional_icon_of_dropout_rate_statistics,_de.png" alt="Dropout Rate Icon">
                <div class="counter" data-target="25">0</div>
                <p>% higher dropout rate among ESL students</p>
            </div>
        </div>
        <p>Language barriers in classrooms prevent ESL students from fully engaging in lessons, impacting their learning and development.</p>
    </section>

    <!-- Solution Section -->
    <section id="solution" class="section solution-section">
        <h2>The Solution</h2>
        <p>Introducing Bilinci – AI-powered real-time translation and transcription to bridge language gaps in education.</p>
        <video controls class="intro-video">
            <source src="Bilinci_Demo_Nov4.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </section>

    <!-- Waitlist Section -->
    <section id="waitlist" class="section waitlist-section">
        <h2>Join the Waitlist</h2>
        <p>Be the first to experience Bilinci. Sign up to receive updates and early access opportunities.</p>
        <form action="https://formspree.io/f/manyerba" method="POST" class="waitlist-form">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="email" name="email" placeholder="Your Email" required>
            <button type="submit">Join the Waitlist</button>
        </form>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Bilinci. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>

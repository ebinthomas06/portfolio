async function loadSection(id, file) {
    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
        }

        const html = await response.text();
        document.getElementById(id).innerHTML = html;
    } catch (err) {
        console.error(err);
    }
}

loadSection("hero-section", "sections/hero.html");
loadSection("about-section", "sections/about.html");
loadSection("projects-section", "sections/projects.html");
loadSection("contact-section", "sections/contact.html");
// Select all timeline events and the hover box
const timelineEvents = document.querySelectorAll('.timeline-event');
const hoverBox = document.querySelector('.hover-box');
const hoverImage = hoverBox.querySelector('.hover-image');
const hoverDetails = hoverBox.querySelector('.hover-details');

// Data for each event (title, image, video, description)
const eventData = {
    "August 2024": {
        image: "../images/concept_group.png", // Image path
        title: "Concept Development - Vision-Adaptive Screens",
        description: "We envisioned a product that could connect glasses with monitors or TVs to adapt the screen display to the user's vision.",
        type: "image" // This event has an image
    },
    "December 2024": {
        video: "../videos/mittic.mp4", // Video path
        title: "Screen Pitched at NASA MITTIC",
        description: "Screen Sight won $20,000 and 1st place!",
        type: "video" // This event has a video
    },
    "March 2025": {
        video: "../videos/funds.mp4", // Video path
        title: "Screen Sight at Gurls Just Wanna Have Funds",
        description: "We won 2nd place for $500!",
        type: "video" // This event has a video
    },
    "Coming Soon": {
        image: "../images/soon.webp", // Image path
        title: "Product Launch",
        description: "Stay tuned for the launch of Screen Sight!",
        type: "image" // This event has an image
    }
};

// Show the hover box with event details
timelineEvents.forEach(event => {
    event.addEventListener('mouseenter', function() {
        const date = event.querySelector('.timeline-date').textContent;
        const eventDetail = eventData[date];

        // Show the hover box
        hoverBox.classList.add('active');

        // Check event type and display image or video
        if (eventDetail.type === 'video') {
            hoverImage.innerHTML = `<video controls>
                <source src="${eventDetail.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>`;
        } else {
            hoverImage.innerHTML = `<img src="${eventDetail.image}" alt="${eventDetail.title}">`;
        }

        // Update hover details (title and description)
        hoverDetails.innerHTML = `
            <h2>${eventDetail.title}</h2>
            <p>${eventDetail.description}</p>
        `;
    });

    // Remove hover box when mouse leaves event
    event.addEventListener('mouseleave', function() {
        // Delay hiding the hover box until the mouse leaves the hover box
        setTimeout(() => {
            if (!hoverBox.matches(':hover')) {
                hoverBox.classList.remove('active');
                hoverImage.innerHTML = '';  // Clear image or video
                hoverDetails.innerHTML = ''; // Clear details
            }
        }, 100);  // Small delay to allow interaction with hover box
    });
});

// Keep hover box open while interacting with it (on hover)
hoverBox.addEventListener('mouseenter', function() {
    hoverBox.classList.add('active');
});

// Close hover box if you leave both the event and the hover box
hoverBox.addEventListener('mouseleave', function() {
    hoverBox.classList.remove('active');
    hoverImage.innerHTML = ''; // Clear image or video
    hoverDetails.innerHTML = ''; // Clear details
});

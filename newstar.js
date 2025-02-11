document.addEventListener('DOMContentLoaded', function() {
    // Banner Slider
    const bannerContent = document.querySelector('.banner-content p');
    const bannerMessages = [
        'เคลื่อนไหว เลือกซื้อ ออกแบบเอง และเฉลิม ฉลองไปกับเรา',
        'โบรชัวร์ประจำสัปดาห์ใหม่ ไม่ Member ไว้ติดตาม',
        'สินค้าใหม่มาแล้ว!',
    ];
    let currentBanner = 0;

    document.querySelector('.next').addEventListener('click', () => {
        currentBanner = (currentBanner + 1) % bannerMessages.length;
        bannerContent.textContent = bannerMessages[currentBanner];
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentBanner = (currentBanner - 1 + bannerMessages.length) % bannerMessages.length;
        bannerContent.textContent = bannerMessages[currentBanner];
    });

    // Filter Toggle for Mobile
    const filterSections = document.querySelectorAll('.filter-section h3');
    filterSections.forEach(section => {
        section.addEventListener('click', () => {
            section.parentElement.classList.toggle('expanded');
        });
    });

    // Search Functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('focus', () => {
        document.querySelector('.search-bar').classList.add('focused');
    });

    searchInput.addEventListener('blur', () => {
        document.querySelector('.search-bar').classList.remove('focused');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.getElementById('splashScreen');
    const splashVideo = document.getElementById('splashVideo');
    const mainContent = document.getElementById('mainContent');

    // Start playing the video
    splashVideo.play();

    // When video ends, hide splash screen and show main content
    splashVideo.addEventListener('ended', function() {
        splashScreen.classList.add('hidden');
        mainContent.classList.add('visible');
    });

    // Fallback: If video fails to load, skip splash screen
    splashVideo.addEventListener('error', function() {
        splashScreen.classList.add('hidden');
        mainContent.classList.add('visible');
    });

    // Optional: Allow clicking to skip splash screen
    splashScreen.addEventListener('click', function() {
        splashVideo.pause();
        splashScreen.classList.add('hidden');
        mainContent.classList.add('visible');
    });
});
// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Marinah",

    pageTitle: "🩷💚Will You Be My Valentine?💚🩷 ",

    floatingEmojis: {
        hearts: ['❤️', '💖', '🩷', '💗', '🩵', '💚', '💜', '💓'],  // Heart emojis
        bears: ['🙈', '🐵', '🐌']                       // Cute bear emojis
    },

    questions: {
        first: {
            text: "Do you love me forever?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't love you 4ever, I love you 5ever! 💞"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next 🩷"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine? 💐", // The big question!
            yesBtn: "Yes!🐵",                                             // Text for "Yes" button
            noBtn: "No👎"                                                 // Text for "No" button
        }
    },

    loveMessages: {
        extreme: "IM SOOOO CRAZY FOR YOU TOO! 🙈💚",  // Shows when they go past 5000%
        high: "YIPPIEEEEEE!!! 🎉",              // Shows when they go past 1000%
        normal: "SO MUCH?! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Ill now spend the rest of my life with YOU!",
        emojis: "🙈💖🤗🐵💋❤️🐌"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#77DD77",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc5d3",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dxpco2iym/video/upload/v1739443689/adyivyqdwdfwwtkes58r.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 

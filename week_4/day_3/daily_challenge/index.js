/**************************************************************
 🌟 Exercise : Video Class
**************************************************************/

// 1️⃣ Define Video class
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time; 
    }
    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}
// 2️⃣ Instantiate two videos and call watch()
const video1 = new Video("JavaScript Tutorial", "Elie", 300);
video1.watch(); 
// Output: "Elie watched all 300 seconds of JavaScript Tutorial!"

const video2 = new Video("CSS Basics", "Sara", 150);
video2.watch(); 
// Output: "Sara watched all 150 seconds of CSS Basics!"

// 3️⃣ Bonus: Store multiple video data in an array
const videoData = [
    { title: "React Intro", uploader: "John", time: 200 },
    { title: "Node.js Guide", uploader: "Becky", time: 400 },
    { title: "HTML5 Crash Course", uploader: "Mike", time: 180 },
    { title: "Python Basics", uploader: "Anna", time: 250 },
    { title: "Docker Tutorial", uploader: "Tom", time: 360 }
];

// 4️⃣ Loop through array to instantiate Video instances
const videos = videoData.map(data => new Video(data.title, data.uploader, data.time));

// 5️⃣ Call watch() method for each instance
videos.forEach(video => video.watch());
// Output:
// "John watched all 200 seconds of React Intro!"
// "Becky watched all 400 seconds of Node.js Guide!"
// "Mike watched all 180 seconds of HTML5 Crash Course!"
// "Anna watched all 250 seconds of Python Basics!"
// "Tom watched all 360 seconds of Docker Tutorial!"

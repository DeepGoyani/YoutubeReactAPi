const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
const videos = [
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
        title: "Bulbuli|Coke Studio Bangla <br>| Season 1|Ritu RajXNandita ",
        views: "12,000,000 views",
        channel: "Coke Studio Bangla",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
        title: "Infinix Note 12 : Amoled Hello g38",
        views: "12,000,000 views",
        channel: "Infinix",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "My first ux design case study which got me a 17lpa job",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "Mix",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },



    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true" ,
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
        title: "Ux in 10 days",
        views: "12,000,000 views",
        channel: "Code with deep",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
        title: "Music cover ft. Arijit Singh",
        views: "12,000,000 views",
        channel: "Musicly",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "How to learn bangla in 10 days",
        views: "12,000,000 views",
        channel: "Hassena Malik",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },



    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },
    {
        thumbnail: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",
        playButton: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
        title: "Title of the Video",
        views: "12,000,000 views",
        channel: "Channel Name",
        date: "Date",
    },

];

app.get("/videos", (req, res) => {x
  if (videos && videos.length > 0) {
    console.log("Videos fetched successfully.");
    res.status(200).json(videos);  
  } else {
    console.error("No videos found.");
    res.status(404).send("Videos not found");
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify(videos)
    };
};
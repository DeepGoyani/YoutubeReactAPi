import { useEffect, useState } from 'react';
import './Videobar.css';

function Main() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('http://localhost:3000/videos');
                if (!response.ok) {
                    throw new Error('Failed to fetch videos');
                }
                const data = await response.json();
                setVideos(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    if (loading) {
        return <div>Loading videos...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="main-content">
            <div className="row">
                {videos.map((video, index) => (
                    <div className="video" key={index}>
                        <div className="thumbnail">
                            <img
                                src={video.thumbnail}
                                alt="Video Thumbnail"
                                className="thumbnail-img"
                                onError={(e) => (e.target.src = 'https://via.placeholder.com/370')}
                            />
                        </div>
                        <div className="video-details">
                            <div className="channel-logo">
                                <img
                                    src={video.channelLogo}
                                    alt="Channel Logo"
                                />
                            </div>
                            <div className="details">
                                <div className="title" dangerouslySetInnerHTML={{ __html: video.title }}></div>
                                <div className="channel">{video.channel}</div>
                                <div className="views">{video.views}</div>
                                <div className="date">{video.date}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Main;

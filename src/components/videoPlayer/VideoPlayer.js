const VideoPlayer = () => {
    return (
        <video autoPlay loop muted playsInline className="video">
            <source src="/videos/your-video-file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;
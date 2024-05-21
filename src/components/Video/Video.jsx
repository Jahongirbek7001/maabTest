import "./Video.css";
function Video() {
    return (
        <>
            <div className="video">
                <video controls>
                    <source src="https://academy.maab.uz//media/media_materials/home_page_banner/MainVideo.MP4" type="video/mp4" />
                </video>
            </div>
        </>
    );
}

export default Video;
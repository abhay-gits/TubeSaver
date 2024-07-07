const express = require('express')
const ytdl = require('ytdl-core')

const app = express();
const PORT = 5173;

app.use(express.static('public'));

app.get('/download', async (req, res) => {
    try {
        const url = req.query.link
        const videoInfo = await ytdl.getInfo(url);
        const videoTitle = videoInfo.videoDetails.title.replace(/[^\w\s]/gi, "");
        res.header('Content-Disposition', `attachment; filename="${videoTitle}.mp4"`);
        ytdl.downloadFromInfo(videoInfo).pipe(res);
    } catch (error) {
        console.log("Error in downloading", error);
        res.status(500).send("Error occured during downloading, Kindly check your link");
    }

})

app.listen(PORT, () => {
    console.log(`Server started at PORT${PORT}`);
})
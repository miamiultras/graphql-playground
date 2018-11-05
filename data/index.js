const videoA = {
  id: 'a',
  title: 'aaaaaaa',
  duration: 120,
  watched: true,
};

const videoB = {
  id: 'b',
  title: 'bbbbbbb',
  duration: 120,
  watched: true,
};

const videos = [videoA, videoB];

const getVideos = () => new Promise((resolve) => resolve(videos));

const getVideoById = (id) => new Promise((resolve) => {
  const [video] = videos.filter((video) => video.id === id);
  resolve(video);
});

const createVideo = ({ title, duration, watched }) => {
  const video = {
    id: (new Buffer(title, 'utf8')).toString('base64'),
    title,
    duration,
    watched,
  };
  videos.push(video);
  return video;
};

exports.getVideoById = getVideoById;
exports.getVideos = getVideos;
exports.createVideo = createVideo;

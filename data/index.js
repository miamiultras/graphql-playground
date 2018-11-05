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

const getVideoById = (id) => new Promise((resolve) => {
  const [video] = videos.filter((video) => video.id === id);
  resolve(video);
});

exports.getVideoById = getVideoById;
const getScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/01GGHFHZCJGZ9QK9XS33QYPB9E/scores', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export default getScore;
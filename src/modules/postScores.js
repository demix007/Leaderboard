const postScore = async (data) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/01GGHFHZCJGZ9QK9XS33QYPB9E/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export default postScore;
exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello, Tzuyo! This is your very first Netlify Function 🎉"
    }),
  };
};

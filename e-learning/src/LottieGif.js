import Lottie from "react-lottie";

function LottieGif({ illustration, width, height }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: illustration,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} width={width} height={height} />
    </div>
  );
}

export default LottieGif;

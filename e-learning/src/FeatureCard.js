import "./styles/FeatureCard.scss";
import Lottie from "react-lottie";


function FeatureCard({illustrationName, title, subtitle}) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: illustrationName,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="Feature">
      <Lottie
        className="icon"
        options={defaultOptions}
        height={120}
        width={120}
      />
      <p className="title">{title}</p>
      <p className="subtitle">
        {subtitle}
      </p>
    </div>
  );
}

export default FeatureCard;

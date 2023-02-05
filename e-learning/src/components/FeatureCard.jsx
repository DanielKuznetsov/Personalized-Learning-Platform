import "../styles/FeatureCard.scss";
import LottieGif from "./LottieGif";

function FeatureCard({ illustrationName, title, subtitle }) {
  return (
    <div className="Feature">
      <LottieGif illustration={illustrationName} height={120} width={120} />
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}

export default FeatureCard;

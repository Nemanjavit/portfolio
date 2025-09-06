import bgmobile from "../../assets/bg-mobile.png";

const Quote = () => {
  return (
    <div className="quote">
      <div className="container position-relative quote-container">
        <div className="text-content">
          <h2 className="text-center text-lg-start mb-5 text-xl fw-bold heading">
            Who am I
          </h2>
          <p className="text-sm">
            I am a hardworking and ambitious individual with a great desire to
            reach new goals, I am eager to be challenged in order to grow and
            further improve my professioonal skills. I enjoy working in a team
            where i can help and be part of goals achivements.
          </p>
        </div>
        <img src={bgmobile} />
      </div>
    </div>
  );
};

export default Quote;

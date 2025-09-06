const Skill = ({ url, name }) => {
  return (
    <div className="col-4 col-lg-1  skill">
      <img className="skill-icon" src={url} alt="skill icon" />
      <h2 className="text-center py-2 text-sm skill-name">{name}</h2>
    </div>
  );
};

export default Skill;

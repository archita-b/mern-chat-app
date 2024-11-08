const GenderCheckBox = ({ onCheckGender, selectGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-gray-700">Male</span>
          <input
            type="checkbox"
            className={`checkbox border-slate-900 ${
              selectGender === "male" ? "selected" : ""
            }`}
            checked={selectGender === "male"}
            onChange={() => onCheckGender("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-gray-700">Female</span>
          <input
            type="checkbox"
            className={`checkbox border-slate-900 ${
              selectGender === "female" ? "selected" : ""
            }`}
            checked={selectGender === "female"}
            onChange={() => onCheckGender("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;

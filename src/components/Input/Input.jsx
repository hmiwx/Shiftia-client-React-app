import React, { useEffect, useReducer } from "react";
import validator from "../../validators/Validator";
import { errorMessage } from "../../validators/Rules";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        invalids: validator(action.value, action.validations)
      };
    }
    default: {
      return state;
    }
  }
};

export default function Input(props) {
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    invalids: [],
  });

  const { value, invalids } = mainInput;
  const { id, onInputHandler } = props;

  useEffect(() => {
    onInputHandler(id, value, invalids);
  }, [value]);

  const onChangeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validations: props.validations,
      invalids: [],
    });
  };

  const element =
    props.element === "input" ? (
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className} ${!mainInput.invalids.length ? "border-green-500" : "border-red-500"}`}
        value={mainInput.value}
        onChange={onChangeHandler}
      />
    ) : (
      <textarea
        placeholder={props.placeholder}
        className={`${props.className} ${!mainInput.invalids.length ? "border-green-500" : "border-red-500"}`}
        onChange={onChangeHandler}
        value={mainInput.value}
      />
    );

  return (
    <div>
      {element}
      {props.iconClasses &&
        <i className={props.iconClasses}></i>}
      {!!mainInput.invalids.length &&
        mainInput.invalids.map((error, index) => (
          <p className="text-red-500 text-sm mt-1" key={index}>
            {errorMessage(error)}
          </p>
        )

        )}
    </div>)
}

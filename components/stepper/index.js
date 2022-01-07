const Stepper = ({ stepLabels, activeStep, classes }) => {
  return (
    <div className={`p-6 flex justify-center ${classes}`}>
      {stepLabels.map((label, index) => (
        <div
          key={label}
          className="px-2 relative flex flex-col items-center flex-1"
        >
          <div
            className={`w-8 h-8 rounded-[50%] flex items-center justify-center font-extrabold ${
              activeStep >= index + 1
                ? "bg-primary-color text-white"
                : "border-2 border-primary-color border-solid text-font-color-dark"
            }`}
          >
            {activeStep > index + 1 ? (
              <svg
                x="0px"
                y="0px"
                viewBox="0 0 405.272 405.272"
                style={{ width: "1.25rem", height: "1.25rem" }}
              >
                <g>
                  <path
                    fill="#ffffff"
                    d="M393.401,124.425L179.603,338.208c-15.832,15.835-41.514,15.835-57.361,0L11.878,227.836
                                            c-15.838-15.835-15.838-41.52,0-57.358c15.841-15.841,41.521-15.841,57.355-0.006l81.698,81.699L336.037,67.064
                                            c15.841-15.841,41.523-15.829,57.358,0C409.23,82.902,409.23,108.578,393.401,124.425z"
                  />
                </g>
              </svg>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`mt-4 text-xl text-center ${
              activeStep === index + 1 ? "font-bold" : "font-normal"
            }`}
          >
            {label}
          </div>
          {
            //connector part
            index > 0 ? (
              <div className="absolute left-[calc(-50%+1rem)] right-[calc(50%+1rem)] top-4 h-[2px] bg-primary-color" />
            ) : null
          }
        </div>
      ))}
    </div>
  );
};

export default Stepper;

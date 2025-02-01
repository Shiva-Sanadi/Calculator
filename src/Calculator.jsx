import {useState} from "react"

const Calculator = () => {
    const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      // Evaluate the mathematical expression
      setInput(eval(input).toString());
    } catch (error) {
      setInput(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-80 bg-white p-4 rounded-lg shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full text-right p-3 text-lg border rounded-lg bg-gray-50"
            placeholder="0"
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {/* Buttons */}
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "C", "+"].map((value) => (
              <button key={value}
                onClick={() => (value === "C" ? clearInput() : handleClick(value))}
                className="p-3 text-lg bg-gray-200 hover:bg-gray-300 rounded-lg"
              >
                {value}
              </button>
            )
          )}
          <button
            onClick={calculateResult}
            className="col-span-4 p-3 text-lg bg-blue-500 text-white hover:bg-blue-600 rounded-lg"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
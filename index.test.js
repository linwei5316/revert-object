const revertObject = require("./index.js");

test("test revert object", () => {
  const inputValue = {
    hired: {
      be: {
        to: {
          deserve: 'I'
        }
      }
    }
  };

  const outputValue = {
    I: {
      deserve: {
        to: {
          be: 'hired'
        }
      }
    }
  };

  expect(revertObject(inputValue)).toEqual(outputValue)
})

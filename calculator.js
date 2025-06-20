function addvalue(value) {
        document.getElementById("result").value += value;
      }

      function eraseLast() {
        const display = document.getElementById("result");
        display.value = display.value.slice(0, -1);
      }

      function calculate() {
        try {
          document.getElementById("result").value = eval(
            document.getElementById("result").value
          );
        } catch {
          document.getElementById("result").value = "Error";
        }
      }

      //adding event listner
      document.addEventListener("keydown", function (event) {
        const key = event.key;
        const allowedKeys = "0123456789+-*/.=EnterBackspace";
        const display = document.getElementById("result");

        if (allowedKeys.includes(key)) {
          if (key === "Enter" || key === "=") {
            calculate();
          } else if (key === "Backspace") {
            eraseLast();
          } else {
            addvalue(key);
          }
        }
      });
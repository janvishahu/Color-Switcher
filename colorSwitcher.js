const buttons = document.querySelectorAll(".button");

        // Function to change background color
        buttons.forEach(button => {
            button.addEventListener("click", function () {
                document.body.style.backgroundColor = this.style.backgroundColor;
            });
        });
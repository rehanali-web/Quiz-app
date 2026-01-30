function see() {
    let score = 0;

    // Question 1
    let q1 = document.getElementsByName("q1");
    for (let option of q1) {
        if (option.checked && option.value === "2") score++;
    }

    // Question 2
    let q2 = document.getElementsByName("q2");
    for (let option of q2) {
        if (option.checked && option.value === "1") score++;
    }

    // Question 3
    let q3 = document.getElementsByName("q3");
    for (let option of q3) {
        if (option.checked && option.value === "4") score++;
    }

    // Question 4
    let q4 = document.getElementsByName("q4");
    for (let option of q4) {
        if (option.checked && option.value === "3") score++;
}
    // Question 5
    let q5 = document.getElementsByName("q5");
    for (let option of q5) {
        if (option.checked && option.value === "3") score++;
    }

    // Question 6
    let q6 = document.getElementsByName("q6");
    for (let option of q6) {
        if (option.checked && option.value === "1") score++;
    }

    // Question 7
    let q7 = document.getElementsByName("q7");
    for (let option of q7) {
        if (option.checked && option.value === "3") score++;
    }

    // Question 8
    let q8 = document.getElementsByName("q8");
    for (let option of q8) {
        if (option.checked && option.value === "2") score++;
    }

    // Question 9
    let q9 = document.getElementsByName("q9");
    for (let option of q9) {
        if (option.checked && option.value === "2") score++;
    }

    // Question 10
    let q10 = document.getElementsByName("q10");
    for (let option of q10) {
        if (option.checked && option.value === "1") score++;
    }

    // Show result
    document.getElementById("result").innerText = "Quiz Complete!";
    document.getElementById("score").innerText = "Score: " + score + " / 10";
}

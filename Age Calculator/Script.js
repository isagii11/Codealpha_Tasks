document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const birthDay = parseInt(document.getElementById('birthDay').value);
    const birthMonth = parseInt(document.getElementById('birthMonth').value);
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const today = new Date();

    // Get max year dynamically
    document.getElementById('birthYear').max = today.getFullYear();

    // Validate entered date
    if (isNaN(birthDay) || isNaN(birthMonth) || isNaN(birthYear)) {
        alert("Please enter a valid birth date.");
        return;
    }

    if (birthYear > today.getFullYear() || birthYear < 1900) {
        alert("Year must be between 1900 and " + today.getFullYear());
        return;
    }

    if (birthMonth < 1 || birthMonth > 12) {
        alert("Month must be between 1 and 12.");
        return;
    }

    const daysInMonth = new Date(birthYear, birthMonth, 0).getDate();
    if (birthDay < 1 || birthDay > daysInMonth) {
        alert(`Invalid day! The selected month has only ${daysInMonth} days.`);
        return;
    }

    const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
    let ageYears = today.getFullYear() - birthYear;
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Show result dynamically
    document.getElementById('result').style.opacity = 1;
    document.getElementById('ageOutput').textContent = 
        `Your age is: ${ageYears} years, ${ageMonths} months, and ${ageDays} days.`;
});

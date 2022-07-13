function generate() {
    const random = Math.random().toString(16).substring(2)
    document.getElementById('new_passowrd').value = random;
}
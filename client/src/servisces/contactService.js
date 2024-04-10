const fetchRandomContact = async () => {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const randomUser = data.results[0];
        console.log(randomUser);
        // Extracting required information from the random user data
        const id = randomUser.id.value;
        const name = `${randomUser.name.first} ${randomUser.name.last}`;
        const phone = randomUser.phone;
        const title = randomUser.name.title;
        const avatarUrl = randomUser.picture.large;
        return {id, name, phone, title, avatarUrl };
    } catch (error) {
        console.error("Error fetching random contact:", error);
        throw error;
    }
};

export { fetchRandomContact };



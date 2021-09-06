const loadProfiles = async () => {
    const searchInput = document.getElementById('search-input');
    const searchName = searchInput.value;
    if (searchName === '') {
        document.getElementById('error').innerHTML = `<p class="text-center text-white bg-danger p-2">Please type Your user name First.</p>`;
        document.getElementById('user-profile').innerHTML = '';
    } else {
        const response = await fetch(`https://api.github.com/users/${searchName}`);
        const data = await response.json();
        document.getElementById('error').innerHTML = '';
        searchInput.value = '';
        displayProfile(data);
    }
}
//Display Users Profile
const displayProfile = (profile) => {
    if (profile.name === undefined) {
        document.getElementById('error').innerHTML = `<p class="text-center text-white bg-danger p-2">Data Not Found.</p>`;
        document.getElementById('user-profile').innerHTML = '';
    } else {
        const userProfile = document.getElementById('user-profile');
        userProfile.innerHTML = `
        <div class="col-md-4">
            <img src="${profile.avatar_url}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title text-primary">Name : ${profile.name}</h5>
                <h6 class="card-title text-danger">User Name : @${profile.login}</h6>
                <p class="card-text text-white">Bio : ${profile.bio}</p>
                <p class="card-text text-white">Public Repo : ${profile.public_repos}</p>
                <p class="card-text text-white">Followers : ${profile.followers}</p>
                <a class="btn btn-primary" href="${profile.html_url}" role="button">Github Profile</a>
            </div>
        </div>
    `;
    }


}
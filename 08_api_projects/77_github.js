class Github {
    constructor(){
        this.client_id ='30c7e1919a73dd58e8b6';
        this.client_secret = '33026b6e72dfc1680435adf767aa1204c866c179';
        this.repos_count =5;
        this.repos_sort = 'created: asc';
    }


    async getUser(user){
     const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

     const reposResponse = await fetch (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

     const profile = await profileResponse.json(); ///I didn't undertsand this

     const repos = await reposResponse.json();

     return {
         profile,
         repos
     }
    }
}
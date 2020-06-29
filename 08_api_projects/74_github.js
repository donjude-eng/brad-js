class Github {
    constructor(){
        this.client_id ='30c7e1919a73dd58e8b6';
        this.client_secret = '33026b6e72dfc1680435adf767aa1204c866c179';
    }

    async getUser(user){

     const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);


     console.log(profileResponse);


     const profile = await profileResponse.json();

     return {
         profile
     }


    }
}
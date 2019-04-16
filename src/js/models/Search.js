import axios from 'axios' 

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async  getResults() {
        const proxy ='';
        const key = '397a75e9fe08d21e0b8e57b8a953eba8';
        try {

            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result= res.data.recipes;
            //console.log(this.result);

        } catch (error) {
            alert(error);
        }
    }
}
 

import Search from './models/Search';

/**Global State of the app
 * - Search Object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */

const state={};

const controlSearech= async ()=>{

    // 1) Get the query from the view
    const query = 'pizza';  //TODO from view

    if (query) {
        // 2) New Search object and add to state
        state.search = new Search(query);

        // 3) Prepare the UI for results.

        //4) Search for recipes
        await state.search.getResults();

        //5) Rendor reults on UI
        console.log(state.search.result);
        
    }

}

document.querySelector('.search').addEventListener('submit',e=>{
    e.preventDefault();
    controlSearech();
})

const search = new Search('pizza');
console.log(search);
search.getResults();

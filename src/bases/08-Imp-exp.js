import heroes from '../data/heroes';


export const getHeroeById = (id) => heroes.find((heroes) => heroes.id === id);


export const getHeroresByOwner = (owner) => heroes.filter((heroes) => heroes.owner === owner);
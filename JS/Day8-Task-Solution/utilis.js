export function greetUser(name){
    return `Hello ${name}!`;
}


export default class DataFetcher {
  async getUser(id) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!response.ok) {
        throw new Error(`User with ID ${id} not found`);
      }
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error("Error fetching user:", error.message);
      return null;
    }
  }
}

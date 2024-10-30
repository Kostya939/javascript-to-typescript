
import { Post } from "../types/types.d";

export async function fetchData(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data: Post[] = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data", error);
    }
}

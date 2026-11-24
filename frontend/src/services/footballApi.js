import { mockFixtures } from "./mockFixtures";

export async function getFixtures() {
    // Simulate network delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockFixtures);
        }, 500);
    });
}




